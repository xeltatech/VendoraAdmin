/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PriceListsService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static priceListsControllerCreate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/price-lists',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static priceListsControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/price-lists',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static priceListsControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/price-lists/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static priceListsControllerUpdate({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/price-lists/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static priceListsControllerRemove({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/price-lists/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static priceListsControllerAddPrice({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/price-lists/{id}/prices',
            path: {
                'id': id,
            },
        });
    }
}
