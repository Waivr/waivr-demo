import RequiredAttributes from '../paramutils/requiredAttributes';
import { ApiAccessToken } from '../domain/auth/apiAccessToken';
import environmentConstants, { IEnvironmentConstants } from './constants';

export interface LastDocker {
  id: string | null;
  tag: string | null;
  imageId: string | null;
}
export interface Docker {
  tag: string | null;
  last: LastDocker;
}
export interface Git {
  tag: string | null;
  refName: string | null;
  sha: string | null;
}
export interface Service {
  name: string | null;
  appVersion: string | null;
  description: string | null;
}
export interface DeploySummary {
  docker: Docker;
  git: Git;
  service: Service;
}

type EnvType = 'development' | 'stage' | 'test' | 'production';
export interface EnvironmentVarsMap {
  env: EnvType;
  publicUrl: string;
  waivrAppApi: string;
  deploySummary: DeploySummary;
  apiAccessToken: ApiAccessToken;
}

const env = (constants: IEnvironmentConstants): EnvType => RequiredAttributes.requireNonNullOrElse(
      constants.ENVIRONMENT,
      'development'
  ) as EnvType;

const docker = (constants: IEnvironmentConstants): Docker => {
  const last: LastDocker = {
    id: constants.LAST_DOCKER_ID,
    tag: constants.LAST_DOCKER_TAG,
    imageId: constants.LAST_DOCKER_IMAGE_ID,
  };
  return {
    tag: constants.DOCKER_TAG,
    last,
  };
};

const git = (constants: IEnvironmentConstants): Git => ({
  tag: constants.GIT_TAG,
  refName: constants.GITHUB_REF_NAME,
  sha: constants.GITHUB_SHA,
});

const service = (constants: IEnvironmentConstants): Service => ({
  name: constants.SERVICE_NAME,
  appVersion: constants.GITHUB_REF_NAME,
  description: constants.SERVICE_DESCRIPTION,
});

const deploySummary = (constants: IEnvironmentConstants): DeploySummary => ({
  docker: docker(constants),
  git: git(constants),
  service: service(constants),
});

const apiAccessToken = (constants: IEnvironmentConstants): ApiAccessToken => {
  const key = RequiredAttributes.requireNonBlank(constants.API_TOKEN_KEY);
  const secret = RequiredAttributes.requireNonBlank(constants.API_TOKEN_SECRET);
  return new ApiAccessToken(key, secret);
};

const buildEnvVars = (constants: IEnvironmentConstants): EnvironmentVarsMap => {
  const publicUrl = RequiredAttributes.requireNonBlankOrNonNullDefault(
      constants.PUBLIC_URL,
    '/'
  );
  const waivrAppApi = RequiredAttributes.requireNonBlankOrNonNullDefault(
      constants.WAIVR_APP_API,
    'api/waivr-service'
  );
  return {
    env: env(constants),
    publicUrl,
    waivrAppApi,
    deploySummary: deploySummary(constants),
    apiAccessToken: apiAccessToken(constants),
  };
};

const getEnvVars = (constants?: IEnvironmentConstants): EnvironmentVarsMap => (constants ? buildEnvVars(constants) : buildEnvVars(environmentConstants));

const EnvironmentVars = {
  getEnvVars
};

export default EnvironmentVars;
