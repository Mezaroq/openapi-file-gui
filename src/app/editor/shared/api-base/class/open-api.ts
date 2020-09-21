import {OpenApiObject} from "../interface/open-api-object";
import {ComponentsObject} from "../../api-components/components-object";
import {ExternalDocumentationObject} from "../../api-external-documentation/external-documentation-object";
import {InfoObject} from "../../api-info/interface/info-object";
import {OpenApiVersion} from "../interface/open-api-version.enum";
import {PathsObject} from "../../api-paths/paths-object";
import {SecurityRequirementObject} from "../../api-security-requirements/security-requirement-object";
import {ServerObject} from "../../api-server/server-object";
import {TagObject} from "../../api-tag/tag-object";
import {Builder} from "../../interface/builder";
import {InfoBuilder} from "../../api-info/class/info";

export class OpenApi implements OpenApiObject {
  components: ComponentsObject;
  externalDocs: ExternalDocumentationObject;
  info: InfoObject;
  openapi: OpenApiVersion;
  paths: PathsObject;
  security: SecurityRequirementObject[];
  servers: ServerObject[];
  tags: TagObject[];
}

export class OpenApiBuilder implements Builder<OpenApiObject> {
  private readonly openApi: OpenApiObject;

  // openapi: OpenApiVersion,
  // info: new InfoBuilder().build(),
  // paths: new PathsBuilder().build(),
  // servers?: ServerObject[],
  // components?: ComponentsObject,
  // security?: SecurityRequirementObject[],
  // tags?: TagObject[],
  // externalDocs?: ExternalDocumentationObject

  constructor() {
    this.openApi = {
      openapi: null,
      info: new InfoBuilder().build(),
      paths: null,
      servers: null,
      components: null,
      security: null,
      tags: null,
      externalDocs: null
    }
  }

  openapi(openapi: OpenApiVersion): OpenApiBuilder {
    if (openapi) this.openApi.openapi = openapi;
    return this;
  }

  info(info: InfoObject): OpenApiBuilder {
    if (info) this.openApi.info = info;
    return this;
  }

  paths(paths: PathsObject): OpenApiBuilder {
    if (paths) this.openApi.paths = paths;
    return this;
  }

  servers(servers: ServerObject[]): OpenApiBuilder {
    if (servers) this.openApi.servers = servers;
    return this;
  }

  security(security: SecurityRequirementObject[]): OpenApiBuilder {
    if (security) this.openApi.security = security;
    return this;
  }

  tags(tags: TagObject[]): OpenApiBuilder {
    if (tags) this.openApi.tags = tags;
    return this;
  }

  externalDocs(externalDocs: ExternalDocumentationObject): OpenApiBuilder {
    if (externalDocs) this.openApi.externalDocs = externalDocs;
    return this;
  }

  build(): OpenApiObject {
    return this.openApi;
  }
}
