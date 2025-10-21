/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HealthService {
    /**
     * Health check endpoint
     * @returns any Service is healthy
     * @throws ApiError
     */
    public static appControllerGetHealth(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/health',
        });
    }
    /**
     * System metrics endpoint
     * @returns any System metrics
     * @throws ApiError
     */
    public static appControllerGetMetrics(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/metrics',
        });
    }
}
