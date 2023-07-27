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
 * @interface UDFV2
 */
export interface UDFV2 {
    /**
     * 
     * @type {string}
     * @memberof UDFV2
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UDFV2
     */
    sqlText: string;
    /**
     * 
     * @type {string}
     * @memberof UDFV2
     */
    dialect?: string;
}

/**
 * Check if a given object implements the UDFV2 interface.
 */
export function instanceOfUDFV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sqlText" in value;

    return isInstance;
}

export function UDFV2FromJSON(json: any): UDFV2 {
    return UDFV2FromJSONTyped(json, false);
}

export function UDFV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): UDFV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'sqlText': json['sqlText'],
        'dialect': !exists(json, 'dialect') ? undefined : json['dialect'],
    };
}

export function UDFV2ToJSON(value?: UDFV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'sqlText': value.sqlText,
        'dialect': value.dialect,
    };
}

