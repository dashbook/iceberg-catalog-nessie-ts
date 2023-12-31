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
import type { LogEntryV2 } from './LogEntryV2';
import {
    LogEntryV2FromJSON,
    LogEntryV2FromJSONTyped,
    LogEntryV2ToJSON,
} from './LogEntryV2';

/**
 * 
 * @export
 * @interface LogResponseV2
 */
export interface LogResponseV2 {
    /**
     * 
     * @type {boolean}
     * @memberof LogResponseV2
     */
    hasMore?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LogResponseV2
     */
    token?: string;
    /**
     * 
     * @type {Array<LogEntryV2>}
     * @memberof LogResponseV2
     */
    logEntries: Array<LogEntryV2>;
}

/**
 * Check if a given object implements the LogResponseV2 interface.
 */
export function instanceOfLogResponseV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "logEntries" in value;

    return isInstance;
}

export function LogResponseV2FromJSON(json: any): LogResponseV2 {
    return LogResponseV2FromJSONTyped(json, false);
}

export function LogResponseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): LogResponseV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'logEntries': ((json['logEntries'] as Array<any>).map(LogEntryV2FromJSON)),
    };
}

export function LogResponseV2ToJSON(value?: LogResponseV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasMore': value.hasMore,
        'token': value.token,
        'logEntries': ((value.logEntries as Array<any>).map(LogEntryV2ToJSON)),
    };
}

