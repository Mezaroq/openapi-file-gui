import {Injectable} from '@angular/core';
import {FormToObjectMapper} from "../interface/form-to-object-mapper";
import {ServerVariableObject} from "../interface/open-api/server-variable-object";
import {ApiMap} from "../interface/api-map";
import {ServerVariableBuilder} from "../model/server-variable";

@Injectable()
export class ServerVariableService implements FormToObjectMapper<ApiMap<ServerVariableObject>> {

  constructor() {
  }

  mapObject(forms: ApiMap<ServerVariableObject>): ApiMap<ServerVariableObject> {
    const variables: ApiMap<ServerVariableObject> = {};
    for (let form in forms) {
      variables[form] = new ServerVariableBuilder()
        .default(forms[form].default)
        .description(forms[form].description)
        .enum(forms[form].enum)
        .build();
    }
    return Object.keys(variables).length === 0 ? null : variables;
  }
}
