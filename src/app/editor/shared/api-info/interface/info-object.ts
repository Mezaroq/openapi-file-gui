import {ContactObject} from "../../api-contact/interface/contact-object";
import {LicenseObject} from "../../api-license/interface/license-object";

export interface InfoObject {
  title: string,
  version: string
  description?: string,
  termsOfService?: string,
  contact?: ContactObject,
  license?: LicenseObject,
}
