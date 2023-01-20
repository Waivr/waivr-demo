import axios, { AxiosInstance } from 'axios';
import WaivrAppApiRegistry, {
  IWaivrAppApiRegistry
} from '../../../src/core/services/registry/waivrapp/waivrAppApiRegistry';
import { ApiAccessToken } from '../../../src/core/domain/auth/apiAccessToken';
import { MerchantIdentifier } from '../../../src/core/domain/merchant/merchantIdentifier';

const waivrAppApi = (baseURL: string): AxiosInstance => axios.create({
  withCredentials: false,
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface EnvApiScope {
  waivrAppApi: AxiosInstance,
}

interface EnvApis {
  waivrAppApi: string,
  merchantUuid: string,
  apiToken: ApiAccessToken,
}

const localEnv: EnvApis = ({
  waivrAppApi: 'http://localhost:8785/api/waivr-app',
  merchantUuid: '',
  apiToken: {
    key: '',
    secret: ''
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
  waivrAppApiRegistry: IWaivrAppApiRegistry,
  merchantIdentifier: MerchantIdentifier
  apiToken: ApiAccessToken
}

const buildRegistries = (env: EnvApis): EnvApiRegistries => ({
  waivrAppApiRegistry: WaivrAppApiRegistry.instance(
      waivrAppApi(env.waivrAppApi)
  ),
  merchantIdentifier: new MerchantIdentifier(env.merchantUuid),
  apiToken: env.apiToken
});

const EnvApiScopeEnd2End = {
  local: () => buildRegistries(localEnv),
  stage: () => buildRegistries(stageEnv),
};

export default EnvApiScopeEnd2End;
