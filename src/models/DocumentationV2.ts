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
 * @interface DocumentationV2
 */
export interface DocumentationV2 {
    /**
     * 
     * @type {string}
     * @memberof DocumentationV2
     */
    mimeType: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentationV2
     */
    text: string;
}

/**
 * Check if a given object implements the DocumentationV2 interface.
 */
export function instanceOfDocumentationV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mimeType" in value;
    isInstance = isInstance && "text" in value;

    return isInstance;
}

export function DocumentationV2FromJSON(json: any): DocumentationV2 {
    return DocumentationV2FromJSONTyped(json, false);
}

export function DocumentationV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentationV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mimeType': json['mimeType'],
        'text': json['text'],
    };
}

export function DocumentationV2ToJSON(value?: DocumentationV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mimeType': value.mimeType,
        'text': value.text,
    };
}

