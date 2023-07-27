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
import type { ReferenceCutoffPolicyV2 } from './ReferenceCutoffPolicyV2';
import {
    ReferenceCutoffPolicyV2FromJSON,
    ReferenceCutoffPolicyV2FromJSONTyped,
    ReferenceCutoffPolicyV2ToJSON,
} from './ReferenceCutoffPolicyV2';

/**
 * 
 * @export
 * @interface GarbageCollectorConfigV2
 */
export interface GarbageCollectorConfigV2 {
    /**
     * The default cutoff policy.
     * Policies can be one of: - number of commits as an integer value - a duration (see java.time.Duration) - an ISO instant - 'NONE', means everything's considered as live
     * @type {string}
     * @memberof GarbageCollectorConfigV2
     */
    defaultCutoffPolicy?: string;
    /**
     * 
     * @type {Array<ReferenceCutoffPolicyV2>}
     * @memberof GarbageCollectorConfigV2
     */
    perRefCutoffPolicies?: Array<ReferenceCutoffPolicyV2>;
    /**
     * Files that have been created after 'gc-start-time - new-files-grace-period' are not being deleted.
     * @type {string}
     * @memberof GarbageCollectorConfigV2
     */
    newFilesGracePeriod?: string;
    /**
     * 
     * @type {number}
     * @memberof GarbageCollectorConfigV2
     */
    expectedFileCountPerContent?: number;
}

/**
 * Check if a given object implements the GarbageCollectorConfigV2 interface.
 */
export function instanceOfGarbageCollectorConfigV2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GarbageCollectorConfigV2FromJSON(json: any): GarbageCollectorConfigV2 {
    return GarbageCollectorConfigV2FromJSONTyped(json, false);
}

export function GarbageCollectorConfigV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): GarbageCollectorConfigV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultCutoffPolicy': !exists(json, 'defaultCutoffPolicy') ? undefined : json['defaultCutoffPolicy'],
        'perRefCutoffPolicies': !exists(json, 'perRefCutoffPolicies') ? undefined : ((json['perRefCutoffPolicies'] as Array<any>).map(ReferenceCutoffPolicyV2FromJSON)),
        'newFilesGracePeriod': !exists(json, 'newFilesGracePeriod') ? undefined : json['newFilesGracePeriod'],
        'expectedFileCountPerContent': !exists(json, 'expectedFileCountPerContent') ? undefined : json['expectedFileCountPerContent'],
    };
}

export function GarbageCollectorConfigV2ToJSON(value?: GarbageCollectorConfigV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultCutoffPolicy': value.defaultCutoffPolicy,
        'perRefCutoffPolicies': value.perRefCutoffPolicies === undefined ? undefined : ((value.perRefCutoffPolicies as Array<any>).map(ReferenceCutoffPolicyV2ToJSON)),
        'newFilesGracePeriod': value.newFilesGracePeriod,
        'expectedFileCountPerContent': value.expectedFileCountPerContent,
    };
}
