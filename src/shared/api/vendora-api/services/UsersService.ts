/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Create a new user
     * @returns any User created
     * @throws ApiError
     */
    public static usersControllerCreate({
        requestBody,
    }: {
        requestBody: CreateUserDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get all users
     * @returns any Users retrieved
     * @throws ApiError
     */
    public static usersControllerFindAll({
        skip,
        take,
    }: {
        skip: number,
        take: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users',
            query: {
                'skip': skip,
                'take': take,
            },
        });
    }
    /**
     * Get user by ID
     * @returns any User retrieved
     * @throws ApiError
     */
    public static usersControllerFindOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Update user
     * @returns any User updated
     * @throws ApiError
     */
    public static usersControllerUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateUserDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Delete user
     * @returns any User deleted
     * @throws ApiError
     */
    public static usersControllerRemove({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
}
