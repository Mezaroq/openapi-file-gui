import {ReferenceObject} from "./reference-object";

export interface SchemaObject {
  type: string, //enum
  allOf?: SchemaObject | ReferenceObject,
  oneOf?: SchemaObject | ReferenceObject,
  anyOf?: SchemaObject | ReferenceObject,
  not?: SchemaObject | ReferenceObject,
  items?: SchemaObject | ReferenceObject,
  properties?: SchemaObject,
  additionalProperties?: boolean | object | ReferenceObject,
  description?: string,
  format, //enum
  default: boolean | string | object,
  example?: any,
  deprecated?: boolean,
  title?: string,
  multipleOf?: string,
  maximum?: number
  exclusiveMaximum?: number,
  minimum?: number,
  exclusiveMinimum?: number,
  maxLength?: number,
  minLength?: number,
  pattern?: string,
  maxItems?: number,
  minItems?: number,
  uniqueItems?: number,
  maxProperties?: number,
  minProperties?: number,
  required?: boolean,
  enum?: Array<any>
}
