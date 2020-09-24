import {OpenApiVersion} from "./open-api-version.enum";
import {InfoObject} from "../../api-info/interface/info-object";
import {PathsObject} from "../../api-paths/paths-object";
import {ServerObject} from "../../api-server/interface/server-object";
import {ComponentsObject} from "../../api-components/components-object";
import {SecurityRequirementObject} from "../../api-security-requirements/security-requirement-object";
import {TagObject} from "../../api-tag/tag-object";
import {ExternalDocsObject} from "../../api-external-documentation/interface/external-docs-object";
import {ApiMap} from "../../interface/api-map";

export interface OpenApiObject {
  openapi: OpenApiVersion,
  info: InfoObject,
  paths: PathsObject,
  servers?: ApiMap<ServerObject>,
  components?: ComponentsObject,
  security?: SecurityRequirementObject[],
  tags?: TagObject[],
  externalDocs?: ExternalDocsObject
}
