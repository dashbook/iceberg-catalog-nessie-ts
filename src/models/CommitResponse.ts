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
import type { AddedContent } from './AddedContent';
import {
    AddedContentFromJSON,
    AddedContentFromJSONTyped,
    AddedContentToJSON,
} from './AddedContent';
import type { Branch } from './Branch';
import {
    BranchFromJSON,
    BranchFromJSONTyped,
    BranchToJSON,
} from './Branch';

/**
 * 
 * @export
 * @interface CommitResponse
 */
export interface CommitResponse {
    /**
     * 
     * @type {Branch}
     * @memberof CommitResponse
     */
    targetBranch: Branch;
    /**
     * 
     * @type {Array<AddedContent>}
     * @memberof CommitResponse
     */
    addedContents?: Array<AddedContent>;
}

/**
 * Check if a given object implements the CommitResponse interface.
 */
export function instanceOfCommitResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "targetBranch" in value;

    return isInstance;
}

export function CommitResponseFromJSON(json: any): CommitResponse {
    return CommitResponseFromJSONTyped(json, false);
}

export function CommitResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommitResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'targetBranch': BranchFromJSON(json['targetBranch']),
        'addedContents': !exists(json, 'addedContents') ? undefined : ((json['addedContents'] as Array<any>).map(AddedContentFromJSON)),
    };
}

export function CommitResponseToJSON(value?: CommitResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'targetBranch': BranchToJSON(value.targetBranch),
        'addedContents': value.addedContents === undefined ? undefined : ((value.addedContents as Array<any>).map(AddedContentToJSON)),
    };
}

