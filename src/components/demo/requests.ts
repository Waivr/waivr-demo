import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import WaivrAppApiRegistry, {
  IWaivrAppApiRegistry,
} from '../../core/services/registry/waivrapp/waivrAppApiRegistry';
import EnvironmentVars from '../../core/config/EnvironmentVars';
import { createMocks } from './mocks';

const axiosMockInstance = axios.create();
const axiosLiveInstance = axios.create();
export const axiosMockAdapterInstance: AxiosMockAdapter = new AxiosMockAdapter(
  axiosMockInstance,
  {
    delayResponse: 500,
  }
);

export const createApiRegistery = (): IWaivrAppApiRegistry => {
  if (EnvironmentVars.env === 'development') {
    createMocks();
    return WaivrAppApiRegistry.instance(axiosMockInstance);
  }
  return WaivrAppApiRegistry.instance(axiosLiveInstance);
};
