import {ServerVariableObject} from "../interface/server-variable-object";
import {Builder, BuilderValidator} from "../../interface/builder";

export class ServerVariable implements ServerVariableObject {
  default: string;
  description: string;
  enum: string[];
}

export class ServerVariableBuilder extends BuilderValidator implements Builder<ServerVariableObject> {
  private readonly serverVariable: ServerVariableObject | any;

  constructor() {
    super();
    this.serverVariable = {}
  }

  _default(_default: string): ServerVariableBuilder {
    if (_default) this.serverVariable.default = _default;
    return this;
  }

  description(description: string): ServerVariableBuilder {
    if (description) this.serverVariable.description = description;
    return this;
  }

  _enum(_enum: string[]): ServerVariableBuilder {
    if (this.checkArray(_enum)) this.serverVariable.enum = _enum;
    return this;
  }

  build(): ServerVariableObject {
    return this.serverVariable;
  }
}
