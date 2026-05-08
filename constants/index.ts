export const APP_NAME = 'TrioApp';

export const STORAGE_KEYS = {
  ACCESS_TOKEN:  'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA:     'user_data',
  THEME:         'theme_preference',
} as const;

export const QUERY_KEYS = {
  USER:    'user',
  POSTS:   'posts',
  POST:    'post',
  PROFILE: 'profile',
} as const;

export const QUERY_STALE_TIME = {
  SHORT:   1000 * 30,
  DEFAULT: 1000 * 60 * 5,
  LONG:    1000 * 60 * 30,
} as const;

export const PAGINATION = {
  DEFAULT_PAGE:     1,
  DEFAULT_PER_PAGE: 20,
} as const;
