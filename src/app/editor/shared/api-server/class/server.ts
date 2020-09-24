import {ServerObject} from "../interface/server-object";
import {ServerVariableObject} from "../../api-server-variable/interface/server-variable-object";
import {Builder, BuilderValidator} from "../../interface/builder";
import {ApiMap} from "../../interface/api-map";

export class Server implements ServerObject {
  description: string;
  url: string;
  variables: ApiMap<ServerVariableObject>;
}

export class ServerBuilder extends BuilderValidator implements Builder<ServerObject> {
  private readonly server: ServerObject | any;

  constructor() {
    super();
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
    if (this.checkObject(variables)) this.server.variables = variables;
    return this;
  }

  build(): ServerObject {
    return this.server;
  }
}
