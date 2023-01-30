const {
    MODE: ENVIRONMENT,
    NODE_TLS_REJECT_UNAUTHORIZED,
} = import.meta.env;

const LAST_DOCKER_ID = import.meta.env.LAST_DOCKER_ID || null;
const LAST_DOCKER_TAG = import.meta.env.LAST_DOCKER_TAG || null;
const LAST_DOCKER_IMAGE_ID = import.meta.env.LAST_DOCKER_TAG || null;
const DOCKER_TAG = import.meta.env.DOCKER_TAG || null;
const GIT_TAG = import.meta.env.GIT_TAG || null;
const GITHUB_REF_NAME = import.meta.env.GITHUB_REF_NAME || null;
const GITHUB_SHA = import.meta.env.GITHUB_SHA || null;
const SERVICE_NAME = import.meta.env.SERVICE_NAME || null;
const SERVICE_DESCRIPTION = import.meta.env.SERVICE_DESCRIPTION || null;
const API_TOKEN_KEY = import.meta.env.API_TOKEN_KEY || import.meta.env.VITE_PUBLIC_API_TOKEN_KEY || null;
const API_TOKEN_SECRET = import.meta.env.API_TOKEN_SECRET || import.meta.env.VITE_PUBLIC_API_TOKEN_SECRET || null;
const PUBLIC_URL = import.meta.env.PUBLIC_URL || import.meta.env.VITE_PUBLIC_PUBLIC_URL || null;
const WAIVR_APP_API = import.meta.env.WAIVR_APP_API || import.meta.env.VITE_PUBLIC_WAIVR_APP_API || null;

export interface IEnvironmentConstants {
    ENVIRONMENT?: any,
    LAST_DOCKER_ID?: any,
    LAST_DOCKER_TAG?: any,
    LAST_DOCKER_IMAGE_ID?: any,
    DOCKER_TAG?: any,
    GIT_TAG?: any,
    GITHUB_REF_NAME?: any,
    GITHUB_SHA?: any,
    SERVICE_NAME?: any,
    SERVICE_DESCRIPTION?: any,
    API_TOKEN_KEY?: any,
    API_TOKEN_SECRET?: any,
    PUBLIC_URL?: any,
    WAIVR_APP_API?: any
}

const environmentConstants = {
    ENVIRONMENT,
    LAST_DOCKER_ID,
    LAST_DOCKER_TAG,
    LAST_DOCKER_IMAGE_ID,
    DOCKER_TAG,
    GIT_TAG,
    GITHUB_REF_NAME,
    GITHUB_SHA,
    SERVICE_NAME,
    SERVICE_DESCRIPTION,
    API_TOKEN_KEY,
    API_TOKEN_SECRET,
    PUBLIC_URL,
    WAIVR_APP_API,
};

export default environmentConstants;
