import {Injectable} from '@angular/core';
import {InfoObject} from "../interface/info-object";
import {InfoBuilder} from "../class/info";
import {ContactService} from "../../api-contact/service/contact.service";
import {LicenseService} from "../../api-license/service/license.service";
import {FormToObjectMapper} from "../../interface/form-to-object-mapper";

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
}
