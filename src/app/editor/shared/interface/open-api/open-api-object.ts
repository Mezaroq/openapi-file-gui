import {OpenApiVersion} from "../../enum/open-api-version.enum";
import {InfoObject} from "./info-object";
import {PathsObject} from "./paths-object";
import {ServerObject} from "./server-object";
import {ComponentsObject} from "./components-object";
import {SecurityRequirementObject} from "./security-requirement-object";
import {TagObject} from "./tag-object";
import {ExternalDocsObject} from "./external-docs-object";

export interface OpenApiObject {
  openapi: OpenApiVersion,
  info: InfoObject,
  paths: PathsObject,
  servers?: ServerObject[],
  components?: ComponentsObject,
  security?: SecurityRequirementObject[],
  tags?: TagObject[],
  externalDocs?: ExternalDocsObject
}
