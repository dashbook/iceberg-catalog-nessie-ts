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

import {
    Branch,
    instanceOfBranch,
    BranchFromJSON,
    BranchFromJSONTyped,
    BranchToJSON,
} from './Branch';
import {
    Detached,
    instanceOfDetached,
    DetachedFromJSON,
    DetachedFromJSONTyped,
    DetachedToJSON,
} from './Detached';
import {
    Tag,
    instanceOfTag,
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './Tag';

/**
 * @type Reference
 * 
 * @export
 */
export type Reference = { type: 'BRANCH' } & Branch | { type: 'DETACHED' } & Detached | { type: 'TAG' } & Tag;

export function ReferenceFromJSON(json: any): Reference {
    return ReferenceFromJSONTyped(json, false);
}

export function ReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'BRANCH':
            return {...BranchFromJSONTyped(json, true), type: 'BRANCH'};
        case 'DETACHED':
            return {...DetachedFromJSONTyped(json, true), type: 'DETACHED'};
        case 'TAG':
            return {...TagFromJSONTyped(json, true), type: 'TAG'};
        default:
            throw new Error(`No variant of Reference exists with 'type=${json['type']}'`);
    }
}

export function ReferenceToJSON(value?: Reference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'BRANCH':
            return BranchToJSON(value);
        case 'DETACHED':
            return DetachedToJSON(value);
        case 'TAG':
            return TagToJSON(value);
        default:
            throw new Error(`No variant of Reference exists with 'type=${value['type']}'`);
    }

}

