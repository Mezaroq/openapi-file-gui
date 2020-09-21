import {OpenApiVersion} from "./open-api-version.enum";
import {InfoObject} from "../../api-info/interface/info-object";
import {PathsObject} from "../../api-paths/paths-object";
import {ServerObject} from "../../api-server/server-object";
import {ComponentsObject} from "../../api-components/components-object";
import {SecurityRequirementObject} from "../../api-security-requirements/security-requirement-object";
import {TagObject} from "../../api-tag/tag-object";
import {ExternalDocumentationObject} from "../../api-external-documentation/external-documentation-object";

export interface OpenApiObject {
  openapi: OpenApiVersion,
  info: InfoObject,
  paths: PathsObject,
  servers?: ServerObject[],
  components?: ComponentsObject,
  security?: SecurityRequirementObject[],
  tags?: TagObject[],
  externalDocs?: ExternalDocumentationObject
}
