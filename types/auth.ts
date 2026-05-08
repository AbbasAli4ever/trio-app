export interface User {
  id:        string;
  email:     string;
  firstName: string;
  lastName:  string;
  avatar?:   string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken:  string;
  refreshToken: string;
  expiresIn:    number;
}

export interface LoginCredentials {
  email:    string;
  password: string;
}

export interface RegisterCredentials {
  email:     string;
  password:  string;
  firstName: string;
  lastName:  string;
}

export interface AuthResponse {
  user:   User;
  tokens: AuthTokens;
}
