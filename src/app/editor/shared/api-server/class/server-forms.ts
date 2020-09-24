export class ServerForms {
  forms: any[] = [];

  add(index: number, form: any | null) {
    this.forms[index] = form;
  }

  remove(index: number) {
    this.forms.splice(index, 1);
  }
}
