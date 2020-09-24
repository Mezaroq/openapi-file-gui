import {SchemaObject} from "../../api-schema/interface/schema-object";
import {ReferenceObject} from "../../api-reference/interface/reference-object";
import {MediaTypeObject} from "../../api-media-type/interface/media-type-object";
import {HeaderStyle} from "./header-style.enum";

export interface HeaderObject {
  description: string,
  required?: boolean,
  deprecated?: boolean,
  allowEmptyValue: boolean,
  schema?: SchemaObject | ReferenceObject,
  content?: Map<string, MediaTypeObject>,
  style?: HeaderStyle
}
