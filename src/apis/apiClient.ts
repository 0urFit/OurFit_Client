import axios, { AxiosError, AxiosResponse, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { API_METHOD, API_URL, EXPIRED_REFRESH_TOKEN_MESSAGE } from './constants';
import { manageAccessToken } from '@/utils/manageLocalStorage';
import { manageRefreshToken } from '@/utils/manageCookie';
import { ServiceErrorMessage } from './type';
import { TokenUpdate } from './apiService';

export class ApiInstance {
    private axiosAuthenticated: AxiosInstance;
    private auth: boolean;

    constructor(isAuth: boolean) {
        this.axiosAuthenticated = axios.create({
            baseURL: API_URL,
            headers: { 'Content-Type': 'application/json; charset=utf-8;' },
        });
        this.auth = isAuth;

        if (this.auth) {
            this.setInterceptors();
        }
    }

    setInterceptors() {
        this.axiosAuthenticated.interceptors.request.use(this.reqMiddleWare.bind(this), this.reqOnError.bind(this));
        this.axiosAuthenticated.interceptors.response.use(this.resMiddleWare.bind(this), this.resOnError.bind(this));
    }

    reqMiddleWare(config: InternalAxiosRequestConfig) {
        const newConfig = config;

        if (this.auth) {
            newConfig.headers.Authorization = `Bearer ${manageAccessToken.GET()}`;
        }

        return newConfig;
    }

    reqOnError(error: AxiosError) {
        return Promise.reject(error);
    }

    resMiddleWare(response: AxiosResponse) {
        return response;
    }

    async resOnError(error: AxiosError) {
        if (axios.isAxiosError(error) && error.response) {
            const { config, response } = error;
            const { status } = response;

            if (status === 401) {
                const refreshToken = manageRefreshToken.GET();

                try {
                    const newAccessToken = await TokenUpdate(refreshToken);

                    const { accessToken } = newAccessToken.data.result;

                    manageAccessToken.REMOVE();
                    manageAccessToken.SET(accessToken);

                    if (config) {
                        config.headers.Authorization = `Bearer ${accessToken}`;
                        return axios(config);
                    }
                } catch (error) {
                    if (axios.isAxiosError<ServiceErrorMessage>(error) && error.response) {
                        const { message } = error.response.data;

                        if (message === EXPIRED_REFRESH_TOKEN_MESSAGE) {
                            manageAccessToken.REMOVE();
                            manageRefreshToken.REMOVE();

                            window.location.href = '/';
                        }
                    }
                }
            }
            return Promise.reject(error);
        }
    }

    get(endpoint: string, params?: object | null) {
        return this.axiosAuthenticated({
            method: API_METHOD.GET,
            url: `${endpoint}`,
            params,
        });
    }

    post(endpoint: string, data?: object) {
        return this.axiosAuthenticated({
            method: API_METHOD.POST,
            url: `${endpoint}`,
            data,
        });
    }

    delete(endpoint: string) {
        return this.axiosAuthenticated({
            method: API_METHOD.DELETE,
            url: `${endpoint}`,
        });
    }

    patch(endpoint: string, data: object) {
        return this.axiosAuthenticated({
            method: API_METHOD.PATCH,
            url: `${endpoint}`,
            data,
        });
    }
}
