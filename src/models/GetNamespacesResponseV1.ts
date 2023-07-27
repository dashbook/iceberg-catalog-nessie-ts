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
import type { NamespaceV1 } from './NamespaceV1';
import {
    NamespaceV1FromJSON,
    NamespaceV1FromJSONTyped,
    NamespaceV1ToJSON,
} from './NamespaceV1';

/**
 * 
 * @export
 * @interface GetNamespacesResponseV1
 */
export interface GetNamespacesResponseV1 {
    /**
     * 
     * @type {Array<NamespaceV1>}
     * @memberof GetNamespacesResponseV1
     */
    namespaces: Array<NamespaceV1>;
}

/**
 * Check if a given object implements the GetNamespacesResponseV1 interface.
 */
export function instanceOfGetNamespacesResponseV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "namespaces" in value;

    return isInstance;
}

export function GetNamespacesResponseV1FromJSON(json: any): GetNamespacesResponseV1 {
    return GetNamespacesResponseV1FromJSONTyped(json, false);
}

export function GetNamespacesResponseV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetNamespacesResponseV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespaces': ((json['namespaces'] as Array<any>).map(NamespaceV1FromJSON)),
    };
}

export function GetNamespacesResponseV1ToJSON(value?: GetNamespacesResponseV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'namespaces': ((value.namespaces as Array<any>).map(NamespaceV1ToJSON)),
    };
}

