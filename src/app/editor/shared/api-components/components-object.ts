import {ReferenceObject} from "../api-reference/interface/reference-object";
import {SchemaObject} from "../api-schema/interface/schema-object";
import {ParameterObject} from "../api-parameter/interface/parameter-object";
import {ResponseObject} from "../api-response/interface/response-object";
import {HeaderObject} from "../api-header/interface/header-object";
import {RequestBodyObject} from "../api-request-body/interface/request-body-object";
import {ExampleObject} from "../api-example/interface/example-object";
import {SecuritySchemeObject} from "../api-security/interface/security-scheme-object";
import {LinkObject} from "../api-link/interface/link-object";
import {CallbackObject} from "../api-callback/interface/callback-object";

export interface ComponentsObject {
  schemas: Map<string, SchemaObject | ReferenceObject>,
  responses: Map<string, ResponseObject | ReferenceObject>,
  parameters: Map<string, ParameterObject | ReferenceObject>,
  examples: Map<string, ExampleObject | ReferenceObject>,
  requestBodies: Map<string, RequestBodyObject | ReferenceObject>,
  headers: Map<string, HeaderObject | ReferenceObject>,
  securitySchemes: Map<string, SecuritySchemeObject | ReferenceObject>,
  links: Map<string, LinkObject | ReferenceObject>,
  callbacks: Map<string, CallbackObject | ReferenceObject>,
}
