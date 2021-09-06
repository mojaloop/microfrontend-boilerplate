export interface AuthConfig {
  loginEndpoint: string;
  logoutEndpoint: string;
  isAuthEnabled: boolean;
}

export interface ConfigState extends AuthConfig {}
