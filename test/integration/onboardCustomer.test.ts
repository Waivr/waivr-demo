import EnvApiScopeEnd2End from './environment/envApiScope';
import { CustomerCreateArgs } from '../../src/core/domain/customer/customerCreateArgs';
import { Email } from '../../src/core/domain/common/contact/email';
import { PersonName } from '../../src/core/domain/person/personName';
import { MerchantIdentifier } from '../../src/core/domain/merchant/merchantIdentifier';
import { ConnectAccountCreateArgs } from '../../src/core/domain/connectaccount/connectAccountCreateArgs';
import { ConnectAccountRenderCreateArgs } from '../../src/core/domain/connectaccount/connectAccountRenderCreateArgs';
import {
    ConnectAccountInstitutionCreateArgs
} from '../../src/core/domain/connectaccount/connectAccountInstitutionCreateArgs';
import { ConnectAccountPublicAccessToken } from '../../src/core/domain/connectaccount/connectAccountPublicAccessToken';

describe.skip('Onboard Customer End2End', () => {
    const envApiRegistries = EnvApiScopeEnd2End.stage();
    const { waivrAppApiRegistry, merchantIdentifier, apiToken } = envApiRegistries;

    it.skip('onboardCustomer using a ByPass Bank connected via PLAID ', async () => {
        // Creates a new customer
        const customerService = waivrAppApiRegistry.customerService();
        const connectAccountService = waivrAppApiRegistry.connectAccountService();

        const customerCreateArgs = new CustomerCreateArgs(
            merchantIdentifier,
            new Email('johnsnow@northwall.com'),
            PersonName.of('John', 'Snow'),
            null,
            null
        );
        const customer = await customerService.create(customerCreateArgs, apiToken);
        expect(customer).not.toBeNull();

        // Connects the bank account selected from as a Bypass with a Customer bank account at Waivr
        const connectAccountCreateArgs = ConnectAccountCreateArgs.asBypass(
            merchantIdentifier,
            customer.identifier,
        );
        await connectAccountService.linkCustomerAccount(connectAccountCreateArgs, apiToken);
    });

    it.skip('onboardCustomer using a Bank connected via PLAID ', async () => {
        // Creates a new customer
        const customerService = waivrAppApiRegistry.customerService();
        const connectAccountService = waivrAppApiRegistry.connectAccountService();

        const customerCreateArgs = new CustomerCreateArgs(
            merchantIdentifier,
            new Email('johnsnow@northwall.com'),
            PersonName.of('John', 'Snow'),
            null,
            null
        );
        const customer = await customerService.create(customerCreateArgs, apiToken);
        expect(customer).not.toBeNull();

        // Request a new rendering url from PLAID
        const connectAccountRenderCreateArgs = new ConnectAccountRenderCreateArgs(
            merchantIdentifier
        );
        const connectAccountRender = await connectAccountService.createRenderLink(connectAccountRenderCreateArgs, apiToken);
        expect(connectAccountRender).not.toBeNull();

        // Connects the bank account selected from as a Bypass with a Customer bank account at Waivr
        const institution = new ConnectAccountInstitutionCreateArgs(
            '<Bank Account Id from Plaid Response>'
        );
        const publicToken = new ConnectAccountPublicAccessToken(
            '<Public Token provided by PLAID to exchange for Access Token>'
        );
        const connectAccountCreateArgs = new ConnectAccountCreateArgs(
            merchantIdentifier,
            customer.identifier,
            institution,
            publicToken
        );
        await connectAccountService.linkCustomerAccount(connectAccountCreateArgs, apiToken);
    });
});
