import {ReferenceObject} from "./reference-object";

export interface ResponsesObject {
  default?: ResponsesObject | ReferenceObject,
  [httpStatusCode: number]: ResponsesObject | ReferenceObject
}
