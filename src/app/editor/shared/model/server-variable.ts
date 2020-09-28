import {ServerVariableObject} from "../interface/open-api/server-variable-object";
import {Builder, BuilderValidator} from "../interface/builder";

export class ServerVariable implements ServerVariableObject {
  default: string;
  description: string;
  enum: string[];
}

export class ServerVariableBuilder implements Builder<ServerVariableObject> {
  private readonly serverVariable: ServerVariableObject | any;

  constructor() {
    this.serverVariable = {}
  }

  default(_default: string): ServerVariableBuilder {
    if (_default) this.serverVariable.default = _default;
    return this;
  }

  description(description: string): ServerVariableBuilder {
    if (description) this.serverVariable.description = description;
    return this;
  }

  enum(_enum: string[]): ServerVariableBuilder {
    if (BuilderValidator.checkArray(_enum)) this.serverVariable.enum = _enum;
    return this;
  }

  build(): ServerVariableObject {
    return this.serverVariable;
  }
}
