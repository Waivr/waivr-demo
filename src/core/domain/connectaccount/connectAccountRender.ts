import { ConnectAccountLinkingAccountType } from './connectAccountLinkingAccountType';
import { ConnectAccountLinkingAccessToken } from './connectAccountLinkingAccessToken';
import { FutureDate } from '../common/date/FutureDate';
import RequiredAttributes from '../../paramutils/requiredAttributes';


export class ConnectAccountRender {
    type: ConnectAccountLinkingAccountType;

    linkingAccessToken: ConnectAccountLinkingAccessToken;

    validUntil: FutureDate;

    constructor(
        type: ConnectAccountLinkingAccountType,
        linkingAccessToken: ConnectAccountLinkingAccessToken,
        validUntil: FutureDate
    ) {
        this.type = RequiredAttributes.requireNonNull(type);
        this.linkingAccessToken = RequiredAttributes.requireNonNull(linkingAccessToken);
        this.validUntil = RequiredAttributes.requireNonNull(validUntil);
    }
}
