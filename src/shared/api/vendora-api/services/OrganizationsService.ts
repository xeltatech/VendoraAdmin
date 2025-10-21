/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationsService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static organizationsControllerCreate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/organizations',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static organizationsControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/organizations',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static organizationsControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/organizations/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static organizationsControllerUpdate({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/organizations/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static organizationsControllerRemove({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/organizations/{id}',
            path: {
                'id': id,
            },
        });
    }
}
