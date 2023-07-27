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
import type { DiffEntry } from './DiffEntry';
import {
    DiffEntryFromJSON,
    DiffEntryFromJSONTyped,
    DiffEntryToJSON,
} from './DiffEntry';
import type { Reference } from './Reference';
import {
    ReferenceFromJSON,
    ReferenceFromJSONTyped,
    ReferenceToJSON,
} from './Reference';

/**
 * 
 * @export
 * @interface DiffResponse
 */
export interface DiffResponse {
    /**
     * 
     * @type {boolean}
     * @memberof DiffResponse
     */
    hasMore?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DiffResponse
     */
    token?: string;
    /**
     * 
     * @type {Array<DiffEntry>}
     * @memberof DiffResponse
     */
    diffs?: Array<DiffEntry>;
    /**
     * 
     * @type {Reference}
     * @memberof DiffResponse
     */
    effectiveFromReference?: Reference;
    /**
     * 
     * @type {Reference}
     * @memberof DiffResponse
     */
    effectiveToReference?: Reference;
}

/**
 * Check if a given object implements the DiffResponse interface.
 */
export function instanceOfDiffResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiffResponseFromJSON(json: any): DiffResponse {
    return DiffResponseFromJSONTyped(json, false);
}

export function DiffResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiffResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'diffs': !exists(json, 'diffs') ? undefined : ((json['diffs'] as Array<any>).map(DiffEntryFromJSON)),
        'effectiveFromReference': !exists(json, 'effectiveFromReference') ? undefined : ReferenceFromJSON(json['effectiveFromReference']),
        'effectiveToReference': !exists(json, 'effectiveToReference') ? undefined : ReferenceFromJSON(json['effectiveToReference']),
    };
}

export function DiffResponseToJSON(value?: DiffResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasMore': value.hasMore,
        'token': value.token,
        'diffs': value.diffs === undefined ? undefined : ((value.diffs as Array<any>).map(DiffEntryToJSON)),
        'effectiveFromReference': ReferenceToJSON(value.effectiveFromReference),
        'effectiveToReference': ReferenceToJSON(value.effectiveToReference),
    };
}
