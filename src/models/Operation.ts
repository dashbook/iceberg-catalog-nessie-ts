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

import {
    Delete,
    instanceOfDelete,
    DeleteFromJSON,
    DeleteFromJSONTyped,
    DeleteToJSON,
} from './Delete';
import {
    Put,
    instanceOfPut,
    PutFromJSON,
    PutFromJSONTyped,
    PutToJSON,
} from './Put';
import {
    Unchanged,
    instanceOfUnchanged,
    UnchangedFromJSON,
    UnchangedFromJSONTyped,
    UnchangedToJSON,
} from './Unchanged';

/**
 * @type Operation
 * Describes an operation to be performed against one content object.
 * 
 * The Nessie backend will validate the correctness of the operations.
 * @export
 */
export type Operation = { type: 'DELETE' } & Delete | { type: 'PUT' } & Put | { type: 'UNCHANGED' } & Unchanged;

export function OperationFromJSON(json: any): Operation {
    return OperationFromJSONTyped(json, false);
}

export function OperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Operation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'DELETE':
            return {...DeleteFromJSONTyped(json, true), type: 'DELETE'};
        case 'PUT':
            return {...PutFromJSONTyped(json, true), type: 'PUT'};
        case 'UNCHANGED':
            return {...UnchangedFromJSONTyped(json, true), type: 'UNCHANGED'};
        default:
            throw new Error(`No variant of Operation exists with 'type=${json['type']}'`);
    }
}

export function OperationToJSON(value?: Operation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'DELETE':
            return DeleteToJSON(value);
        case 'PUT':
            return PutToJSON(value);
        case 'UNCHANGED':
            return UnchangedToJSON(value);
        default:
            throw new Error(`No variant of Operation exists with 'type=${value['type']}'`);
    }

}
