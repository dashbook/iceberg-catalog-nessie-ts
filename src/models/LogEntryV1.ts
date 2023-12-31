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
import type { CommitMetaV1 } from './CommitMetaV1';
import {
    CommitMetaV1FromJSON,
    CommitMetaV1FromJSONTyped,
    CommitMetaV1ToJSON,
} from './CommitMetaV1';
import type { OperationV1 } from './OperationV1';
import {
    OperationV1FromJSON,
    OperationV1FromJSONTyped,
    OperationV1ToJSON,
} from './OperationV1';

/**
 * 
 * @export
 * @interface LogEntryV1
 */
export interface LogEntryV1 {
    /**
     * 
     * @type {CommitMetaV1}
     * @memberof LogEntryV1
     */
    commitMeta: CommitMetaV1;
    /**
     * 
     * @type {Array<string>}
     * @memberof LogEntryV1
     * @deprecated
     */
    additionalParents?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof LogEntryV1
     */
    parentCommitHash?: string;
    /**
     * 
     * @type {Array<OperationV1>}
     * @memberof LogEntryV1
     */
    operations?: Array<OperationV1>;
}

/**
 * Check if a given object implements the LogEntryV1 interface.
 */
export function instanceOfLogEntryV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "commitMeta" in value;

    return isInstance;
}

export function LogEntryV1FromJSON(json: any): LogEntryV1 {
    return LogEntryV1FromJSONTyped(json, false);
}

export function LogEntryV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): LogEntryV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commitMeta': CommitMetaV1FromJSON(json['commitMeta']),
        'additionalParents': !exists(json, 'additionalParents') ? undefined : json['additionalParents'],
        'parentCommitHash': !exists(json, 'parentCommitHash') ? undefined : json['parentCommitHash'],
        'operations': !exists(json, 'operations') ? undefined : ((json['operations'] as Array<any>).map(OperationV1FromJSON)),
    };
}

export function LogEntryV1ToJSON(value?: LogEntryV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commitMeta': CommitMetaV1ToJSON(value.commitMeta),
        'additionalParents': value.additionalParents,
        'parentCommitHash': value.parentCommitHash,
        'operations': value.operations === undefined ? undefined : ((value.operations as Array<any>).map(OperationV1ToJSON)),
    };
}

