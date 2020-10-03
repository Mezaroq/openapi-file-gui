import {Injectable} from '@angular/core';
import {FormToObjectMapper} from "../shared/interface/form-to-object-mapper";
import {ExternalDocsObject} from "../shared/interface/open-api/external-docs-object";
import {ExternalDocsBuilder} from "../shared/model/external-documentation";

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
