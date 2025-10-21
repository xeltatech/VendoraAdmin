/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateUserDto = {
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: UpdateUserDto.role;
    /**
     * Organization ID
     */
    organizationId?: string;
    /**
     * Factory ID (for factory_viewer role)
     */
    factoryId?: string;
};
export namespace UpdateUserDto {
    export enum role {
        ADMIN = 'ADMIN',
        SELLER = 'SELLER',
        FACTORY_VIEWER = 'FACTORY_VIEWER',
    }
}

