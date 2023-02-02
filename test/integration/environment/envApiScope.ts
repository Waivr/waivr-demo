import axios from 'axios';
import { Agent } from 'https';
import WaivrAppApiRegistry, {
  IWaivrAppApiRegistry
} from '../../../src/core/services/registry/waivrapp/waivrAppApiRegistry';
import { ApiAccessToken } from '../../../src/core/domain/auth/apiAccessToken';
import { MerchantIdentifier } from '../../../src/core/domain/merchant/merchantIdentifier';
import { IEnvironmentConstants } from '../../../src/core/config/constants';

interface EnvApis {
  waivrAppApi: string,
  merchantUuid: string,
  apiToken: ApiAccessToken,
}

const localEnv: EnvApis = ({
  waivrAppApi: 'http://localhost:8785/api/waivr-app',
  merchantUuid: '636dd5e6-9cc5-435e-86da-6cb0622eab68',
  apiToken: {
    key: 'BT-EX-636dd5e6-9cc5-435e-86da-6cb0622eab68',
    secret: 'dyGDxMNwUjIFyKvQDoaFGy5pC9NOJ1BGQtTAVlRnSGKVjL472y'
  }
});

const stageEnv: EnvApis = {
  waivrAppApi: 'https://stage.waivr.co/api/waivr-app',
  merchantUuid: '598bd015-1c25-4fbf-8c8b-05ef2b20ded1',
  apiToken: {
    key: 'BT-EX-598bd015-1c25-4fbf-8c8b-05ef2b20ded1',
    secret: 'GHLPLB8ea7mQjmliKjBtxlVRHikyk03KDCisjOuDp5xcoXVD8R'
  }
};


export interface EnvApiRegistries {
  waivrAppApiRegistry :IWaivrAppApiRegistry
  merchantIdentifier: MerchantIdentifier
  apiToken: ApiAccessToken
}

const buildRegistries = (env: EnvApis): EnvApiRegistries => {
  const constants: IEnvironmentConstants = {
    API_TOKEN_KEY: env.apiToken.key,
    API_TOKEN_SECRET: env.apiToken.secret,
    WAIVR_APP_API: env.waivrAppApi
  };

  const httpsAgent = new Agent({
    rejectUnauthorized: false, // (NOTE: this will disable client verification)
  });
  const axiosInstance = axios.create({
    withCredentials: false,
    baseURL: env.waivrAppApi,
    headers: {
      'Content-Type': 'application/json'
    },
    httpsAgent
  });
  return {
    waivrAppApiRegistry: WaivrAppApiRegistry.instance(
        axiosInstance,
        constants
    ),
    merchantIdentifier: new MerchantIdentifier(env.merchantUuid),
    apiToken: env.apiToken
  };
};

const EnvApiScopeEnd2End = {
  local: () => buildRegistries(localEnv),
  stage: () => buildRegistries(stageEnv),
};

export default EnvApiScopeEnd2End;
