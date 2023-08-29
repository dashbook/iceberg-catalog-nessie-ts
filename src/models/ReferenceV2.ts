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
    BranchV2,
    instanceOfBranchV2,
    BranchV2FromJSON,
    BranchV2FromJSONTyped,
    BranchV2ToJSON,
} from './BranchV2';
import {
    DetachedV2,
    instanceOfDetachedV2,
    DetachedV2FromJSON,
    DetachedV2FromJSONTyped,
    DetachedV2ToJSON,
} from './DetachedV2';
import {
    TagV2,
    instanceOfTagV2,
    TagV2FromJSON,
    TagV2FromJSONTyped,
    TagV2ToJSON,
} from './TagV2';

/**
 * @type ReferenceV2
 * 
 * @export
 */
export type ReferenceV2 = { type: 'BRANCH' } & BranchV2 | { type: 'DETACHED' } & DetachedV2 | { type: 'TAG' } & TagV2;

export function ReferenceV2FromJSON(json: any): ReferenceV2 {
    return ReferenceV2FromJSONTyped(json, false);
}

export function ReferenceV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'BRANCH':
            return {...BranchV2FromJSONTyped(json, true), type: 'BRANCH'};
        case 'DETACHED':
            return {...DetachedV2FromJSONTyped(json, true), type: 'DETACHED'};
        case 'TAG':
            return {...TagV2FromJSONTyped(json, true), type: 'TAG'};
        default:
            throw new Error(`No variant of ReferenceV2 exists with 'type=${json['type']}'`);
    }
}

export function ReferenceV2ToJSON(value?: ReferenceV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'BRANCH':
            return BranchV2ToJSON(value);
        case 'DETACHED':
            return DetachedV2ToJSON(value);
        case 'TAG':
            return TagV2ToJSON(value);
        default:
            throw new Error(`No variant of ReferenceV2 exists with 'type=${value['type']}'`);
    }

}

