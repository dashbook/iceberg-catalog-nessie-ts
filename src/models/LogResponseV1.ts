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
import type { LogEntryV1 } from './LogEntryV1';
import {
    LogEntryV1FromJSON,
    LogEntryV1FromJSONTyped,
    LogEntryV1ToJSON,
} from './LogEntryV1';

/**
 * 
 * @export
 * @interface LogResponseV1
 */
export interface LogResponseV1 {
    /**
     * 
     * @type {boolean}
     * @memberof LogResponseV1
     */
    hasMore?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LogResponseV1
     */
    token?: string;
    /**
     * 
     * @type {Array<LogEntryV1>}
     * @memberof LogResponseV1
     */
    logEntries: Array<LogEntryV1>;
}

/**
 * Check if a given object implements the LogResponseV1 interface.
 */
export function instanceOfLogResponseV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "logEntries" in value;

    return isInstance;
}

export function LogResponseV1FromJSON(json: any): LogResponseV1 {
    return LogResponseV1FromJSONTyped(json, false);
}

export function LogResponseV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): LogResponseV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'logEntries': ((json['logEntries'] as Array<any>).map(LogEntryV1FromJSON)),
    };
}

export function LogResponseV1ToJSON(value?: LogResponseV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasMore': value.hasMore,
        'token': value.token,
        'logEntries': ((value.logEntries as Array<any>).map(LogEntryV1ToJSON)),
    };
}

