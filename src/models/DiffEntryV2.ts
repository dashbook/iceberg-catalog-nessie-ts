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
import type { ContentV2 } from './ContentV2';
import {
    ContentV2FromJSON,
    ContentV2FromJSONTyped,
    ContentV2ToJSON,
} from './ContentV2';

/**
 * 
 * @export
 * @interface DiffEntryV2
 */
export interface DiffEntryV2 {
    /**
     * 
     * @type {ContentKeyV2}
     * @memberof DiffEntryV2
     */
    key?: ContentKeyV2;
    /**
     * 
     * @type {ContentV2}
     * @memberof DiffEntryV2
     */
    from?: ContentV2;
    /**
     * 
     * @type {ContentV2}
     * @memberof DiffEntryV2
     */
    to?: ContentV2;
}

/**
 * Check if a given object implements the DiffEntryV2 interface.
 */
export function instanceOfDiffEntryV2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiffEntryV2FromJSON(json: any): DiffEntryV2 {
    return DiffEntryV2FromJSONTyped(json, false);
}

export function DiffEntryV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DiffEntryV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : ContentKeyV2FromJSON(json['key']),
        'from': !exists(json, 'from') ? undefined : ContentV2FromJSON(json['from']),
        'to': !exists(json, 'to') ? undefined : ContentV2FromJSON(json['to']),
    };
}

export function DiffEntryV2ToJSON(value?: DiffEntryV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': ContentKeyV2ToJSON(value.key),
        'from': ContentV2ToJSON(value.from),
        'to': ContentV2ToJSON(value.to),
    };
}

