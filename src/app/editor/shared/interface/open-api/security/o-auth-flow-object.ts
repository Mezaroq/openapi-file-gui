export interface OAuthFlowObject {
  authorizationUrl: string,
  tokenUrl: string,
  scopes: Map<string, string>
  refreshUrl?: string,
}
