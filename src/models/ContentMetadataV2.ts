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
import {
} from './';

/**
 * 
 * @export
 * @interface ContentMetadataV2
 */
export interface ContentMetadataV2 {
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataV2
     */
    variant: string;
}

/**
 * Check if a given object implements the ContentMetadataV2 interface.
 */
export function instanceOfContentMetadataV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "variant" in value;

    return isInstance;
}

export function ContentMetadataV2FromJSON(json: any): ContentMetadataV2 {
    return ContentMetadataV2FromJSONTyped(json, false);
}

export function ContentMetadataV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentMetadataV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
    }
    return {
        
        'variant': json['variant'],
    };
}

export function ContentMetadataV2ToJSON(value?: ContentMetadataV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'variant': value.variant,
    };
}

