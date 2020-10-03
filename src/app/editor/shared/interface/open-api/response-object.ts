import {ReferenceObject} from "./reference-object";
import {HeaderObject} from "./header-object";
import {MediaTypeObject} from "./media-type-object";
import {LinkObject} from "./link-object";
import {ApiMap} from "../api-map";

export interface ResponseObject {
  description: string,
  headers?: ApiMap<HeaderObject | ReferenceObject>,
  content?: ApiMap<MediaTypeObject>,
  links?: ApiMap<LinkObject | ReferenceObject>
}
