import {Builder, BuilderValidator} from "../interface/builder";
import {PathItemObject} from "../interface/open-api/path-item-object";
import {OperationObject} from "../interface/open-api/operation-object";
import {ParameterObject} from "../interface/open-api/parameter-object";
import {ReferenceObject} from "../interface/open-api/reference-object";

export class PathItemBuilder implements Builder<PathItemObject> {
  private readonly pathItem: PathItemObject | any;

  constructor() {
    this.pathItem = {};
  }

  summary(summary: string): PathItemBuilder {
    if (summary) this.pathItem.summary = summary;
    return this;
  }

  description(description: string): PathItemBuilder {
    if (description) this.pathItem.description = description;
    return this;
  }

  get(get: OperationObject): PathItemBuilder {
    if (BuilderValidator.checkObject(get)) this.pathItem.get = get;
    return this;
  }

  put(put: OperationObject): PathItemBuilder {
    if (BuilderValidator.checkObject(put)) this.pathItem.put = put;
    return this;
  }

  post(post: OperationObject): PathItemBuilder {
    if (BuilderValidator.checkObject(post)) this.pathItem.post = post;
    return this;
  }

  delete(_delete: OperationObject): PathItemBuilder {
    if (BuilderValidator.checkObject(_delete)) this.pathItem.delete = _delete;
    return this;
  }

  options(options: OperationObject): PathItemBuilder {
    if (BuilderValidator.checkObject(options)) this.pathItem.options = options;
    return this;
  }

  head(head: OperationObject): PathItemBuilder {
    if (BuilderValidator.checkObject(head)) this.pathItem.head = head;
    return this;
  }

  patch(patch: OperationObject): PathItemBuilder {
    if (BuilderValidator.checkObject(patch)) this.pathItem.patch = patch;
    return this;
  }

  trace(trace: OperationObject): PathItemBuilder {
    if (BuilderValidator.checkObject(trace)) this.pathItem.trace = trace;
    return this;
  }

  parameters(parameters: ParameterObject[] | ReferenceObject[]): PathItemBuilder {
    if (BuilderValidator.checkArray(parameters)) this.pathItem.parameters = parameters;
    return this;
  }

  build(): PathItemObject {
    return this.pathItem;
  }
}
