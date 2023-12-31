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
 * @interface IcebergTableV1
 */
export interface IcebergTableV1 {
    /**
     * 
     * @type {string}
     * @memberof IcebergTableV1
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof IcebergTableV1
     */
    metadataLocation: string;
    /**
     * 
     * @type {number}
     * @memberof IcebergTableV1
     */
    snapshotId?: number;
    /**
     * 
     * @type {number}
     * @memberof IcebergTableV1
     */
    schemaId?: number;
    /**
     * 
     * @type {number}
     * @memberof IcebergTableV1
     */
    specId?: number;
    /**
     * 
     * @type {number}
     * @memberof IcebergTableV1
     */
    sortOrderId?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IcebergTableV1
     * @deprecated
     */
    metadata?: { [key: string]: any; };
}

/**
 * Check if a given object implements the IcebergTableV1 interface.
 */
export function instanceOfIcebergTableV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "metadataLocation" in value;

    return isInstance;
}

export function IcebergTableV1FromJSON(json: any): IcebergTableV1 {
    return IcebergTableV1FromJSONTyped(json, false);
}

export function IcebergTableV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): IcebergTableV1 {
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

export function IcebergTableV1ToJSON(value?: IcebergTableV1 | null): any {
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

