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
/**
 * 
 * @export
 * @interface UDF
 */
export interface UDF {
    /**
     * 
     * @type {string}
     * @memberof UDF
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UDF
     */
    sqlText: string;
    /**
     * 
     * @type {string}
     * @memberof UDF
     */
    dialect?: string;
}

/**
 * Check if a given object implements the UDF interface.
 */
export function instanceOfUDF(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sqlText" in value;

    return isInstance;
}

export function UDFFromJSON(json: any): UDF {
    return UDFFromJSONTyped(json, false);
}

export function UDFFromJSONTyped(json: any, ignoreDiscriminator: boolean): UDF {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'sqlText': json['sqlText'],
        'dialect': !exists(json, 'dialect') ? undefined : json['dialect'],
    };
}

export function UDFToJSON(value?: UDF | null): any {
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

