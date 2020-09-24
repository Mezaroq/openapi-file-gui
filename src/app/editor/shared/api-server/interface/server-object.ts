import {ServerVariableObject} from "../../api-server-variable/interface/server-variable-object";
import {ApiMap} from "../../interface/api-map";

export interface ServerObject {
  url: string,
  description?: string,
  variables?: ApiMap<ServerVariableObject>
}
