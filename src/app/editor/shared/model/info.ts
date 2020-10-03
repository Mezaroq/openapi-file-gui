import {InfoObject} from "../interface/open-api/info-object";
import {ContactObject} from "../interface/open-api/contact-object";
import {LicenseObject} from "../interface/open-api/license-object";
import {Builder, BuilderValidator} from "../interface/builder";

export class InfoBuilder implements Builder<InfoObject> {
  private readonly info: InfoObject | any;

  constructor() {
    this.info = {};
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
    if (BuilderValidator.checkObject(contact)) this.info.contact = contact;
    return this;
  }

  license(license: LicenseObject): InfoBuilder {
    if (BuilderValidator.checkObject(license)) this.info.license = license;
    return this;
  }

  build(): InfoObject | null {
    return this.info;
  }
}
