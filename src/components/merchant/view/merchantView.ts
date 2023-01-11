import mapAddressView, { AddressView } from '../../common/view/addressView';
import { BusinessOwnerCertification } from '../../../core/domain/merchant/businessOwnerCertification';
import { Merchant } from '../../../core/domain/merchant/merchant';

export interface OwnerCertificationView {
    firstName: string;
    lastName: string;
    address: AddressView;
    maskedSsn: string;
    dateOfBirth: Date;
}

export interface MerchantView {
    uuid: string,
    createDate: Date,
    legalName: string;
    email: string;
    address: AddressView;
    tin: string | null;
    ein: string | null;

    ownerCertification: OwnerCertificationView;
}

const mapOwnerCertificationView = (ownerCertification: BusinessOwnerCertification): OwnerCertificationView => {

    const address = mapAddressView(ownerCertification.address);
    return {
        firstName: ownerCertification.personName.firstName.value,
        lastName: ownerCertification.personName.lastName.value,
        address,
        maskedSsn: ownerCertification.ssn,
        dateOfBirth: ownerCertification.dateOfBirth,
    };

};

const mapMerchantView = (merchant: Merchant): MerchantView => {

    const address = mapAddressView(merchant.identification.address);
    const ownerCertification = mapOwnerCertificationView(merchant.identification.businessOwnerCertification);
    return {
        uuid: merchant.identifier.value,
        createDate: merchant.createDate,
        legalName: merchant.identification.legalName.value,
        email: merchant.identification.email.value,
        address,
        tin: merchant.identification.taxInformation.tin,
        ein: merchant.identification.taxInformation.ein,
        ownerCertification
    };

};

const mapMerchantViews = (merchants: Merchant[]): MerchantView[] => merchants
    .map((merchant: Merchant) => mapMerchantView(merchant));

export {
    mapMerchantView,
    mapMerchantViews,
};
