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
 * @interface ContentKeyV2
 */
export interface ContentKeyV2 {
    /**
     * 
     * @type {Array<string>}
     * @memberof ContentKeyV2
     */
    elements: Array<string>;
}

/**
 * Check if a given object implements the ContentKeyV2 interface.
 */
export function instanceOfContentKeyV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "elements" in value;

    return isInstance;
}

export function ContentKeyV2FromJSON(json: any): ContentKeyV2 {
    return ContentKeyV2FromJSONTyped(json, false);
}

export function ContentKeyV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentKeyV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'elements': json['elements'],
    };
}

export function ContentKeyV2ToJSON(value?: ContentKeyV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'elements': value.elements,
    };
}
