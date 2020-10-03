import {ExternalDocsObject} from "./external-docs-object";
import {ParameterObject} from "./parameter-object";
import {ReferenceObject} from "./reference-object";
import {RequestBodyObject} from "./request-body-object";
import {CallbackObject} from "./callback-object";
import {SecurityRequirementObject} from "./security-requirement-object";
import {ServerObject} from "./server-object";
import {ResponsesObject} from "./responses-object";
import {ApiMap} from "../api-map";

export interface OperationObject {
  summary: string,
  responses: ResponsesObject, // add response on editing operation like map
  tags?: string[], // dedicated tab
  description?: string,
  operationId?: string,
  parameters?: ParameterObject[] | ReferenceObject, // service
  requestBody?: RequestBodyObject | ReferenceObject, // service
  callbacks?: ApiMap<CallbackObject | ReferenceObject>,
  deprecated?: boolean, //
  security?: SecurityRequirementObject[],
  servers?: ServerObject[]
  externalDocs?: ExternalDocsObject,
}
