import RequiredAttributes from '../paramutils/requiredAttributes';
import { ApiAccessToken } from '../domain/auth/apiAccessToken';

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

const env: EnvType = RequiredAttributes.requireNonNullOrElse(
  import.meta.env.NODE_ENV,
  'development'
) as EnvType;

const docker = (): Docker => {
  const last: LastDocker = {
    id: import.meta.env.LAST_DOCKER_ID || null,
    tag: import.meta.env.LAST_DOCKER_TAG || null,
    imageId: import.meta.env.LAST_DOCKER_IMAGE_ID || null,
  };
  return {
    tag: import.meta.env.DOCKER_TAG || null,
    last,
  };
};

const git = (): Git => ({
  tag: import.meta.env.GIT_TAG || null,
  refName: import.meta.env.GITHUB_REF_NAME || null,
  sha: import.meta.env.GITHUB_SHA || null,
});

const service = (): Service => ({
  name: import.meta.env.SERVICE_NAME || null,
  appVersion: import.meta.env.GITHUB_REF_NAME || null,
  description: import.meta.env.SERVICE_DESCRIPTION || null,
});

const deploySummary = (): DeploySummary => ({
  docker: docker(),
  git: git(),
  service: service(),
});

const apiAccessToken = (): ApiAccessToken => {
  const key = RequiredAttributes.requireNonBlank(
    import.meta.env.API_TOKEN_KEY || import.meta.env.VITE_PUBLIC_API_TOKEN_KEY
  );
  const secret = RequiredAttributes.requireNonBlank(
    import.meta.env.API_TOKEN_SECRET ||
      import.meta.env.VITE_PUBLIC_API_TOKEN_SECRET
  );
  return new ApiAccessToken(key, secret);
};

const geEnvVars = (): EnvironmentVarsMap => {
  const publicUrl = RequiredAttributes.requireNonBlankOrNonNullDefault(
    import.meta.env.PUBLIC_URL,
    '/'
  );
  const waivrAppApi = RequiredAttributes.requireNonBlankOrNonNullDefault(
    import.meta.env.WAIVR_APP_API || import.meta.env.VITE_PUBLIC_WAIVR_APP_API,
    'api/waivr-service'
  );
  return {
    env,
    publicUrl,
    waivrAppApi,
    deploySummary: deploySummary(),
    apiAccessToken: apiAccessToken(),
  };
};

const EnvironmentVars = geEnvVars();

export default EnvironmentVars;
