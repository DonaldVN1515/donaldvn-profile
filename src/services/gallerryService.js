import * as httpMockApi from '~/utils/httpMockApi';

export const gallerry = async () => {
    try {
        const res = await httpMockApi.get('gallerry');

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
