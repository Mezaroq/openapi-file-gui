import {ExternalDocsObject} from "../api-external-documentation/interface/external-docs-object";

export interface TagObject {
  name: string,
  description?: string,
  externalDocs?: ExternalDocsObject
}
