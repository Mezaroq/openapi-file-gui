import {MediaTypeObject} from "./media-type-object";
import {ApiMap} from "../api-map";

export interface RequestBodyObject {
  content: ApiMap<MediaTypeObject>
  description?: string,
  required?: boolean
}
