import {ServerObject} from "../interface/open-api/server-object";
import {ServerVariableObject} from "../interface/open-api/server-variable-object";
import {Builder, BuilderValidator} from "../interface/builder";
import {ApiMap} from "../interface/api-map";

export class ServerBuilder implements Builder<ServerObject> {
  private readonly server: ServerObject | any;

  constructor() {
    this.server = {}
  }

  url(url: string): ServerBuilder {
    if (url) this.server.url = url;
    return this;
  }

  description(description: string): ServerBuilder {
    if (description) this.server.description = description;
    return this;
  }

  variables(variables: ApiMap<ServerVariableObject>): ServerBuilder {
    if (BuilderValidator.checkObject(variables)) this.server.variables = variables;
    return this;
  }

  build(): ServerObject {
    return this.server;
  }
}
