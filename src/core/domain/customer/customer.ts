import { IdObject } from '../common/idObject';
import { CustomerIdentifier } from './customerIdentifier';
import { Email } from '../common/contact/email';
import { PersonName } from '../person/personName';
import { PhoneNumber } from '../common/contact/phoneNumber';
import { NominalAddress } from '../common/address/nominalAddress';
import RequiredAttributes from '../../paramutils/requiredAttributes';

export class Customer extends IdObject<CustomerIdentifier> {
    email: Email;

    personName: PersonName;

    phoneNumber: PhoneNumber | null;

    address: NominalAddress | null;

    constructor(
        identifier: CustomerIdentifier,
        createDate: Date,
        updateDate: Date,
        rawJson: string,
        email: Email,
        personName: PersonName,
        phoneNumber: PhoneNumber | null,
        address: NominalAddress | null
    ) {
        super(identifier, createDate, updateDate, rawJson);
        this.email = RequiredAttributes.requireNonNull(email);
        this.personName = RequiredAttributes.requireNonNull(personName);
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}
