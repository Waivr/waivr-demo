// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const EnvConfig = require('./envConfig');

dotenv.config();

const envs = EnvConfig.buildEnvs(process.env);

EnvConfig.checkValidEnvs(envs);

module.exports = envs;
