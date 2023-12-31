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
 * Represents the state of an Iceberg table in Nessie. An Iceberg table is globally identified via its unique 'Content.id'.
 * 
 * A Nessie commit-operation, performed via 'TreeApi.commitMultipleOperations',for Iceberg consists of a 'Operation.Put' with an 'IcebergTable' as in the 'content' field and the previous value of 'IcebergTable' in the 'expectedContent' field.
 * @export
 * @interface IcebergTable
 */
export interface IcebergTable {
    /**
     * 
     * @type {string}
     * @memberof IcebergTable
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof IcebergTable
     */
    metadataLocation: string;
    /**
     * 
     * @type {number}
     * @memberof IcebergTable
     */
    snapshotId?: number;
    /**
     * 
     * @type {number}
     * @memberof IcebergTable
     */
    schemaId?: number;
    /**
     * 
     * @type {number}
     * @memberof IcebergTable
     */
    specId?: number;
    /**
     * 
     * @type {number}
     * @memberof IcebergTable
     */
    sortOrderId?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IcebergTable
     * @deprecated
     */
    metadata?: { [key: string]: any; };
}

/**
 * Check if a given object implements the IcebergTable interface.
 */
export function instanceOfIcebergTable(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "metadataLocation" in value;

    return isInstance;
}

export function IcebergTableFromJSON(json: any): IcebergTable {
    return IcebergTableFromJSONTyped(json, false);
}

export function IcebergTableFromJSONTyped(json: any, ignoreDiscriminator: boolean): IcebergTable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'metadataLocation': json['metadataLocation'],
        'snapshotId': !exists(json, 'snapshotId') ? undefined : json['snapshotId'],
        'schemaId': !exists(json, 'schemaId') ? undefined : json['schemaId'],
        'specId': !exists(json, 'specId') ? undefined : json['specId'],
        'sortOrderId': !exists(json, 'sortOrderId') ? undefined : json['sortOrderId'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function IcebergTableToJSON(value?: IcebergTable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'metadataLocation': value.metadataLocation,
        'snapshotId': value.snapshotId,
        'schemaId': value.schemaId,
        'specId': value.specId,
        'sortOrderId': value.sortOrderId,
        'metadata': value.metadata,
    };
}

