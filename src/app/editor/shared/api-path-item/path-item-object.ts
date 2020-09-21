import {OperationObject} from "../api-operation/operation-object";
import {ParameterObject} from "../api-parameter/parameter-object";
import {ReferenceObject} from "../api-reference/reference-object";
import {ServerObject} from "../api-server/server-object";

export interface PathItemObject {
  $ref?: string,
  summary: string,
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
