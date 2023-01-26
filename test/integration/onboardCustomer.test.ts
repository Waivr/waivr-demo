import * as uuid from 'uuid';
import EnvApiScopeEnd2End from './environment/envApiScope';
import { CustomerCreateArgs } from '../../src/core/domain/customer/customerCreateArgs';
import { Email } from '../../src/core/domain/common/contact/email';
import { PersonName } from '../../src/core/domain/person/personName';
import { ConnectAccountCreateArgs } from '../../src/core/domain/connectaccount/connectAccountCreateArgs';
import { ConnectAccountRenderCreateArgs } from '../../src/core/domain/connectaccount/connectAccountRenderCreateArgs';
import {
    ConnectAccountInstitutionCreateArgs
} from '../../src/core/domain/connectaccount/connectAccountInstitutionCreateArgs';
import { ConnectAccountPublicAccessToken } from '../../src/core/domain/connectaccount/connectAccountPublicAccessToken';
import { PaymentInstructionCreateArgs } from '../../src/core/domain/paymentinstruction/paymentInstructionCreateArgs';
import {
    PaymentInstructionExternalReferenceIdentifier
} from '../../src/core/domain/paymentinstruction/paymentInstructionExternalReferenceIdentifier';
import { PositiveAmount } from '../../src/core/domain/common/numbers/positiveAmount';
import { PaymentFrequency } from '../../src/core/domain/paymentinstruction/paymentFrequency';
import { PaymentFrequencyCycle } from '../../src/core/domain/paymentinstruction/paymentFrequencyCycle';
import { FutureDate } from '../../src/core/domain/common/date/FutureDate';
import DateUtils, { TimeUnit } from '../../src/core/paramutils/dateUtils';
import { PaymentCreateArgs } from '../../src/core/domain/payment/paymentCreateArgs';
import { PaymentMethodType } from '../../src/core/domain/payment/paymentMethodType';

describe.skip('Onboard Customer End2End', () => {
    const envApiRegistries = EnvApiScopeEnd2End.stage();
    const { waivrAppApiRegistry, merchantIdentifier, apiToken } = envApiRegistries;

    it.skip('onboardCustomer using a ByPass Bank connected via PLAID ', async () => {
        const customerService = waivrAppApiRegistry.customerService();
        const connectAccountService = waivrAppApiRegistry.connectAccountService();
        const paymentInstructionService = waivrAppApiRegistry.paymentInstructionService();
        const paymentService = waivrAppApiRegistry.paymentService();


        // Creates a new customer
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


        // Creates a payment instruction to make a recurring subscription
        const paymentInstructionCreateArgs = new PaymentInstructionCreateArgs(
            new PaymentInstructionExternalReferenceIdentifier(uuid.v4()),
            customer.identifier,
            merchantIdentifier,
            new PositiveAmount(10.90),
            new PaymentFrequency(PaymentFrequencyCycle.WEEKLY, new PositiveAmount(2)),
            FutureDate.basedOfNow(DateUtils.addTimeUnit(new Date(), TimeUnit.MINUTE, 60))
        );
        const paymentInstruction = await paymentInstructionService.create(paymentInstructionCreateArgs, apiToken);
        expect(paymentInstruction).not.toBeNull();


        // Gets fresh summary for payment instruction to be paid
        const paymentInstructionSummary = await paymentInstructionService.findSummary(paymentInstruction.identifier, apiToken);
        expect(paymentInstructionSummary).not.toBeNull();


        // Initiates a payment origination
        const paymentCreateArgs = new PaymentCreateArgs(
            paymentInstruction.identifier,
            PaymentMethodType.ACH
        );
        const payment = await paymentService.create(paymentCreateArgs, apiToken);
        expect(payment).not.toBeNull();
    });

    it.skip('onboardCustomer using a Bank connected via PLAID ', async () => {
        const customerService = waivrAppApiRegistry.customerService();
        const connectAccountService = waivrAppApiRegistry.connectAccountService();
        const paymentInstructionService = waivrAppApiRegistry.paymentInstructionService();
        const paymentService = waivrAppApiRegistry.paymentService();


        // Creates a new customer
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


        // Creates a payment instruction to make a recurring subscription
        const paymentInstructionCreateArgs = new PaymentInstructionCreateArgs(
            new PaymentInstructionExternalReferenceIdentifier(uuid.v4()),
            customer.identifier,
            merchantIdentifier,
            new PositiveAmount(10.90),
            new PaymentFrequency(PaymentFrequencyCycle.WEEKLY, new PositiveAmount(2)),
            FutureDate.basedOfNow(DateUtils.addTimeUnit(new Date(), TimeUnit.MINUTE, 60))
        );
        const paymentInstruction = await paymentInstructionService.create(paymentInstructionCreateArgs, apiToken);
        expect(paymentInstruction).not.toBeNull();


        // Gets fresh summary for payment instruction to be paid
        const paymentInstructionSummary = await paymentInstructionService.findSummary(paymentInstruction.identifier, apiToken);
        expect(paymentInstructionSummary).not.toBeNull();


        // Initiates a payment origination
        const paymentCreateArgs = new PaymentCreateArgs(
            paymentInstruction.identifier,
            PaymentMethodType.ACH
        );
        const payment = await paymentService.create(paymentCreateArgs, apiToken);
        expect(payment).not.toBeNull();
    });
});
