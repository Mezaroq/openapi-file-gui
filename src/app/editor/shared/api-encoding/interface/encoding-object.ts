import {HeaderObject} from "../../api-header/interface/header-object";
import {ReferenceObject} from "../../api-reference/interface/reference-object";

export interface EncodingObject {
  contentType: string,
  headers?: Map<string, HeaderObject | ReferenceObject>,
  style?: string,
  explode?: boolean,
  allowReserved?: boolean
}
