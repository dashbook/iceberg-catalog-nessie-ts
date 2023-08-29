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
import type { CommitMeta } from './CommitMeta';
import {
    CommitMetaFromJSON,
    CommitMetaFromJSONTyped,
    CommitMetaToJSON,
} from './CommitMeta';
import type { MergeBehavior } from './MergeBehavior';
import {
    MergeBehaviorFromJSON,
    MergeBehaviorFromJSONTyped,
    MergeBehaviorToJSON,
} from './MergeBehavior';
import type { MergeKeyBehavior } from './MergeKeyBehavior';
import {
    MergeKeyBehaviorFromJSON,
    MergeKeyBehaviorFromJSONTyped,
    MergeKeyBehaviorToJSON,
} from './MergeKeyBehavior';

/**
 * 
 * @export
 * @interface Merge
 */
export interface Merge {
    /**
     * Optional commit message for this merge request
     * 
     * If not set, the server will generate a commit message automatically using metadata from the 
     * merged commits.
     * @type {string}
     * @memberof Merge
     * @deprecated
     */
    message?: string;
    /**
     * The hash of the last commit to merge.
     * 
     * This commit must be present in the history on 'fromRefName' before the first common parent with respect to the target branch.
     * @type {string}
     * @memberof Merge
     */
    fromHash?: string;
    /**
     * The name of the reference that contains the 'source' commits for the requested merge or transplant operation.
     * @type {string}
     * @memberof Merge
     */
    fromRefName: string;
    /**
     * Specific merge behaviour requests by content key.
     * 
     * The default is set by the `defaultKeyMergeMode` parameter.
     * @type {Array<MergeKeyBehavior>}
     * @memberof Merge
     */
    keyMergeModes?: Array<MergeKeyBehavior>;
    /**
     * 
     * @type {MergeBehavior}
     * @memberof Merge
     */
    defaultKeyMergeMode?: MergeBehavior;
    /**
     * When set to 'true' instructs the server to validate the request but to avoid committing any changes.
     * @type {boolean}
     * @memberof Merge
     */
    dryRun?: boolean;
    /**
     * Whether to provide optional response data.
     * @type {boolean}
     * @memberof Merge
     */
    fetchAdditionalInfo?: boolean;
    /**
     * When set to 'true' instructs the server to produce normal (non-error) responses in case a conflict is detected and report conflict details in the response payload.
     * @type {boolean}
     * @memberof Merge
     */
    returnConflictAsResult?: boolean;
    /**
     * 
     * @type {CommitMeta}
     * @memberof Merge
     */
    commitMeta?: CommitMeta;
}

/**
 * Check if a given object implements the Merge interface.
 */
export function instanceOfMerge(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fromRefName" in value;

    return isInstance;
}

export function MergeFromJSON(json: any): Merge {
    return MergeFromJSONTyped(json, false);
}

export function MergeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Merge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'fromHash': !exists(json, 'fromHash') ? undefined : json['fromHash'],
        'fromRefName': json['fromRefName'],
        'keyMergeModes': !exists(json, 'keyMergeModes') ? undefined : ((json['keyMergeModes'] as Array<any>).map(MergeKeyBehaviorFromJSON)),
        'defaultKeyMergeMode': !exists(json, 'defaultKeyMergeMode') ? undefined : MergeBehaviorFromJSON(json['defaultKeyMergeMode']),
        'dryRun': !exists(json, 'dryRun') ? undefined : json['dryRun'],
        'fetchAdditionalInfo': !exists(json, 'fetchAdditionalInfo') ? undefined : json['fetchAdditionalInfo'],
        'returnConflictAsResult': !exists(json, 'returnConflictAsResult') ? undefined : json['returnConflictAsResult'],
        'commitMeta': !exists(json, 'commitMeta') ? undefined : CommitMetaFromJSON(json['commitMeta']),
    };
}

export function MergeToJSON(value?: Merge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'fromHash': value.fromHash,
        'fromRefName': value.fromRefName,
        'keyMergeModes': value.keyMergeModes === undefined ? undefined : ((value.keyMergeModes as Array<any>).map(MergeKeyBehaviorToJSON)),
        'defaultKeyMergeMode': MergeBehaviorToJSON(value.defaultKeyMergeMode),
        'dryRun': value.dryRun,
        'fetchAdditionalInfo': value.fetchAdditionalInfo,
        'returnConflictAsResult': value.returnConflictAsResult,
        'commitMeta': CommitMetaToJSON(value.commitMeta),
    };
}

