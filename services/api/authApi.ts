import { apiClient } from './client';
import type { AuthResponse, LoginCredentials, RegisterCredentials } from '@/types';

export const authApi = {
  login: (credentials: LoginCredentials) =>
    apiClient.post<AuthResponse>('/auth/login', credentials),

  register: (credentials: RegisterCredentials) =>
    apiClient.post<AuthResponse>('/auth/register', credentials),

  logout: () =>
    apiClient.post('/auth/logout'),

  refreshToken: (refreshToken: string) =>
    apiClient.post<{ accessToken: string; expiresIn: number }>('/auth/refresh', { refreshToken }),

  getProfile: () =>
    apiClient.get<AuthResponse['user']>('/auth/me'),
};
