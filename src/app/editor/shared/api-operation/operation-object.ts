import {ExternalDocsObject} from "../api-external-documentation/interface/external-docs-object";
import {ParameterObject} from "../api-parameter/interface/parameter-object";
import {ReferenceObject} from "../api-reference/interface/reference-object";
import {RequestBodyObject} from "../api-request-body/interface/request-body-object";
import {CallbackObject} from "../api-callback/interface/callback-object";
import {SecurityRequirementObject} from "../api-security-requirements/security-requirement-object";
import {ServerObject} from "../api-server/interface/server-object";
import {ResponsesObject} from "../api-response/interface/responses-object";

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
