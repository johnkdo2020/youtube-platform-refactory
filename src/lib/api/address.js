import client from './client';

export const createAddress = (address) => {
    return client.post(
        `/members/address/`,
        { address },
        {
            headers: {
                Authorization: `Token ${sessionStorage.getItem('token')}`,
            },
        },
    );
};

export const readAddress = () => {
    return client.get('/members/address/', {
        headers: {
            Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
    });
};

export const getAddressDetail = (id) => {
    return client.get(`/members/address/${id}/`, {
        headers: {
            Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
    });
};

export const updateAddress = ({ id, selected_address }) => {
    return client.put(
        `/members/address/${id}/update/`,
        { selected_address },
        {
            headers: {
                Authorization: `Token ${sessionStorage.getItem('token')}`,
            },
        },
    );
};

export const updateAddressDetail = ({
    id,
    receiveName,
    phoneNumber,
    default_address,
}) => {
    return client.put(
        `/members/address/${id}/detail/`,
        { receiveName, phoneNumber, default_address },
        {
            headers: {
                Authorization: `Token ${sessionStorage.getItem('token')}`,
            },
        },
    );
};

export const removeAddress = (id) => {
    return client.delete(`/members/address/${id}/detail/`, {
        headers: {
            Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
    });
};
