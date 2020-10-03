import {Injectable} from '@angular/core';
import {FormToObjectMapper} from "../shared/interface/form-to-object-mapper";
import {ContactObject} from "../shared/interface/open-api/contact-object";
import {ContactBuilder} from "../shared/model/contact";

@Injectable()
export class ContactService implements FormToObjectMapper<ContactObject> {

  constructor() {
  }

  mapObject(form: ContactObject): ContactObject {
    return new ContactBuilder()
      .email(form.email)
      .name(form.name)
      .url(form.url)
      .build()
  }
}
