import {Injectable} from '@angular/core';
import {FormToObjectMapper} from "../interface/form-to-object-mapper";
import {ContactObject} from "../interface/open-api/contact-object";
import {ContactBuilder} from "../model/contact";

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
