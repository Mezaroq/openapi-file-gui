import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  removeNullProperties(object: Object): Object {
    for (let key in object) {
      if (typeof object[key] === "object" && object[key] !== '' && object[key] !== null) {
        const obj = this.removeNullProperties(object[key]);
        Object.keys(obj).length === 0 ? delete object[key] : object[key] = obj;
      } else if (object[key] === '' || object[key] === null) {
        delete object[key];
      }
    }
    return object;
  }
}
