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


/**
 * 
 * @export
 */
export const ReferenceType = {
    Branch: 'branch',
    Tag: 'tag'
} as const;
export type ReferenceType = typeof ReferenceType[keyof typeof ReferenceType];


export function ReferenceTypeFromJSON(json: any): ReferenceType {
    return ReferenceTypeFromJSONTyped(json, false);
}

export function ReferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceType {
    return json as ReferenceType;
}

export function ReferenceTypeToJSON(value?: ReferenceType | null): any {
    return value as any;
}

