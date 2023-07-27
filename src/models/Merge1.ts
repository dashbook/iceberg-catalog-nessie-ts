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
 * @interface Merge1
 */
export interface Merge1 {
    /**
     * 
     * @type {string}
     * @memberof Merge1
     */
    fromRefName: string;
    /**
     * 
     * @type {string}
     * @memberof Merge1
     */
    fromHash: string;
    /**
     * 
     * @type {Array<MergeKeyBehavior>}
     * @memberof Merge1
     */
    keyMergeModes?: Array<MergeKeyBehavior>;
    /**
     * 
     * @type {MergeBehavior}
     * @memberof Merge1
     */
    defaultKeyMergeMode?: MergeBehavior;
    /**
     * 
     * @type {boolean}
     * @memberof Merge1
     */
    dryRun?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Merge1
     */
    fetchAdditionalInfo?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Merge1
     */
    returnConflictAsResult?: boolean;
}

/**
 * Check if a given object implements the Merge1 interface.
 */
export function instanceOfMerge1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fromRefName" in value;
    isInstance = isInstance && "fromHash" in value;

    return isInstance;
}

export function Merge1FromJSON(json: any): Merge1 {
    return Merge1FromJSONTyped(json, false);
}

export function Merge1FromJSONTyped(json: any, ignoreDiscriminator: boolean): Merge1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromRefName': json['fromRefName'],
        'fromHash': json['fromHash'],
        'keyMergeModes': !exists(json, 'keyMergeModes') ? undefined : ((json['keyMergeModes'] as Array<any>).map(MergeKeyBehaviorFromJSON)),
        'defaultKeyMergeMode': !exists(json, 'defaultKeyMergeMode') ? undefined : MergeBehaviorFromJSON(json['defaultKeyMergeMode']),
        'dryRun': !exists(json, 'dryRun') ? undefined : json['dryRun'],
        'fetchAdditionalInfo': !exists(json, 'fetchAdditionalInfo') ? undefined : json['fetchAdditionalInfo'],
        'returnConflictAsResult': !exists(json, 'returnConflictAsResult') ? undefined : json['returnConflictAsResult'],
    };
}

export function Merge1ToJSON(value?: Merge1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fromRefName': value.fromRefName,
        'fromHash': value.fromHash,
        'keyMergeModes': value.keyMergeModes === undefined ? undefined : ((value.keyMergeModes as Array<any>).map(MergeKeyBehaviorToJSON)),
        'defaultKeyMergeMode': MergeBehaviorToJSON(value.defaultKeyMergeMode),
        'dryRun': value.dryRun,
        'fetchAdditionalInfo': value.fetchAdditionalInfo,
        'returnConflictAsResult': value.returnConflictAsResult,
    };
}

