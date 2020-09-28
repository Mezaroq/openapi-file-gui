import {ServerVariableObject} from "./server-variable-object";
import {ApiMap} from "../api-map";

export interface ServerObject {
  url: string,
  description?: string,
  variables?: ApiMap<ServerVariableObject>
}
