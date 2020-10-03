import {OpenApiObject} from "../interface/open-api/open-api-object";
import {ExternalDocsObject} from "../interface/open-api/external-docs-object";
import {InfoObject} from "../interface/open-api/info-object";
import {OpenApiVersion} from "../enum/open-api-version.enum";
import {PathsObject} from "../interface/open-api/paths-object";
import {SecurityRequirementObject} from "../interface/open-api/security-requirement-object";
import {ServerObject} from "../interface/open-api/server-object";
import {TagObject} from "../interface/open-api/tag-object";
import {Builder, BuilderValidator} from "../interface/builder";

export class OpenApiBuilder implements Builder<OpenApiObject> {
  private readonly openApi: OpenApiObject | any;

  constructor() {
    this.openApi = {};
  }

  openapi(openapi: OpenApiVersion): OpenApiBuilder {
    if (BuilderValidator.checkValue(openapi)) this.openApi.openapi = openapi;
    return this;
  }

  info(info: InfoObject): OpenApiBuilder {
    if (BuilderValidator.checkObject(info)) this.openApi.info = info;
    return this;
  }

  paths(paths: PathsObject): OpenApiBuilder {
    if (BuilderValidator.checkObject(paths)) this.openApi.paths = paths;
    return this;
  }

  servers(servers: ServerObject[]): OpenApiBuilder {
    if (BuilderValidator.checkObject(servers)) this.openApi.servers = servers;
    return this;
  }

  security(security: SecurityRequirementObject[]): OpenApiBuilder {
    if (BuilderValidator.checkArray(security)) this.openApi.security = security;
    return this;
  }

  tags(tags: TagObject[]): OpenApiBuilder {
    if (BuilderValidator.checkObject(tags)) this.openApi.tags = tags;
    return this;
  }

  externalDocs(externalDocs: ExternalDocsObject): OpenApiBuilder {
    if (BuilderValidator.checkObject(externalDocs)) this.openApi.externalDocs = externalDocs;
    return this;
  }

  build(): OpenApiObject {
    return this.openApi;
  }
}
