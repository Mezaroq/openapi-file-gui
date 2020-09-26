import {SchemaObject} from "./schema-object";
import {ReferenceObject} from "./reference-object";
import {MediaTypeObject} from "./media-type-object";
import {HeaderStyle} from "../../enum/header-style.enum";

export interface HeaderObject {
  description: string,
  required?: boolean,
  deprecated?: boolean,
  allowEmptyValue: boolean,
  schema?: SchemaObject | ReferenceObject,
  content?: Map<string, MediaTypeObject>,
  style?: HeaderStyle
}
