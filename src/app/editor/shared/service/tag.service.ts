import {Injectable} from '@angular/core';
import {FormToObjectMapper} from "../interface/form-to-object-mapper";
import {TagObject} from "../interface/open-api/tag-object";
import {TagBuilder} from "../model/tag";

@Injectable({
  providedIn: 'root'
})
export class TagService implements FormToObjectMapper<TagObject[]> {

  constructor() {
  }

  mapObject(forms: TagObject[]): TagObject[] {
    const formsArray: TagObject[] = [];
    if (forms) {
      for (let form of forms) {
        formsArray.push(
          new TagBuilder()
            .name(form.name)
            .description(form.description)
            .build()
        )
      }
    }
    return formsArray;
  }
}
