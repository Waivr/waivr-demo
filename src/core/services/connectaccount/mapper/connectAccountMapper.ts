import {
  BConnectAccountCreateRequest,
  BConnectAccountInstitutionCreateRequest,
  BConnectAccountRenderCreateRequest
} from '../entities/entityTypes';
import { MappingException } from '../../../domain/exceptions/mappingException';
import { ConnectAccountRenderCreateArgs } from '../../../domain/connectaccount/connectAccountRenderCreateArgs';
import { ConnectAccountCreateArgs } from '../../../domain/connectaccount/connectAccountCreateArgs';
import { ConnectAccountRender } from '../../../domain/connectaccount/connectAccountRender';
import { ConnectAccountLinkingAccountType } from '../../../domain/connectaccount/connectAccountLinkingAccountType';
import { ConnectAccountLinkingAccessToken } from '../../../domain/connectaccount/connectAccountLinkingAccessToken';
import { FutureDate } from '../../../domain/common/date/FutureDate';

const mapConnectAccountRender = (connectAccountRender: any): ConnectAccountRender => {
  const type:ConnectAccountLinkingAccountType = ConnectAccountLinkingAccountType[
      connectAccountRender.type as keyof typeof ConnectAccountLinkingAccountType
    ];
  const linkingAccessToken = new ConnectAccountLinkingAccessToken(
    connectAccountRender.linkingAccessToken
  );
  const validUntil = FutureDate.basedOfNow(new Date(connectAccountRender.validUntil));

  const rawJson = JSON.stringify(connectAccountRender);

  return new ConnectAccountRender(
    type,
    linkingAccessToken,
    validUntil,
    rawJson
  );
};

const fromRenderObject = (connectAccountRender: any): ConnectAccountRender => {
  try {
    return mapConnectAccountRender(connectAccountRender);
  } catch (err) {
    if (err instanceof MappingException) {
      throw err;
    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping ConnectAccountRender response.`, stack);
  }
};

const mapCreateRequest = (request: ConnectAccountCreateArgs): BConnectAccountCreateRequest => {
  const institution: BConnectAccountInstitutionCreateRequest = {
    accountIdentifier: request.institution.accountIdentifier
  };

  return {
    merchantUid: request.merchantIdentifier.value,
    customerUid: request.customerIdentifier.value,
    institution,
    publicToken: request.publicToken.value,
  };
};

const toApiCreateRequest = (request: ConnectAccountCreateArgs): BConnectAccountCreateRequest => {
  try {
    return mapCreateRequest(request);
  } catch (err) {
    if (err instanceof MappingException) {
      throw err;
    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping ConnectAccountCreateArgs.`, stack);
  }
};

const mapRenderRequest = (request: ConnectAccountRenderCreateArgs): BConnectAccountRenderCreateRequest => ({
  merchantUid: request.merchantIdentifier.value,
  redirectUrl: request.redirectUrl,
});

const toApiRenderRequest = (request: ConnectAccountRenderCreateArgs): BConnectAccountRenderCreateRequest => {
  try {
    return mapRenderRequest(request);
  } catch (err) {
    if (err instanceof MappingException) {
      throw err;
    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping CustomerCreateArgs.`, stack);
  }
};

const ConnectAccountMapper = {
  fromRenderObject,

  toApiCreateRequest,
  toApiRenderRequest,
};

export default ConnectAccountMapper;
