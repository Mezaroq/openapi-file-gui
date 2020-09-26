import {ReferenceObject} from "./reference-object";
import {SchemaObject} from "./schema-object";
import {ParameterObject} from "./parameter-object";
import {ResponseObject} from "./response-object";
import {HeaderObject} from "./header-object";
import {RequestBodyObject} from "./request-body-object";
import {ExampleObject} from "./example-object";
import {SecuritySchemeObject} from "./security/security-scheme-object";
import {LinkObject} from "./link-object";
import {CallbackObject} from "./callback-object";

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
