import {Injectable} from '@angular/core';
import {InfoObject} from "../shared/interface/open-api/info-object";
import {InfoBuilder} from "../shared/model/info";
import {ContactService} from "./contact.service";
import {LicenseService} from "./license.service";
import {FormToObjectMapper} from "../shared/interface/form-to-object-mapper";

@Injectable()
export class InfoService implements FormToObjectMapper<InfoObject> {

  constructor(private contactService: ContactService, private licenseService: LicenseService) {
  }

  mapObject(form: InfoObject): InfoObject {
    return new InfoBuilder()
      .title(form.title)
      .version(form.version)
      .description(form.description)
      .termsOfService(form.termsOfService)
      .contact(this.contactService.mapObject(form.contact))
      .license(this.licenseService.mapObject(form.license))
      .build();
  }

  isValid(object: InfoObject): boolean {
    return !!object.title && !!object.version;
  }
}
