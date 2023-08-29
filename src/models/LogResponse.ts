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
import type { LogEntry } from './LogEntry';
import {
    LogEntryFromJSON,
    LogEntryFromJSONTyped,
    LogEntryToJSON,
} from './LogEntry';

/**
 * 
 * @export
 * @interface LogResponse
 */
export interface LogResponse {
    /**
     * 
     * @type {boolean}
     * @memberof LogResponse
     */
    hasMore?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    token?: string;
    /**
     * 
     * @type {Array<LogEntry>}
     * @memberof LogResponse
     */
    logEntries: Array<LogEntry>;
}

/**
 * Check if a given object implements the LogResponse interface.
 */
export function instanceOfLogResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "logEntries" in value;

    return isInstance;
}

export function LogResponseFromJSON(json: any): LogResponse {
    return LogResponseFromJSONTyped(json, false);
}

export function LogResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'logEntries': ((json['logEntries'] as Array<any>).map(LogEntryFromJSON)),
    };
}

export function LogResponseToJSON(value?: LogResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasMore': value.hasMore,
        'token': value.token,
        'logEntries': ((value.logEntries as Array<any>).map(LogEntryToJSON)),
    };
}

