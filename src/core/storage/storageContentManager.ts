import RequiredAttributes from '../paramutils/requiredAttributes';
import { IdOptionalType } from '../domain/common/genericTypes';
import { ApiAccessToken } from '../domain/auth/apiAccessToken';

const TOKEN_KEY = '@EQTAuth:token';

const getFromStorageIfPresent = (key: string): IdOptionalType => {

  try {

    return sessionStorage.getItem(key);

  } catch (exception) {

    console.error('Could not retrieve key from storage', key, exception);
    // DataLogging.captureException(exception);

    return null;

  }

};

const addToStorage = (key: string, value: any): void => {

  try {

    sessionStorage.setItem(key, JSON.stringify(value));

  } catch (exception) {

    console.error('Could not add value to key in storage', key, exception);
    // DataLogging.captureException(exception);

  }

};

const setToken = (token: ApiAccessToken): void => {

  addToStorage(TOKEN_KEY, token);

  // We need to find the issue with CORS and sending the cookie
  // by default Axios always include cookies on same domain
  // for some reason the BE config is not taking it well
  // https://github.com/axios/axios/issues/2455
  // saveIntoCookies(token, loginUuid);

};

const getToken = async (): Promise<ApiAccessToken | null> => {

  const stringToken = getFromStorageIfPresent(TOKEN_KEY);

  if (RequiredAttributes.isUndefinedOrNull(stringToken)) {

    return null;

  }

  const jsonToken = JSON.parse(stringToken as string);

  return new ApiAccessToken(
    jsonToken.key,
    jsonToken.secret,
  );

};

const StorageContentManager = {
  setToken,
  getToken,
};

export default StorageContentManager;
