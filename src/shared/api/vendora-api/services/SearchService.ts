/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
    /**
     * Search products using Meilisearch
     * @returns any Search results
     * @throws ApiError
     */
    public static searchControllerSearchProducts({
        q,
        category,
        factoryId,
        tags,
        limit,
        offset,
    }: {
        /**
         * Search query
         */
        q: string,
        /**
         * Filter by category
         */
        category?: string,
        /**
         * Filter by factory
         */
        factoryId?: string,
        /**
         * Filter by tags (comma-separated)
         */
        tags?: string,
        /**
         * Results limit
         */
        limit?: number,
        /**
         * Results offset
         */
        offset?: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/search/products',
            query: {
                'q': q,
                'category': category,
                'factoryId': factoryId,
                'tags': tags,
                'limit': limit,
                'offset': offset,
            },
        });
    }
}
