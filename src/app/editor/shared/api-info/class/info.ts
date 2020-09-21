import {InfoObject} from "../interface/info-object";
import {ContactObject} from "../../api-contact/interface/contact-object";
import {LicenseObject} from "../../api-license/interface/license-object";
import {Builder} from "../../interface/builder";
import {ContactBuilder} from "../../api-contact/class/contact";
import {LicenseBuilder} from "../../api-license/class/license";

export class Info implements InfoObject {
  contact: ContactObject;
  description: string | null;
  license: LicenseObject;
  termsOfService: string | null;
  title: string;
  version: string;
}

export class InfoBuilder implements Builder<InfoObject> {
  private readonly info: InfoObject;

  constructor() {
    this.info = {
      title: null,
      version: null,
      description: null,
      termsOfService: null,
      contact: new ContactBuilder().build(),
      license: new LicenseBuilder().build()
    }
  }

  title(title: string): InfoBuilder {
    if (title) this.info.title = title;
    return this;
  }

  version(version: string): InfoBuilder {
    if (version) this.info.version = version;
    return this;
  }

  description(description: string): InfoBuilder {
    if (description) this.info.description = description;
    return this;
  }

  termsOfService(termsOfService: string): InfoBuilder {
    if (termsOfService) this.info.termsOfService = termsOfService;
    return this;
  }

  contact(contact: ContactObject): InfoBuilder {
    if (contact) this.info.contact = contact;
    return this;
  }

  license(license: LicenseObject): InfoBuilder {
    if (license) this.info.license = license;
    return this;
  }

  build(): InfoObject {
    return this.info;
  }

}
