import {InfoObject} from "../interface/info-object";
import {ContactObject} from "../../api-contact/interface/contact-object";
import {LicenseObject} from "../../api-license/interface/license-object";
import {Builder, BuilderValidator} from "../../interface/builder";

export class Info implements InfoObject {
  contact: ContactObject;
  description: string | null;
  license: LicenseObject;
  termsOfService: string | null;
  title: string;
  version: string;
}

export class InfoBuilder extends BuilderValidator implements Builder<InfoObject> {
  private readonly info: InfoObject | any;

  constructor() {
    super();
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
    if (this.checkObject(contact)) this.info.contact = contact;
    return this;
  }

  license(license: LicenseObject): InfoBuilder {
    if (this.checkObject(license)) this.info.license = license;
    return this;
  }

  build(): InfoObject | null {
    return this.info;
  }
}
