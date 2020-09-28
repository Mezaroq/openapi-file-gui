import {ExternalDocsObject} from "./external-docs-object";

export interface TagObject {
  name: string,
  description?: string,
  externalDocs?: ExternalDocsObject
}
