/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * Create a new order (draft)
     * @returns any Order created successfully
     * @throws ApiError
     */
    public static ordersControllerCreate({
        requestBody,
    }: {
        requestBody: CreateOrderDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                404: `Factory or variant not found`,
            },
        });
    }
    /**
     * Get all orders
     * @returns any Orders retrieved successfully
     * @throws ApiError
     */
    public static ordersControllerFindAll({
        skip,
        take,
        status,
    }: {
        skip?: number,
        take?: number,
        status?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/orders',
            query: {
                'skip': skip,
                'take': take,
                'status': status,
            },
        });
    }
    /**
     * Submit an order
     * Submits an order, generates PDF, and sends email to factory via BullMQ job queue
     * @returns any Order submitted and queued for processing
     * @throws ApiError
     */
    public static ordersControllerSubmit({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/orders/{id}/submit',
            path: {
                'id': id,
            },
            errors: {
                400: `Order already submitted or has no items`,
                404: `Order not found`,
            },
        });
    }
    /**
     * Get an order by ID
     * @returns any Order retrieved successfully
     * @throws ApiError
     */
    public static ordersControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/orders/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Order not found`,
            },
        });
    }
    /**
     * Get PDF URL for an order
     * @returns any PDF URL retrieved successfully
     * @throws ApiError
     */
    public static ordersControllerGetPdf({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/orders/{id}/pdf',
            path: {
                'id': id,
            },
            errors: {
                404: `Order or PDF not found`,
            },
        });
    }
}
