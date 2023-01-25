import RequiredAttributes from '../../paramutils/requiredAttributes';
import { MerchantIdentifier } from '../merchant/merchantIdentifier';
import { CustomerIdentifier } from '../customer/customerIdentifier';
import { ConnectAccountInstitutionCreateArgs } from './connectAccountInstitutionCreateArgs';
import { ConnectAccountPublicAccessToken } from './connectAccountPublicAccessToken';


export class ConnectAccountCreateArgs {
    merchantIdentifier: MerchantIdentifier;

    customerIdentifier: CustomerIdentifier;

    institution: ConnectAccountInstitutionCreateArgs;

    publicToken: ConnectAccountPublicAccessToken;

    constructor(
        merchantIdentifier: MerchantIdentifier,
        customerIdentifier: CustomerIdentifier,
        institution: ConnectAccountInstitutionCreateArgs,
        publicToken: ConnectAccountPublicAccessToken,
    ) {
        this.merchantIdentifier = RequiredAttributes.requireNonNull(merchantIdentifier);
        this.customerIdentifier = RequiredAttributes.requireNonNull(customerIdentifier);
        this.institution = RequiredAttributes.requireNonNull(institution);
        this.publicToken = RequiredAttributes.requireNonNull(publicToken);
    }

    static asBypass(
        merchantIdentifier: MerchantIdentifier,
        customerIdentifier: CustomerIdentifier
    ): ConnectAccountCreateArgs {
        const institution = new ConnectAccountInstitutionCreateArgs(
            'mNAyeRzXZnfEyb8LyxJeCAyeXQavvWfMRelgJ'
        );
        const publicToken = new ConnectAccountPublicAccessToken(
            'public-whitelabel-connector-534ec712-f4a1-4e6f-abdb-482b137528f3'
        );
        return new ConnectAccountCreateArgs(
            merchantIdentifier,
            customerIdentifier,
            institution,
            publicToken
        );
    }
}
