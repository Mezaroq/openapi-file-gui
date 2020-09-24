import {Injectable} from '@angular/core';
import {FormToObjectMapper} from "../../interface/form-to-object-mapper";
import {ExternalDocsObject} from "../interface/external-docs-object";
import {ExternalDocsBuilder} from "../class/external-documentation";

@Injectable()
export class ExternalDocsService implements FormToObjectMapper<ExternalDocsObject> {

  constructor() {}

  mapObject(form: ExternalDocsObject): ExternalDocsObject {
    return new ExternalDocsBuilder()
      .url(form?.url)
      .description(form?.description)
      .build();
  }
}
