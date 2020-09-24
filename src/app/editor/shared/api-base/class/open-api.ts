import {OpenApiObject} from "../interface/open-api-object";
import {ComponentsObject} from "../../api-components/components-object";
import {ExternalDocsObject} from "../../api-external-documentation/interface/external-docs-object";
import {InfoObject} from "../../api-info/interface/info-object";
import {OpenApiVersion} from "../interface/open-api-version.enum";
import {PathsObject} from "../../api-paths/paths-object";
import {SecurityRequirementObject} from "../../api-security-requirements/security-requirement-object";
import {ServerObject} from "../../api-server/interface/server-object";
import {TagObject} from "../../api-tag/tag-object";
import {Builder, BuilderValidator} from "../../interface/builder";

export class OpenApi implements OpenApiObject {
  components: ComponentsObject;
  externalDocs: ExternalDocsObject;
  info: InfoObject;
  openapi: OpenApiVersion;
  paths: PathsObject;
  security: SecurityRequirementObject[];
  servers: ServerObject[];
  tags: TagObject[];
}

export class OpenApiBuilder extends BuilderValidator implements Builder<OpenApiObject> {
  private readonly openApi: OpenApiObject | any;

  constructor() {
    super();
    this.openApi = {};
  }

  openapi(openapi: OpenApiVersion): OpenApiBuilder {
    if (this.checkValue(openapi)) this.openApi.openapi = openapi;
    return this;
  }

  info(info: InfoObject): OpenApiBuilder {
    if (this.checkObject(info)) this.openApi.info = info;
    return this;
  }

  paths(paths: PathsObject): OpenApiBuilder {
    if (this.checkObject(paths)) this.openApi.paths = paths;
    return this;
  }

  servers(servers: ServerObject[]): OpenApiBuilder {
    if (this.checkObject(servers)) this.openApi.servers = servers;
    return this;
  }

  security(security: SecurityRequirementObject[]): OpenApiBuilder {
    if (this.checkArray(security)) this.openApi.security = security;
    return this;
  }

  tags(tags: TagObject[]): OpenApiBuilder {
    if (this.checkObject(tags)) this.openApi.tags = tags;
    return this;
  }

  externalDocs(externalDocs: ExternalDocsObject): OpenApiBuilder {
    if (this.checkObject(externalDocs)) this.openApi.externalDocs = externalDocs;
    return this;
  }

  build(): OpenApiObject {
    return this.openApi;
  }
}
