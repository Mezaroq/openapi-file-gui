import {Injectable} from '@angular/core';
import {ServerBuilder} from "../shared/model/server";
import {ServerObject} from "../shared/interface/open-api/server-object";
import {FormToObjectMapper} from "../shared/interface/form-to-object-mapper";
import {ServerVariableService} from "./server-variable.service";

@Injectable()
export class ServerService implements FormToObjectMapper<ServerObject[]> {

  constructor(private serverVariableService: ServerVariableService) {}

  mapObject(forms: ServerObject[]): ServerObject[] {
    const servers: ServerObject[] = [];
    for (let form of forms) {
      servers.push(
        new ServerBuilder()
          .url(form.url)
          .description(form.description)
          .variables(this.serverVariableService.mapObject(form.variables))
          .build()
      )
    }
    return servers;
  }
}
