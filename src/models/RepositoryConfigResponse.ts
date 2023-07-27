/* tslint:disable */
/* eslint-disable */
/**
 * Nessie API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.65.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RepositoryConfig } from './RepositoryConfig';
import {
    RepositoryConfigFromJSON,
    RepositoryConfigFromJSONTyped,
    RepositoryConfigToJSON,
} from './RepositoryConfig';

/**
 * 
 * @export
 * @interface RepositoryConfigResponse
 */
export interface RepositoryConfigResponse {
    /**
     * The existing configuration objects for the requested types will be returned. Non-existing config objects will not be returned.
     * @type {Array<RepositoryConfig>}
     * @memberof RepositoryConfigResponse
     */
    configs?: Array<RepositoryConfig>;
}

/**
 * Check if a given object implements the RepositoryConfigResponse interface.
 */
export function instanceOfRepositoryConfigResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RepositoryConfigResponseFromJSON(json: any): RepositoryConfigResponse {
    return RepositoryConfigResponseFromJSONTyped(json, false);
}

export function RepositoryConfigResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepositoryConfigResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configs': !exists(json, 'configs') ? undefined : ((json['configs'] as Array<any>).map(RepositoryConfigFromJSON)),
    };
}

export function RepositoryConfigResponseToJSON(value?: RepositoryConfigResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configs': value.configs === undefined ? undefined : ((value.configs as Array<any>).map(RepositoryConfigToJSON)),
    };
}
