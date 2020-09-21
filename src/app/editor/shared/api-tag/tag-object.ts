import {ExternalDocumentationObject} from "../api-external-documentation/external-documentation-object";

export interface TagObject {
  name: string,
  description?: string,
  externalDocs?: ExternalDocumentationObject
}
