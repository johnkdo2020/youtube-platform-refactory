import React, { useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PopupBlock = styled.div`
    width: 100%;
    padding: 32px 30px 0 30px;
    .headline-block {
        width: 100%;
        display: flex;
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
    }
    .delivery-info-block {
        width: 100%;
        min-height: 464px;
        .info-block {
            padding-top: 22px;
            .address-block {
                input::placeholder {
                    color: ${palette.gray[5]};
                }
                .main-address {
                    padding-bottom: 7px;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                }
                .detail-address {
                    width: 100%;
                    height: 44px;
                    padding: 1px 11px 0 15px;
                    border-radius: 3px;
                    font-family: sans-serif;
                    font-weight: 500;
                    font-size: 15px;
                    border: 1px solid #ddd;
                }
                .column-block {
                    padding-bottom: 5px;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 20px;
                }
                .value-block {
                    width: 100%;
                    height: 44px;
                    padding: 1px 11px 0 15px;
                    border-radius: 3px;
                    font-family: sans-serif;
                    font-weight: 500;
                    font-size: 15px;
                    border: 1px solid #ddd;
                }
            }
        }
        .default-address-block {
            padding: 20px 0 19px;
            font-size: 14px;
            .default-address-inner-check {
                display: flex;
                .check-box {
                    display: flex;
                    align-items: center;
                }
                .default-box {
                    font-weight: 400;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding-left: 7px;
                }
            }

            .btn-block {
                width: 100%;

                button {
                    width: 100%;
                    border-radius: 3px;
                    font-weight: 700;
                    line-height: 42px;
                    height: 44px;
                }
                .save-btn {
                    margin-top: 12px;
                    background-color: ${palette.cyan[5]};
                    border: 1px solid ${palette.cyan[5]};
                    color: #fff;
                }
                .delete-btn {
                    margin-top: 12px;
                    background-color: #fff;
                    border: 1px solid ${palette.gray[4]};
                }
            }
        }
    }
`;

const PopupComponent = ({
    selectedAddress,
    selectedAddressError,
    selectedAddressLoading,
    onSavePostCodeDetailInfo,
    onChangeField,
    onClosePopup,
    receiveName,
    phoneNumber,
    // id
}) => {
    const onChange = useCallback((e) => {
        onChangeField({ key: e.target.name, value: e.target.value });
    }, []);
    if (selectedAddressError) {
        <PopupBlock>?????? api error</PopupBlock>;
    }
    const { id, receive_name, phone_number } = selectedAddress.results[0];
    console.log(id, receive_name, phone_number);
    // ?????? ???????????????(?????? ?????? ??????)
    // Pop up ????????? - ?????? ????????? - ?????? ???????????????(?????? ?????? ??????)
    // const { id } = selectedAddress.results[0]
    return (
        <PopupBlock>
            <div className="headline-block">
                <div className="title">????????? ??????</div>
            </div>
            <div className="delivery-info-block">
                <div className="info-block">
                    <div className="address-block">
                        <div className="column-block">????????? ???</div>
                        {!selectedAddressLoading && selectedAddress && (
                            <div className="column-block">{receive_name}</div>
                        )}
                        <input
                            className="value-block"
                            placeholder="????????? ??????????????????."
                            name="receiveName"
                            onChange={onChange}
                            value={receiveName}
                        />
                    </div>
                </div>
                <div className="info-block">
                    <div className="address-block">
                        <div className="column-block">????????? ??????</div>
                        {!selectedAddressLoading && selectedAddress && (
                            <div className="column-block">{phone_number}</div>
                        )}
                        <input
                            className="value-block"
                            placeholder="????????? ????????? ??????????????????."
                            name="phoneNumber"
                            onChange={onChange}
                            value={phoneNumber}
                        />
                    </div>
                </div>
                <div className="default-address-block">
                    <div className="btn-block">
                        <button
                            className="save-btn"
                            onClick={() =>
                                onSavePostCodeDetailInfo({
                                    id,
                                    receiveName,
                                    phoneNumber,
                                })
                            }
                        >
                            ??????
                        </button>
                    </div>
                    <div className="btn-block">
                        <button
                            className="delete-btn"
                            onClick={() => onClosePopup()}
                        >
                            ??????
                        </button>
                    </div>
                </div>
            </div>
        </PopupBlock>
    );
};
export default PopupComponent;
