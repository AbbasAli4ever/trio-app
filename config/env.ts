const env = {
  API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL ?? 'https://jsonplaceholder.typicode.com',
  API_TIMEOUT:  Number(process.env.EXPO_PUBLIC_API_TIMEOUT ?? 10000),
  APP_ENV:      process.env.EXPO_PUBLIC_APP_ENV ?? 'development',
  APP_NAME:     process.env.EXPO_PUBLIC_APP_NAME ?? 'TrioApp',

  get isDev()  { return this.APP_ENV === 'development'; },
  get isProd() { return this.APP_ENV === 'production'; },
} as const;

export default env;
