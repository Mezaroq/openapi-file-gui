import {ContactObject} from "../interface/contact-object";
import {Builder} from "../../interface/builder";

export class Contact implements ContactObject {
  email: string;
  name: string;
  url: string;
}

export class ContactBuilder implements Builder<ContactObject> {
  private readonly contact: ContactObject | any;

  constructor() {
    this.contact = {};
  }

  email(email: string): ContactBuilder {
    if (email) this.contact.email = email;
    return this;
  }

  name(name: string): ContactBuilder {
    if (name) this.contact.name = name;
    return this;
  }

  url(url: string): ContactBuilder {
    if (url) this.contact.url = url;
    return this;
  }

  build(): ContactObject {
    return this.contact;
  }
}
