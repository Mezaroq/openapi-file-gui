import {PathsObject} from "../interface/open-api/paths-object";
import {Builder, BuilderValidator} from "../interface/builder";
import {PathItemObject} from "../interface/open-api/path-item-object";


export class PathsBuilder implements Builder<PathsObject> {
  private readonly paths: PathsObject;

  constructor() {
    this.paths = {};
  }

  path(path: string, pathItem: PathItemObject): PathsBuilder {
    if (path && BuilderValidator.checkObject(pathItem))
      this.paths[path] = pathItem;
    return this;
  }

  build(): PathsObject {
    return this.paths;
  }
}
