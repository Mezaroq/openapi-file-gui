import {HeaderObject} from "./header-object";
import {ReferenceObject} from "./reference-object";

export interface EncodingObject {
  contentType: string,
  headers?: Map<string, HeaderObject | ReferenceObject>,
  style?: string,
  explode?: boolean,
  allowReserved?: boolean
}
