/* tslint:disable */
/* eslint-disable */
/**
 * Nessie API
 * Transactional Catalog for Data Lakes  * Git-inspired data version control * Cross-table transactions and visibility * Works with Apache Iceberg tables
 *
 * The version of the OpenAPI document: 0.69.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ThePreviousStateOfTheRepositoryConfigurationObject1 } from './ThePreviousStateOfTheRepositoryConfigurationObject1';
import {
    ThePreviousStateOfTheRepositoryConfigurationObject1FromJSON,
    ThePreviousStateOfTheRepositoryConfigurationObject1FromJSONTyped,
    ThePreviousStateOfTheRepositoryConfigurationObject1ToJSON,
} from './ThePreviousStateOfTheRepositoryConfigurationObject1';

/**
 * 
 * @export
 * @interface UpdateRepositoryConfigResponse
 */
export interface UpdateRepositoryConfigResponse {
    /**
     * 
     * @type {ThePreviousStateOfTheRepositoryConfigurationObject1}
     * @memberof UpdateRepositoryConfigResponse
     */
    previous?: ThePreviousStateOfTheRepositoryConfigurationObject1;
}

/**
 * Check if a given object implements the UpdateRepositoryConfigResponse interface.
 */
export function instanceOfUpdateRepositoryConfigResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateRepositoryConfigResponseFromJSON(json: any): UpdateRepositoryConfigResponse {
    return UpdateRepositoryConfigResponseFromJSONTyped(json, false);
}

export function UpdateRepositoryConfigResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRepositoryConfigResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'previous': !exists(json, 'previous') ? undefined : ThePreviousStateOfTheRepositoryConfigurationObject1FromJSON(json['previous']),
    };
}

export function UpdateRepositoryConfigResponseToJSON(value?: UpdateRepositoryConfigResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'previous': ThePreviousStateOfTheRepositoryConfigurationObject1ToJSON(value.previous),
    };
}

