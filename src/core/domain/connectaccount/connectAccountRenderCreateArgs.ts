import RequiredAttributes from '../../paramutils/requiredAttributes';
import { MerchantIdentifier } from '../merchant/merchantIdentifier';


export class ConnectAccountRenderCreateArgs {
    merchantIdentifier: MerchantIdentifier;

    redirectUrl: string | null;

    constructor(
        merchantIdentifier: MerchantIdentifier,
        redirectUrl?: string | null
    ) {
        this.merchantIdentifier = RequiredAttributes.requireNonNull(merchantIdentifier);
        this.redirectUrl = (redirectUrl && RequiredAttributes.requireNonBlank(redirectUrl)) || null;
    }
}
