import { Email } from '../common/contact/email';
import { PersonName } from '../person/personName';
import { PhoneNumber } from '../common/contact/phoneNumber';
import { NominalAddress } from '../common/address/nominalAddress';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import { MerchantIdentifier } from '../merchant/merchantIdentifier';

export class CustomerCreateArgs {
    merchantIdentifier: MerchantIdentifier;

    email: Email;

    personName: PersonName;

    phoneNumber: PhoneNumber | null;

    address: NominalAddress | null;

    constructor(
        merchantIdentifier: MerchantIdentifier,
        email: Email,
        personName: PersonName,
        phoneNumber: PhoneNumber | null,
        address: NominalAddress | null
    ) {
        this.merchantIdentifier = RequiredAttributes.requireNonNull(merchantIdentifier);
        this.email = RequiredAttributes.requireNonNull(email);
        this.personName = RequiredAttributes.requireNonNull(personName);
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}
