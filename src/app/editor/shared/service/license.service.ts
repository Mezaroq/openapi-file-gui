import {Injectable} from '@angular/core';
import {FormToObjectMapper} from "../interface/form-to-object-mapper";
import {LicenseObject} from "../interface/open-api/license-object";
import {LicenseBuilder} from "../model/license";

@Injectable()
export class LicenseService implements FormToObjectMapper<LicenseObject> {

  constructor() {
  }

  mapObject(form: LicenseObject): LicenseObject {
    return new LicenseBuilder()
      .name(form.name)
      .url(form.url)
      .build()
  }
}
