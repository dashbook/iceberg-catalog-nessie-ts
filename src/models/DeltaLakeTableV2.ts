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
 * @interface DeltaLakeTableV2
 */
export interface DeltaLakeTableV2 {
    /**
     * 
     * @type {string}
     * @memberof DeltaLakeTableV2
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DeltaLakeTableV2
     */
    metadataLocationHistory: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DeltaLakeTableV2
     */
    checkpointLocationHistory: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DeltaLakeTableV2
     */
    lastCheckpoint?: string;
}

/**
 * Check if a given object implements the DeltaLakeTableV2 interface.
 */
export function instanceOfDeltaLakeTableV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "metadataLocationHistory" in value;
    isInstance = isInstance && "checkpointLocationHistory" in value;

    return isInstance;
}

export function DeltaLakeTableV2FromJSON(json: any): DeltaLakeTableV2 {
    return DeltaLakeTableV2FromJSONTyped(json, false);
}

export function DeltaLakeTableV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeltaLakeTableV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'metadataLocationHistory': json['metadataLocationHistory'],
        'checkpointLocationHistory': json['checkpointLocationHistory'],
        'lastCheckpoint': !exists(json, 'lastCheckpoint') ? undefined : json['lastCheckpoint'],
    };
}

export function DeltaLakeTableV2ToJSON(value?: DeltaLakeTableV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'metadataLocationHistory': value.metadataLocationHistory,
        'checkpointLocationHistory': value.checkpointLocationHistory,
        'lastCheckpoint': value.lastCheckpoint,
    };
}

