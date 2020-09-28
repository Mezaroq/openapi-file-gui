import {MediaTypeObject} from "./media-type-object";

export interface RequestBodyObject {
  content: Map<string, MediaTypeObject>
  description?: string,
  required?: boolean
}
