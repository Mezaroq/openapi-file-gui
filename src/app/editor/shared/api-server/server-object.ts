import {ServerVariableObject} from "../api-server-variable/server-variable-object";

export interface ServerObject {
  url: string,
  description?: string,
  variables?: Map<string, ServerVariableObject>
}
