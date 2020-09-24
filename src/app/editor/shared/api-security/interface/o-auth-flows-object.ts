import {OAuthFlowObject} from "./o-auth-flow-object";

export interface OAuthFlowsObject {
  implicit: OAuthFlowObject,
  password: OAuthFlowObject,
  clientCredentials: OAuthFlowObject,
  authorizationCode: OAuthFlowObject
}
