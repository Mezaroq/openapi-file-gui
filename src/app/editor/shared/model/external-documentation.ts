import {ExternalDocsObject} from "../interface/open-api/external-docs-object";
import {Builder} from "../interface/builder";

export class ExternalDocsBuilder implements Builder<ExternalDocsObject> {
  private readonly externalDocumentation: ExternalDocsObject | any;

  constructor() {
    this.externalDocumentation = {};
  }

  url(url: string): ExternalDocsBuilder {
    if (url) this.externalDocumentation.url = url;
    return this;
  }

  description(description: string): ExternalDocsBuilder {
    if (description) this.externalDocumentation.description = description;
    return this;
  }

  build(): ExternalDocsObject {
    return this.externalDocumentation;
  }
}
