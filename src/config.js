import devConfig from './config.dev.json';
import prodConfig from './config.prod.json';

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
