/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductDto } from '../models/CreateProductDto';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Create a new product
     * @returns any Product created successfully
     * @throws ApiError
     */
    public static productsControllerCreate({
        requestBody,
    }: {
        requestBody: CreateProductDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/products',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden - Admin only`,
            },
        });
    }
    /**
     * Get all products
     * @returns any Products retrieved successfully
     * @throws ApiError
     */
    public static productsControllerFindAll({
        skip,
        take,
        factoryId,
    }: {
        skip?: number,
        take?: number,
        factoryId?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/products',
            query: {
                'skip': skip,
                'take': take,
                'factoryId': factoryId,
            },
        });
    }
    /**
     * Get a product by ID
     * @returns any Product retrieved successfully
     * @throws ApiError
     */
    public static productsControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/products/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Product not found`,
            },
        });
    }
    /**
     * Update a product
     * @returns any Product updated successfully
     * @throws ApiError
     */
    public static productsControllerUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateProductDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/products/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden - Admin only`,
                404: `Product not found`,
            },
        });
    }
    /**
     * Delete a product
     * @returns any Product deleted successfully
     * @throws ApiError
     */
    public static productsControllerRemove({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/products/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Forbidden - Admin only`,
                404: `Product not found`,
            },
        });
    }
    /**
     * Reindex all products in Meilisearch
     * @returns any Products reindexed successfully
     * @throws ApiError
     */
    public static productsControllerReindex(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/products/reindex',
            errors: {
                403: `Forbidden - Admin only`,
            },
        });
    }
}
