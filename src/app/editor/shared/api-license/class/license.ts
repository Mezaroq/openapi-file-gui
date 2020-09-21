import {LicenseObject} from "../interface/license-object";
import {Builder} from "../../interface/builder";

export class License implements LicenseObject {
  name: string;
  url: string;
}

export class LicenseBuilder implements Builder<LicenseObject> {
  private readonly license: LicenseObject;

  constructor() {
    this.license = {
      name: null,
      url: null
    }
  }

  name(name: string): LicenseBuilder {
    if (name) this.license.name = name;
    return this;
  }

  url(url: string): LicenseBuilder {
    if (url) this.license.url = url;
    return this;
  }

  build(): LicenseObject {
    return this.license;
  }

}
