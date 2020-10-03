import {LicenseObject} from "../interface/open-api/license-object";
import {Builder} from "../interface/builder";

export class LicenseBuilder implements Builder<LicenseObject> {
  private readonly license: LicenseObject | any;

  constructor() {
    this.license = {};
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
