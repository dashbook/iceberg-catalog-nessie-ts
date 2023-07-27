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
import type { ContentKeyV2 } from './ContentKeyV2';
import {
    ContentKeyV2FromJSON,
    ContentKeyV2FromJSONTyped,
    ContentKeyV2ToJSON,
} from './ContentKeyV2';

/**
 * 
 * @export
 * @interface UnchangedV2
 */
export interface UnchangedV2 {
    /**
     * 
     * @type {ContentKeyV2}
     * @memberof UnchangedV2
     */
    key: ContentKeyV2;
}

/**
 * Check if a given object implements the UnchangedV2 interface.
 */
export function instanceOfUnchangedV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;

    return isInstance;
}

export function UnchangedV2FromJSON(json: any): UnchangedV2 {
    return UnchangedV2FromJSONTyped(json, false);
}

export function UnchangedV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): UnchangedV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': ContentKeyV2FromJSON(json['key']),
    };
}

export function UnchangedV2ToJSON(value?: UnchangedV2 | null): any {
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
