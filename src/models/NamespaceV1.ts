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
/**
 * 
 * @export
 * @interface NamespaceV1
 */
export interface NamespaceV1 {
    /**
     * 
     * @type {string}
     * @memberof NamespaceV1
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NamespaceV1
     */
    elements: Array<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof NamespaceV1
     */
    properties: { [key: string]: string; };
}

/**
 * Check if a given object implements the NamespaceV1 interface.
 */
export function instanceOfNamespaceV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "elements" in value;
    isInstance = isInstance && "properties" in value;

    return isInstance;
}

export function NamespaceV1FromJSON(json: any): NamespaceV1 {
    return NamespaceV1FromJSONTyped(json, false);
}

export function NamespaceV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'elements': json['elements'],
        'properties': json['properties'],
    };
}

export function NamespaceV1ToJSON(value?: NamespaceV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'elements': value.elements,
        'properties': value.properties,
    };
}
