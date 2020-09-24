import {Injectable} from '@angular/core';
import {ServerBuilder} from "../class/server";
import {ServerObject} from "../interface/server-object";
import {FormToObjectMapper} from "../../interface/form-to-object-mapper";
import {ServerVariableService} from "../../api-server-variable/service/server-variable.service";

@Injectable()
export class ServerService implements FormToObjectMapper<ServerObject[]> {

  constructor(private serverVariableService: ServerVariableService) {}

  emptyServer(): ServerObject {
    return new ServerBuilder()
      .url(null)
      .description(null)
      .variables(null)
      .build()
  }

  mapObject(forms: ServerObject[] | any[]): ServerObject[] {
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
