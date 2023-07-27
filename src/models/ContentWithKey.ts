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
import type { Content } from './Content';
import {
    ContentFromJSON,
    ContentFromJSONTyped,
    ContentToJSON,
} from './Content';
import type { ContentKey } from './ContentKey';
import {
    ContentKeyFromJSON,
    ContentKeyFromJSONTyped,
    ContentKeyToJSON,
} from './ContentKey';
import type { Documentation } from './Documentation';
import {
    DocumentationFromJSON,
    DocumentationFromJSONTyped,
    DocumentationToJSON,
} from './Documentation';

/**
 * 
 * @export
 * @interface ContentWithKey
 */
export interface ContentWithKey {
    /**
     * 
     * @type {ContentKey}
     * @memberof ContentWithKey
     */
    key: ContentKey;
    /**
     * 
     * @type {Content}
     * @memberof ContentWithKey
     */
    content: Content;
    /**
     * 
     * @type {Documentation}
     * @memberof ContentWithKey
     */
    documentation?: Documentation;
}

/**
 * Check if a given object implements the ContentWithKey interface.
 */
export function instanceOfContentWithKey(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function ContentWithKeyFromJSON(json: any): ContentWithKey {
    return ContentWithKeyFromJSONTyped(json, false);
}

export function ContentWithKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentWithKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': ContentKeyFromJSON(json['key']),
        'content': ContentFromJSON(json['content']),
        'documentation': !exists(json, 'documentation') ? undefined : DocumentationFromJSON(json['documentation']),
    };
}

export function ContentWithKeyToJSON(value?: ContentWithKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': ContentKeyToJSON(value.key),
        'content': ContentToJSON(value.content),
        'documentation': DocumentationToJSON(value.documentation),
    };
}
