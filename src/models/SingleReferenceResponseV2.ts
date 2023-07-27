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
import type { ReferenceV2 } from './ReferenceV2';
import {
    ReferenceV2FromJSON,
    ReferenceV2FromJSONTyped,
    ReferenceV2ToJSON,
} from './ReferenceV2';

/**
 * 
 * @export
 * @interface SingleReferenceResponseV2
 */
export interface SingleReferenceResponseV2 {
    /**
     * 
     * @type {ReferenceV2}
     * @memberof SingleReferenceResponseV2
     */
    reference: ReferenceV2;
}

/**
 * Check if a given object implements the SingleReferenceResponseV2 interface.
 */
export function instanceOfSingleReferenceResponseV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "reference" in value;

    return isInstance;
}

export function SingleReferenceResponseV2FromJSON(json: any): SingleReferenceResponseV2 {
    return SingleReferenceResponseV2FromJSONTyped(json, false);
}

export function SingleReferenceResponseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): SingleReferenceResponseV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reference': ReferenceV2FromJSON(json['reference']),
    };
}

export function SingleReferenceResponseV2ToJSON(value?: SingleReferenceResponseV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reference': ReferenceV2ToJSON(value.reference),
    };
}
