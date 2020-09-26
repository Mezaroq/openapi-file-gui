import {ServerVariableObject} from "./server-variable-object";

export interface ServerVariableForm extends ServerVariableObject {
  name: string,
  enums: string[]
}
