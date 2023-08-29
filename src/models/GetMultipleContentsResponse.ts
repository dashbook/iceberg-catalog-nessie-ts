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
import type { ContentWithKey } from './ContentWithKey';
import {
    ContentWithKeyFromJSON,
    ContentWithKeyFromJSONTyped,
    ContentWithKeyToJSON,
} from './ContentWithKey';
import type { Reference } from './Reference';
import {
    ReferenceFromJSON,
    ReferenceFromJSONTyped,
    ReferenceToJSON,
} from './Reference';

/**
 * 
 * @export
 * @interface GetMultipleContentsResponse
 */
export interface GetMultipleContentsResponse {
    /**
     * 
     * @type {Array<ContentWithKey>}
     * @memberof GetMultipleContentsResponse
     */
    contents: Array<ContentWithKey>;
    /**
     * 
     * @type {Reference}
     * @memberof GetMultipleContentsResponse
     */
    effectiveReference?: Reference;
}

/**
 * Check if a given object implements the GetMultipleContentsResponse interface.
 */
export function instanceOfGetMultipleContentsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contents" in value;

    return isInstance;
}

export function GetMultipleContentsResponseFromJSON(json: any): GetMultipleContentsResponse {
    return GetMultipleContentsResponseFromJSONTyped(json, false);
}

export function GetMultipleContentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMultipleContentsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contents': ((json['contents'] as Array<any>).map(ContentWithKeyFromJSON)),
        'effectiveReference': !exists(json, 'effectiveReference') ? undefined : ReferenceFromJSON(json['effectiveReference']),
    };
}

export function GetMultipleContentsResponseToJSON(value?: GetMultipleContentsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contents': ((value.contents as Array<any>).map(ContentWithKeyToJSON)),
        'effectiveReference': ReferenceToJSON(value.effectiveReference),
    };
}

