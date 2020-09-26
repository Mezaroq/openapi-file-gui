import {SecurityType} from "./security-type.enum";
import {SecurityIn} from "./security-in.enum";
import {OAuthFlowsObject} from "./o-auth-flows-object";

export interface SecuritySchemeObject {
  type: SecurityType,
  name: string,
  in: SecurityIn,
  scheme: string,
  flows: OAuthFlowsObject,
  openIdConnectUrl: string
  bearerFormat?: string,
  description?: string,
}
