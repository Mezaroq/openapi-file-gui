import {Injectable} from '@angular/core';
import {FormToObjectMapper} from "../../interface/form-to-object-mapper";
import {ServerVariableObject} from "../interface/server-variable-object";
import {ApiMap} from "../../interface/api-map";
import {ServerVariableForm} from "../interface/server-variable-form";
import {ServerVariableBuilder} from "../class/server-variable";

@Injectable({
  providedIn: 'root'
})
export class ServerVariableService implements FormToObjectMapper<ApiMap<ServerVariableObject>> {

  constructor() {
  }

  mapObject(forms: ApiMap<ServerVariableObject> | ServerVariableForm[] | any): ApiMap<ServerVariableObject> {
    const variables: ApiMap<ServerVariableObject> = {};
    for (let form of forms) {
      variables[form.name] = new ServerVariableBuilder()
        ._default(form.default)
        .description(form.description)
        ._enum(form.enums)
        .build();
    }
    return Object.keys(variables).length === 0 ? null : variables;
  }
}
