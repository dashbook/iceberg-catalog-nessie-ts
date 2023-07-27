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
import type { GarbageCollectorConfigV2 } from './GarbageCollectorConfigV2';
import {
    GarbageCollectorConfigV2FromJSON,
    GarbageCollectorConfigV2FromJSONTyped,
    GarbageCollectorConfigV2ToJSON,
} from './GarbageCollectorConfigV2';
import type { ReferenceCutoffPolicyV2 } from './ReferenceCutoffPolicyV2';
import {
    ReferenceCutoffPolicyV2FromJSON,
    ReferenceCutoffPolicyV2FromJSONTyped,
    ReferenceCutoffPolicyV2ToJSON,
} from './ReferenceCutoffPolicyV2';

// import {
//      GarbageCollectorConfigV2FromJSONTyped
// } from './';

/**
 * When a repository configuration for the same type as in the request object did not exist, the response object will be null. Otherwise, if the configuration was updated, the old value will be returned.
 * @export
 * @interface RepositoryConfigV2
 */
export interface RepositoryConfigV2 {
    /**
     * The default cutoff policy.
     * Policies can be one of: - number of commits as an integer value - a duration (see java.time.Duration) - an ISO instant - 'NONE', means everything's considered as live
     * @type {string}
     * @memberof RepositoryConfigV2
     */
    defaultCutoffPolicy?: string;
    /**
     * 
     * @type {Array<ReferenceCutoffPolicyV2>}
     * @memberof RepositoryConfigV2
     */
    perRefCutoffPolicies?: Array<ReferenceCutoffPolicyV2>;
    /**
     * Files that have been created after 'gc-start-time - new-files-grace-period' are not being deleted.
     * @type {string}
     * @memberof RepositoryConfigV2
     */
    newFilesGracePeriod?: string;
    /**
     * 
     * @type {number}
     * @memberof RepositoryConfigV2
     */
    expectedFileCountPerContent?: number;
}

/**
 * Check if a given object implements the RepositoryConfigV2 interface.
 */
export function instanceOfRepositoryConfigV2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RepositoryConfigV2FromJSON(json: any): RepositoryConfigV2 {
    return RepositoryConfigV2FromJSONTyped(json, false);
}

export function RepositoryConfigV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): RepositoryConfigV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['type'] === 'GARBAGE_COLLECTOR') {
            return GarbageCollectorConfigV2FromJSONTyped(json, true);
        }
    }
    return {

        'defaultCutoffPolicy': !exists(json, 'defaultCutoffPolicy') ? undefined : json['defaultCutoffPolicy'],
        'perRefCutoffPolicies': !exists(json, 'perRefCutoffPolicies') ? undefined : ((json['perRefCutoffPolicies'] as Array<any>).map(ReferenceCutoffPolicyV2FromJSON)),
        'newFilesGracePeriod': !exists(json, 'newFilesGracePeriod') ? undefined : json['newFilesGracePeriod'],
        'expectedFileCountPerContent': !exists(json, 'expectedFileCountPerContent') ? undefined : json['expectedFileCountPerContent'],
    };
}

export function RepositoryConfigV2ToJSON(value?: RepositoryConfigV2 | null): any {
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

