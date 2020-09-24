import {OperationObject} from "../api-operation/operation-object";
import {ParameterObject} from "../api-parameter/interface/parameter-object";
import {ReferenceObject} from "../api-reference/interface/reference-object";
import {ServerObject} from "../api-server/interface/server-object";

export interface PathItemObject {
  summary: string,
  $ref?: string,
  description?: string,
  get?: OperationObject,
  put?: OperationObject,
  post?: OperationObject,
  delete?: OperationObject,
  options?: OperationObject,
  head?: OperationObject,
  patch?: OperationObject,
  trace?: OperationObject,
  servers?: ServerObject[],
  parameters?: ParameterObject[] | ReferenceObject[]
}
