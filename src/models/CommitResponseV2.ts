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
import type { AddedContentV2 } from './AddedContentV2';
import {
    AddedContentV2FromJSON,
    AddedContentV2FromJSONTyped,
    AddedContentV2ToJSON,
} from './AddedContentV2';
import type { BranchV2 } from './BranchV2';
import {
    BranchV2FromJSON,
    BranchV2FromJSONTyped,
    BranchV2ToJSON,
} from './BranchV2';

/**
 * 
 * @export
 * @interface CommitResponseV2
 */
export interface CommitResponseV2 {
    /**
     * 
     * @type {BranchV2}
     * @memberof CommitResponseV2
     */
    targetBranch: BranchV2;
    /**
     * 
     * @type {Array<AddedContentV2>}
     * @memberof CommitResponseV2
     */
    addedContents?: Array<AddedContentV2>;
}

/**
 * Check if a given object implements the CommitResponseV2 interface.
 */
export function instanceOfCommitResponseV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "targetBranch" in value;

    return isInstance;
}

export function CommitResponseV2FromJSON(json: any): CommitResponseV2 {
    return CommitResponseV2FromJSONTyped(json, false);
}

export function CommitResponseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): CommitResponseV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'targetBranch': BranchV2FromJSON(json['targetBranch']),
        'addedContents': !exists(json, 'addedContents') ? undefined : ((json['addedContents'] as Array<any>).map(AddedContentV2FromJSON)),
    };
}

export function CommitResponseV2ToJSON(value?: CommitResponseV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'targetBranch': BranchV2ToJSON(value.targetBranch),
        'addedContents': value.addedContents === undefined ? undefined : ((value.addedContents as Array<any>).map(AddedContentV2ToJSON)),
    };
}

