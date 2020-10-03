import {TagObject} from "../interface/open-api/tag-object";
import {Builder, BuilderValidator} from "../interface/builder";


export class TagBuilder implements Builder<TagObject> {
  private readonly tag: TagObject | any;

  constructor() {
    this.tag = {}
  }

  description(description: string): TagBuilder {
    if (description) this.tag.description = description;
    return this;
  }

  name(name: string): TagBuilder {
    if (name) this.tag.name = name;
    return this;
  }

  externalDocs(externalDocs: string): TagBuilder {
    if (BuilderValidator.checkObject(externalDocs)) this.tag.externalDocs = externalDocs;
    return this;
  }

  build(): TagObject {
    return this.tag;
  }
}
