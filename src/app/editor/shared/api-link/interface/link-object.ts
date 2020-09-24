import {ServerObject} from "../../api-server/interface/server-object";

export interface LinkObject {
  operationRef: string,
  operationId: string,
  parameters: Map<string, any>, //{expression}
  requestBody: any, //{expression}
  description: string,
  server: ServerObject
}
