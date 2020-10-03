import {ParameterIn} from "../../enum/parameter-object-in.enum";
import {SchemaObject} from "./schema-object";
import {ReferenceObject} from "./reference-object";
import {ParameterStyle} from "../../enum/parameter-style.enum";
import {MediaTypeObject} from "./media-type-object";

export interface ParameterObject {
  name: string,
  in: ParameterIn,
  description?: string,
  required?: boolean,
  deprecated?: boolean,
  allowEmptyValue?: boolean,
  schema?: SchemaObject | ReferenceObject,
  content?: Map<string, MediaTypeObject>,
  style?: ParameterStyle
}
