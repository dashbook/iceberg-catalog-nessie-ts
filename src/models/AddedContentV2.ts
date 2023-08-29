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
import type { ContentKeyV2 } from './ContentKeyV2';
import {
    ContentKeyV2FromJSON,
    ContentKeyV2FromJSONTyped,
    ContentKeyV2ToJSON,
} from './ContentKeyV2';

/**
 * 
 * @export
 * @interface AddedContentV2
 */
export interface AddedContentV2 {
    /**
     * 
     * @type {ContentKeyV2}
     * @memberof AddedContentV2
     */
    key: ContentKeyV2;
}

/**
 * Check if a given object implements the AddedContentV2 interface.
 */
export function instanceOfAddedContentV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;

    return isInstance;
}

export function AddedContentV2FromJSON(json: any): AddedContentV2 {
    return AddedContentV2FromJSONTyped(json, false);
}

export function AddedContentV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AddedContentV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': ContentKeyV2FromJSON(json['key']),
    };
}

export function AddedContentV2ToJSON(value?: AddedContentV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': ContentKeyV2ToJSON(value.key),
    };
}

