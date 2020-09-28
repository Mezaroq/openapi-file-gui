import {ExternalDocsObject} from "./external-docs-object";
import {ParameterObject} from "./parameter-object";
import {ReferenceObject} from "./reference-object";
import {RequestBodyObject} from "./request-body-object";
import {CallbackObject} from "./callback-object";
import {SecurityRequirementObject} from "./security-requirement-object";
import {ServerObject} from "./server-object";
import {ResponsesObject} from "./responses-object";

export interface OperationObject {
  summary: string,
  responses: ResponsesObject,
  tags?: string[],
  description?: string,
  operationId?: string,
  parameters?: ParameterObject[] | ReferenceObject,
  requestBody?: RequestBodyObject | ReferenceObject,
  callbacks?: Map<string, CallbackObject | ReferenceObject>,
  deprecated?: boolean,
  security?: SecurityRequirementObject[],
  servers?: ServerObject[]
  externalDocs?: ExternalDocsObject,
}
