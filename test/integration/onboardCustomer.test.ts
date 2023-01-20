import EnvApiScopeEnd2End from './environment/envApiScope';
import { CustomerCreateArgs } from '../../src/core/domain/customer/customerCreateArgs';
import { Email } from '../../src/core/domain/common/contact/email';
import { PersonName } from '../../src/core/domain/person/personName';

describe.skip('Onboard Customer End2End', () => {
    const envApiRegistries = EnvApiScopeEnd2End.stage();
    const { waivrAppApiRegistry, merchantIdentifier, apiToken } = envApiRegistries;

    it.skip('onboardCustomer ', async () => {
        const customerService = waivrAppApiRegistry.customerService();
        const customerCreateArgs = new CustomerCreateArgs(
            merchantIdentifier,
            new Email('johnsnow@northwall.com'),
            PersonName.of('John', 'Snow'),
            null,
            null
        );
        const loginCreationScope = await customerService.create(customerCreateArgs, apiToken);
        expect(loginCreationScope).not.toBeNull();
    });
});
