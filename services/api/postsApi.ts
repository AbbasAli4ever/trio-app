import { apiClient } from './client';
import type { Post } from '@/types';

export const postsApi = {
  getAll: (page = 1, limit = 20) =>
    apiClient.get<Post[]>('/posts', { params: { _page: page, _limit: limit } }),

  getById: (id: number) =>
    apiClient.get<Post>(`/posts/${id}`),

  create: (data: Omit<Post, 'id'>) =>
    apiClient.post<Post>('/posts', data),

  update: (id: number, data: Partial<Post>) =>
    apiClient.put<Post>(`/posts/${id}`, data),

  delete: (id: number) =>
    apiClient.delete(`/posts/${id}`),
};
