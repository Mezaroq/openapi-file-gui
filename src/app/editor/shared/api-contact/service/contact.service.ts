import {Injectable} from '@angular/core';
import {FormToObjectMapper} from "../../interface/form-to-object-mapper";
import {ContactObject} from "../interface/contact-object";
import {ContactBuilder} from "../class/contact";

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
