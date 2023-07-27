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
import type { DeltaLakeTableV2 } from './DeltaLakeTableV2';
import {
    DeltaLakeTableV2FromJSON,
    DeltaLakeTableV2FromJSONTyped,
    DeltaLakeTableV2ToJSON,
} from './DeltaLakeTableV2';
import type { IcebergTableV2 } from './IcebergTableV2';
import {
    IcebergTableV2FromJSON,
    IcebergTableV2FromJSONTyped,
    IcebergTableV2ToJSON,
} from './IcebergTableV2';
import type { IcebergViewV2 } from './IcebergViewV2';
import {
    IcebergViewV2FromJSON,
    IcebergViewV2FromJSONTyped,
    IcebergViewV2ToJSON,
} from './IcebergViewV2';
import type { NamespaceV2 } from './NamespaceV2';
import {
    NamespaceV2FromJSON,
    NamespaceV2FromJSONTyped,
    NamespaceV2ToJSON,
} from './NamespaceV2';
import type { UDFV2 } from './UDFV2';
import {
    UDFV2FromJSON,
    UDFV2FromJSONTyped,
    UDFV2ToJSON,
} from './UDFV2';

// import {
//      DeltaLakeTableV2FromJSONTyped,
//      IcebergTableV2FromJSONTyped,
//      IcebergViewV2FromJSONTyped,
//      NamespaceV2FromJSONTyped,
//      UDFV2FromJSONTyped
// } from './';

/**
 * 
 * @export
 * @interface ContentV2
 */
export interface ContentV2 {
    /**
     * 
     * @type {string}
     * @memberof ContentV2
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentV2
     */
    metadataLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof ContentV2
     */
    snapshotId?: number;
    /**
     * 
     * @type {number}
     * @memberof ContentV2
     */
    schemaId?: number;
    /**
     * 
     * @type {number}
     * @memberof ContentV2
     */
    specId?: number;
    /**
     * 
     * @type {number}
     * @memberof ContentV2
     */
    sortOrderId?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ContentV2
     */
    metadataLocationHistory?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ContentV2
     */
    checkpointLocationHistory?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ContentV2
     */
    lastCheckpoint?: string;
    /**
     * 
     * @type {number}
     * @memberof ContentV2
     */
    versionId?: number;
    /**
     * 
     * @type {string}
     * @memberof ContentV2
     */
    sqlText?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentV2
     */
    dialect?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ContentV2
     */
    elements?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ContentV2
     */
    properties?: { [key: string]: string; };
}

/**
 * Check if a given object implements the ContentV2 interface.
 */
export function instanceOfContentV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "metadataLocation" in value;
    isInstance = isInstance && "metadataLocationHistory" in value;
    isInstance = isInstance && "checkpointLocationHistory" in value;
    isInstance = isInstance && "sqlText" in value;
    isInstance = isInstance && "elements" in value;
    isInstance = isInstance && "properties" in value;

    return isInstance;
}

export function ContentV2FromJSON(json: any): ContentV2 {
    return ContentV2FromJSONTyped(json, false);
}

export function ContentV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['type'] === 'DELTA_LAKE_TABLE') {
            return DeltaLakeTableV2FromJSONTyped(json, true);
        }
        if (json['type'] === 'ICEBERG_TABLE') {
            return IcebergTableV2FromJSONTyped(json, true);
        }
        if (json['type'] === 'ICEBERG_VIEW') {
            return IcebergViewV2FromJSONTyped(json, true);
        }
        if (json['type'] === 'NAMESPACE') {
            return NamespaceV2FromJSONTyped(json, true);
        }
        if (json['type'] === 'UDF') {
            return UDFV2FromJSONTyped(json, true);
        }
    }
    return {

        'id': !exists(json, 'id') ? undefined : json['id'],
        'metadataLocation': json['metadataLocation'],
        'snapshotId': !exists(json, 'snapshotId') ? undefined : json['snapshotId'],
        'schemaId': !exists(json, 'schemaId') ? undefined : json['schemaId'],
        'specId': !exists(json, 'specId') ? undefined : json['specId'],
        'sortOrderId': !exists(json, 'sortOrderId') ? undefined : json['sortOrderId'],
        'metadataLocationHistory': json['metadataLocationHistory'],
        'checkpointLocationHistory': json['checkpointLocationHistory'],
        'lastCheckpoint': !exists(json, 'lastCheckpoint') ? undefined : json['lastCheckpoint'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'sqlText': json['sqlText'],
        'dialect': !exists(json, 'dialect') ? undefined : json['dialect'],
        'elements': json['elements'],
        'properties': json['properties'],
    };
}

export function ContentV2ToJSON(value?: ContentV2 | null): any {
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
        'metadataLocationHistory': value.metadataLocationHistory,
        'checkpointLocationHistory': value.checkpointLocationHistory,
        'lastCheckpoint': value.lastCheckpoint,
        'versionId': value.versionId,
        'sqlText': value.sqlText,
        'dialect': value.dialect,
        'elements': value.elements,
        'properties': value.properties,
    };
}

