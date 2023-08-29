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
import type { ThePreviousStateOfTheRepositoryConfigurationObject } from './ThePreviousStateOfTheRepositoryConfigurationObject';
import {
    ThePreviousStateOfTheRepositoryConfigurationObjectFromJSON,
    ThePreviousStateOfTheRepositoryConfigurationObjectFromJSONTyped,
    ThePreviousStateOfTheRepositoryConfigurationObjectToJSON,
} from './ThePreviousStateOfTheRepositoryConfigurationObject';

/**
 * When a repository configuration for the same type as in the request object did not exist, the response object will be null. Otherwise, if the configuration was updated, the old value will be returned.
 * @export
 * @interface UpdateRepositoryConfigResponseV2
 */
export interface UpdateRepositoryConfigResponseV2 {
    /**
     * 
     * @type {ThePreviousStateOfTheRepositoryConfigurationObject}
     * @memberof UpdateRepositoryConfigResponseV2
     */
    previous?: ThePreviousStateOfTheRepositoryConfigurationObject;
}

/**
 * Check if a given object implements the UpdateRepositoryConfigResponseV2 interface.
 */
export function instanceOfUpdateRepositoryConfigResponseV2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateRepositoryConfigResponseV2FromJSON(json: any): UpdateRepositoryConfigResponseV2 {
    return UpdateRepositoryConfigResponseV2FromJSONTyped(json, false);
}

export function UpdateRepositoryConfigResponseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRepositoryConfigResponseV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'previous': !exists(json, 'previous') ? undefined : ThePreviousStateOfTheRepositoryConfigurationObjectFromJSON(json['previous']),
    };
}

export function UpdateRepositoryConfigResponseV2ToJSON(value?: UpdateRepositoryConfigResponseV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'previous': ThePreviousStateOfTheRepositoryConfigurationObjectToJSON(value.previous),
    };
}

