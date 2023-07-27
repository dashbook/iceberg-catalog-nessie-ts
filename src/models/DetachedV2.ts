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
import type { ReferenceMetadataV2 } from './ReferenceMetadataV2';
import {
    ReferenceMetadataV2FromJSON,
    ReferenceMetadataV2FromJSONTyped,
    ReferenceMetadataV2ToJSON,
} from './ReferenceMetadataV2';

/**
 * 
 * @export
 * @interface DetachedV2
 */
export interface DetachedV2 {
    /**
     * 
     * @type {string}
     * @memberof DetachedV2
     */
    hash: string;
    /**
     * 
     * @type {ReferenceMetadataV2}
     * @memberof DetachedV2
     */
    metadata?: ReferenceMetadataV2;
}

/**
 * Check if a given object implements the DetachedV2 interface.
 */
export function instanceOfDetachedV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "hash" in value;

    return isInstance;
}

export function DetachedV2FromJSON(json: any): DetachedV2 {
    return DetachedV2FromJSONTyped(json, false);
}

export function DetachedV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DetachedV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hash': json['hash'],
        'metadata': !exists(json, 'metadata') ? undefined : ReferenceMetadataV2FromJSON(json['metadata']),
    };
}

export function DetachedV2ToJSON(value?: DetachedV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hash': value.hash,
        'metadata': ReferenceMetadataV2ToJSON(value.metadata),
    };
}

