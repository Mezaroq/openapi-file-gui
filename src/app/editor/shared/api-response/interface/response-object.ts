import {ReferenceObject} from "../../api-reference/interface/reference-object";
import {HeaderObject} from "../../api-header/interface/header-object";
import {MediaTypeObject} from "../../api-media-type/interface/media-type-object";
import {LinkObject} from "../../api-link/interface/link-object";

export interface ResponseObject {
  description: string,
  headers?: Map<string, HeaderObject | ReferenceObject>,
  content?: Map<string, MediaTypeObject>,
  links?: Map<string, LinkObject | ReferenceObject>
}
