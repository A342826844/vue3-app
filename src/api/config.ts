import { axiosOfJava, axiosOfGoLang } from './axios';

const baseURL = 'http://127.0.0.1:4003';

export const getJava = (url: string, params?: object) => axiosOfJava({
    url,
    params,
    method: 'get',
    baseURL: process.env.NODE_ENV === 'production' ? baseURL : process.env.VUE_APP_JAVA_apiUrl,
});

export const postJava = (url: string, data?: object) => axiosOfJava({
    url,
    data,
    method: 'post',
    baseURL: process.env.NODE_ENV === 'production' ? baseURL : process.env.VUE_APP_JAVA_apiUrl,
});

export const getGolang = (url: string, params?: object) => axiosOfGoLang({
    url,
    params,
    method: 'get',
    withCredentials: false,
    baseURL: process.env.NODE_ENV === 'production' ? baseURL : process.env.VUE_APP_GOLANG_apiUrl,
});
export const postGolang = (url: string, data?: object) => axiosOfGoLang({
    url,
    data,
    method: 'post',
    withCredentials: false,
    baseURL: process.env.NODE_ENV === 'production' ? baseURL : process.env.VUE_APP_GOLANG_apiUrl,
});
