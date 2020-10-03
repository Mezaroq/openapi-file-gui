import {OperationObject} from "./operation-object";
import {ParameterObject} from "./parameter-object";
import {ReferenceObject} from "./reference-object";
import {ServerObject} from "./server-object";

export interface PathItemObject {
  summary?: string,
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
