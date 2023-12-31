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
import type { ContentKey } from './ContentKey';
import {
    ContentKeyFromJSON,
    ContentKeyFromJSONTyped,
    ContentKeyToJSON,
} from './ContentKey';

/**
 * 
 * @export
 * @interface GetMultipleContentsRequest
 */
export interface GetMultipleContentsRequest {
    /**
     * 
     * @type {Array<ContentKey>}
     * @memberof GetMultipleContentsRequest
     */
    requestedKeys: Array<ContentKey>;
}

/**
 * Check if a given object implements the GetMultipleContentsRequest interface.
 */
export function instanceOfGetMultipleContentsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "requestedKeys" in value;

    return isInstance;
}

export function GetMultipleContentsRequestFromJSON(json: any): GetMultipleContentsRequest {
    return GetMultipleContentsRequestFromJSONTyped(json, false);
}

export function GetMultipleContentsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMultipleContentsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'requestedKeys': ((json['requestedKeys'] as Array<any>).map(ContentKeyFromJSON)),
    };
}

export function GetMultipleContentsRequestToJSON(value?: GetMultipleContentsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'requestedKeys': ((value.requestedKeys as Array<any>).map(ContentKeyToJSON)),
    };
}

