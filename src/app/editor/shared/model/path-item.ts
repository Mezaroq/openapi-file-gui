import {Builder, BuilderValidator} from "../interface/builder";
import {PathItemObject} from "../interface/open-api/path-item-object";
import {OperationObject} from "../interface/open-api/operation-object";
import {ParameterObject} from "../interface/open-api/parameter-object";
import {ReferenceObject} from "../interface/open-api/reference-object";
import {ServerObject} from "../interface/open-api/server-object";

export class PathItem implements PathItemObject {
  summary: string;
  $ref?: string;
  description?: string;
  get?: OperationObject;
  put?: OperationObject;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  patch?: OperationObject;
  trace?: OperationObject;
  servers?: ServerObject[];
  parameters?: ParameterObject[] | ReferenceObject[];
}

export class PathItemBuilder implements Builder<PathItemObject> {
  private readonly pathItem: PathItemObject | any;

  constructor() {
    this.pathItem = {};
  }

  ref($ref: string): Builder<PathItemObject> {
    if ($ref) this.pathItem.$ref = $ref;
    return this;
  }

  description(description: string): Builder<PathItemObject> {
    if (description) this.pathItem.description = description;
    return this;
  }

  get(get: OperationObject): Builder<PathItemObject> {
    if (BuilderValidator.checkObject(get)) this.pathItem.get = get;
    return this;
  }

  put(put: OperationObject): Builder<PathItemObject> {
    if (BuilderValidator.checkObject(put)) this.pathItem.put = put;
    return this;
  }

  post(post: OperationObject): Builder<PathItemObject> {
    if (BuilderValidator.checkObject(post)) this.pathItem.post = post;
    return this;
  }

  delete(_delete: OperationObject): Builder<PathItemObject> {
    if (BuilderValidator.checkObject(_delete)) this.pathItem.delete = _delete;
    return this;
  }

  options(options: OperationObject): Builder<PathItemObject> {
    if (BuilderValidator.checkObject(options)) this.pathItem.options = options;
    return this;
  }

  head(head: OperationObject): Builder<PathItemObject> {
    if (BuilderValidator.checkObject(head)) this.pathItem.head = head;
    return this;
  }

  patch(patch: OperationObject): Builder<PathItemObject> {
    if (BuilderValidator.checkObject(patch)) this.pathItem.patch = patch;
    return this;
  }

  trace(trace: OperationObject): Builder<PathItemObject> {
    if (BuilderValidator.checkObject(trace)) this.pathItem.trace = trace;
    return this;
  }

  servers(servers: ServerObject[]): Builder<PathItemObject> {
    if (BuilderValidator.checkArray(servers)) this.pathItem.servers = servers;
    return this;
  }

  parameters(parameters: ParameterObject[] | ReferenceObject[]): Builder<PathItemObject> {
    if (BuilderValidator.checkArray(parameters)) this.pathItem.parameters = parameters;
    return this;
  }

  build(): PathItemObject {
    return this.pathItem;
  }
}
