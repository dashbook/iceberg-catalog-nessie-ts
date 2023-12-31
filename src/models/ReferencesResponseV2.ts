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
import type { ReferenceV2 } from './ReferenceV2';
import {
    ReferenceV2FromJSON,
    ReferenceV2FromJSONTyped,
    ReferenceV2ToJSON,
} from './ReferenceV2';

/**
 * 
 * @export
 * @interface ReferencesResponseV2
 */
export interface ReferencesResponseV2 {
    /**
     * 
     * @type {boolean}
     * @memberof ReferencesResponseV2
     */
    hasMore?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReferencesResponseV2
     */
    token?: string;
    /**
     * 
     * @type {Array<ReferenceV2>}
     * @memberof ReferencesResponseV2
     */
    references: Array<ReferenceV2>;
}

/**
 * Check if a given object implements the ReferencesResponseV2 interface.
 */
export function instanceOfReferencesResponseV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "references" in value;

    return isInstance;
}

export function ReferencesResponseV2FromJSON(json: any): ReferencesResponseV2 {
    return ReferencesResponseV2FromJSONTyped(json, false);
}

export function ReferencesResponseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencesResponseV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'references': ((json['references'] as Array<any>).map(ReferenceV2FromJSON)),
    };
}

export function ReferencesResponseV2ToJSON(value?: ReferencesResponseV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasMore': value.hasMore,
        'token': value.token,
        'references': ((value.references as Array<any>).map(ReferenceV2ToJSON)),
    };
}

