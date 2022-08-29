import axios from 'axios';

// REACT_APP_BASE_URL
const httpMockApi = axios.create({
    baseURL: 'https://630c18c283986f74a7b9c89d.mockapi.io/donaldvn-profile/api/',
});

export const get = async (path) => {
    const res = await httpMockApi.get(path);

    return res.data;
};
export default httpMockApi;
