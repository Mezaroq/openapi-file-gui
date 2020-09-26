import {ReferenceObject} from "./reference-object";
import {HeaderObject} from "./header-object";
import {MediaTypeObject} from "./media-type-object";
import {LinkObject} from "./link-object";

export interface ResponseObject {
  description: string,
  headers?: Map<string, HeaderObject | ReferenceObject>,
  content?: Map<string, MediaTypeObject>,
  links?: Map<string, LinkObject | ReferenceObject>
}
