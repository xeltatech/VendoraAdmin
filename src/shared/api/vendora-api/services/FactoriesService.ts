/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FactoriesService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static factoriesControllerCreate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/factories',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static factoriesControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/factories',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static factoriesControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/factories/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static factoriesControllerUpdate({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/factories/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static factoriesControllerRemove({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/factories/{id}',
            path: {
                'id': id,
            },
        });
    }
}
