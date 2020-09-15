import { getJava, postJava } from './config';

type params = {
    [elem: string]: any;
}

export const getTestData = (data: params) => getJava('/test', data);
export const postTestUpdate = (id: string) => postJava(`/test/${id}/update`);
