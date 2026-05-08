export interface ApiResponse<T> {
  data:    T;
  message: string;
  status:  number;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data:       T[];
  pagination: Pagination;
  message:    string;
  success:    boolean;
}

export interface Pagination {
  page:       number;
  perPage:    number;
  total:      number;
  totalPages: number;
  hasNext:    boolean;
  hasPrev:    boolean;
}

export interface ApiError {
  message:    string;
  statusCode: number;
  errors?:    Record<string, string[]>;
}
