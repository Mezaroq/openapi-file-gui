import {ReferenceObject} from "./reference-object";
import {ResponseObject} from "./response-object";

export interface ResponsesObject {
  default?: ResponseObject | ReferenceObject,
  [httpStatusCode: number]: ResponseObject | ReferenceObject
}
