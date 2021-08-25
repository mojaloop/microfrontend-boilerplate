export interface AuthConfig {
  loginEndpoint: string;
  logoutEndpoint: string;
  tokenEndpoint: string;
  isAuthEnabled: boolean;
}

export interface ConfigState extends AuthConfig {
  counter: number;
}
