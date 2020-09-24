import {ReferenceObject} from "../../api-reference/interface/reference-object";

export interface ResponsesObject {
  default?: ResponsesObject | ReferenceObject,
  [httpStatusCode: number]: ResponsesObject | ReferenceObject
}
