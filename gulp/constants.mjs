// eslint-disable-next-line no-undef
export const isDev = process.env.NODE_ENV !== 'production';
export const dist = isDev ? 'build-dev' : 'build';
