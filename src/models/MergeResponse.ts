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
import type { ContentKeyDetails } from './ContentKeyDetails';
import {
    ContentKeyDetailsFromJSON,
    ContentKeyDetailsFromJSONTyped,
    ContentKeyDetailsToJSON,
} from './ContentKeyDetails';

/**
 * 
 * @export
 * @interface MergeResponse
 */
export interface MergeResponse {
    /**
     * 
     * @type {string}
     * @memberof MergeResponse
     */
    resultantTargetHash?: string;
    /**
     * 
     * @type {string}
     * @memberof MergeResponse
     */
    commonAncestor?: string;
    /**
     * 
     * @type {string}
     * @memberof MergeResponse
     */
    targetBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof MergeResponse
     */
    effectiveTargetHash?: string;
    /**
     * 
     * @type {string}
     * @memberof MergeResponse
     */
    expectedHash?: string;
    /**
     * 
     * @type {Array<ContentKeyDetails>}
     * @memberof MergeResponse
     */
    details?: Array<ContentKeyDetails>;
}

/**
 * Check if a given object implements the MergeResponse interface.
 */
export function instanceOfMergeResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MergeResponseFromJSON(json: any): MergeResponse {
    return MergeResponseFromJSONTyped(json, false);
}

export function MergeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MergeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resultantTargetHash': !exists(json, 'resultantTargetHash') ? undefined : json['resultantTargetHash'],
        'commonAncestor': !exists(json, 'commonAncestor') ? undefined : json['commonAncestor'],
        'targetBranch': !exists(json, 'targetBranch') ? undefined : json['targetBranch'],
        'effectiveTargetHash': !exists(json, 'effectiveTargetHash') ? undefined : json['effectiveTargetHash'],
        'expectedHash': !exists(json, 'expectedHash') ? undefined : json['expectedHash'],
        'details': !exists(json, 'details') ? undefined : ((json['details'] as Array<any>).map(ContentKeyDetailsFromJSON)),
    };
}

export function MergeResponseToJSON(value?: MergeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resultantTargetHash': value.resultantTargetHash,
        'commonAncestor': value.commonAncestor,
        'targetBranch': value.targetBranch,
        'effectiveTargetHash': value.effectiveTargetHash,
        'expectedHash': value.expectedHash,
        'details': value.details === undefined ? undefined : ((value.details as Array<any>).map(ContentKeyDetailsToJSON)),
    };
}
