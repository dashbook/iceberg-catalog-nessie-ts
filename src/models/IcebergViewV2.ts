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
 * @interface IcebergViewV2
 */
export interface IcebergViewV2 {
    /**
     * 
     * @type {string}
     * @memberof IcebergViewV2
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof IcebergViewV2
     */
    metadataLocation: string;
    /**
     * 
     * @type {number}
     * @memberof IcebergViewV2
     */
    versionId?: number;
    /**
     * 
     * @type {number}
     * @memberof IcebergViewV2
     */
    schemaId?: number;
    /**
     * 
     * @type {string}
     * @memberof IcebergViewV2
     */
    sqlText: string;
    /**
     * 
     * @type {string}
     * @memberof IcebergViewV2
     */
    dialect?: string;
}

/**
 * Check if a given object implements the IcebergViewV2 interface.
 */
export function instanceOfIcebergViewV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "metadataLocation" in value;
    isInstance = isInstance && "sqlText" in value;

    return isInstance;
}

export function IcebergViewV2FromJSON(json: any): IcebergViewV2 {
    return IcebergViewV2FromJSONTyped(json, false);
}

export function IcebergViewV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): IcebergViewV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'metadataLocation': json['metadataLocation'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'schemaId': !exists(json, 'schemaId') ? undefined : json['schemaId'],
        'sqlText': json['sqlText'],
        'dialect': !exists(json, 'dialect') ? undefined : json['dialect'],
    };
}

export function IcebergViewV2ToJSON(value?: IcebergViewV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'metadataLocation': value.metadataLocation,
        'versionId': value.versionId,
        'schemaId': value.schemaId,
        'sqlText': value.sqlText,
        'dialect': value.dialect,
    };
}
