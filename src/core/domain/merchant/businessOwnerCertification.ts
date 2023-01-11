import { PersonName } from '../person/personName';
import { NominalAddress } from '../common/address/nominalAddress';
import RequiredAttributes from '../../paramutils/requiredAttributes';

export class BusinessOwnerCertification {

    personName: PersonName;

    address: NominalAddress;

    ssn: string;

    dateOfBirth: Date;


    constructor(
        personName: PersonName,
        address: NominalAddress,
        ssn: string,
        dateOfBirth: Date
    ) {

        this.personName = RequiredAttributes.requireNonNull(personName);
        this.address = RequiredAttributes.requireNonNull(address);
        this.ssn = RequiredAttributes.requireNonBlank(ssn);
        this.dateOfBirth = RequiredAttributes.requireNonNull(dateOfBirth);
        
    }

}
