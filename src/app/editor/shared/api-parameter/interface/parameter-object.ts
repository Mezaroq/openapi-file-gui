import {ParameterIn} from "./parameter-object-in.enum";
import {SchemaObject} from "../../api-schema/interface/schema-object";
import {ReferenceObject} from "../../api-reference/interface/reference-object";
import {ParameterStyle} from "./parameter-style.enum";
import {MediaTypeObject} from "../../api-media-type/interface/media-type-object";

export interface ParameterObject {
  name: string,
  in: ParameterIn,
  description?: string,
  required?: boolean,
  deprecated?: boolean,
  allowEmptyValue: boolean,
  schema?: SchemaObject | ReferenceObject,
  content?: Map<string, MediaTypeObject>,
  style?: ParameterStyle
}
