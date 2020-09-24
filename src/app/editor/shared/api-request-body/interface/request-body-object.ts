import {MediaTypeObject} from "../../api-media-type/interface/media-type-object";

export interface RequestBodyObject {
  content: Map<string, MediaTypeObject>
  description?: string,
  required?: boolean
}
