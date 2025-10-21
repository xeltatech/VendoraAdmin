/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDto } from '../models/LoginDto';
import type { LoginResponseDto } from '../models/LoginResponseDto';
import type { RefreshTokenDto } from '../models/RefreshTokenDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * User login
     * @returns LoginResponseDto Login successful
     * @throws ApiError
     */
    public static authControllerLogin({
        requestBody,
    }: {
        requestBody: LoginDto,
    }): CancelablePromise<LoginResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid credentials`,
            },
        });
    }
    /**
     * Refresh access token
     * @returns any Token refreshed successfully
     * @throws ApiError
     */
    public static authControllerRefresh({
        requestBody,
    }: {
        requestBody: RefreshTokenDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/refresh',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid refresh token`,
            },
        });
    }
    /**
     * User logout
     * @returns any Logout successful
     * @throws ApiError
     */
    public static authControllerLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/logout',
        });
    }
    /**
     * Get current user
     * @returns any Current user information
     * @throws ApiError
     */
    public static authControllerGetMe(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/me',
        });
    }
}
