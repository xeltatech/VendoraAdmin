/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItemDto } from './OrderItemDto';
export type CreateOrderDto = {
    /**
     * Factory ID
     */
    factoryId: string;
    /**
     * Price list ID
     */
    priceListId?: string;
    /**
     * Order items
     */
    items: Array<OrderItemDto>;
    /**
     * Order notes
     */
    notes?: string;
};

