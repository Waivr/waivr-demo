import { NominalAddress } from '../common/address/nominalAddress';
import { TaxInformation } from './taxInformation';
import { BusinessOwnerCertification } from './businessOwnerCertification';
import { Email } from '../common/contact/email';
import { LegalName } from './legalName';
import RequiredAttributes from '../../paramutils/requiredAttributes';


export class BusinessIdentification {

    legalName: LegalName;

    email: Email;

    address: NominalAddress;

    taxInformation: TaxInformation;

    businessOwnerCertification: BusinessOwnerCertification;


    constructor(
        legalName: LegalName,
        email: Email,
        address: NominalAddress,
        taxInformation: TaxInformation,
        businessOwnerCertification: BusinessOwnerCertification
    ) {

        this.legalName = RequiredAttributes.requireNonNull(legalName);
        this.email = RequiredAttributes.requireNonNull(email);
        this.address = RequiredAttributes.requireNonNull(address);
        this.taxInformation = RequiredAttributes.requireNonNull(taxInformation);
        this.businessOwnerCertification = RequiredAttributes.requireNonNull(businessOwnerCertification);

    }

}
