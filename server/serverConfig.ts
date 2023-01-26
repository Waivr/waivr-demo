import dotenv from 'dotenv';
import EnvConfig from './envConfig';

dotenv.config();

const envs = EnvConfig.buildEnvs(process.env);

EnvConfig.checkValidEnvs(envs);

export default envs;
