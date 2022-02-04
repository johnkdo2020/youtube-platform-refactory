import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';

// 새로고침 이후 임시 로그인 처리
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
    createRequestActionTypes('user/CHECK');
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
// 로그아웃 api 받아와서 성공하는것 구현하기
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.getToken);

function checkFailureSaga() {
    try {
        localStorage.removeItem('user'); // localStorage에서 user를 제거
    } catch (e) {
        console.log('localStorage is not working');
    }
}

function* logoutSaga() {
    try {
        yield call(authAPI.logout);
        localStorage.removeItem('user');
        sessionStorage.removeItem('token');
        window.location.go();
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}
const initialState = {
    user: null,
    checkError: null,
};
export default handleActions(
    {
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user: null,
            checkError: error,
        }),
        [LOGOUT]: (state) => ({
            ...state,
            user: null,
        }),
    },
    initialState,
);
