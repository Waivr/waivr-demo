import { MappingException } from '../../../domain/exceptions/mappingException';
import RequiredAttributes from '../../../paramutils/requiredAttributes';
import { Email } from '../../../domain/common/contact/email';
import { PersonName } from '../../../domain/person/personName';
import { Merchant } from '../../../domain/merchant/merchant';
import { BusinessIdentification } from '../../../domain/merchant/businessIdentification';
import { LegalName } from '../../../domain/merchant/legalName';
import NominalAddressMapper from '../../common/mapper/nominalAddressMapper';
import { TaxInformation } from '../../../domain/merchant/taxInformation';
import { BusinessOwnerCertification } from '../../../domain/merchant/businessOwnerCertification';
import { BankAccount } from '../../../domain/bankaccount/bankAccount';
import { BankAccountType } from '../../../domain/bankaccount/bankAccountType';
import { Page } from '../../../domain/common/pageable/page';
import pageMapper from '../../common/mapper/pageMapper';
import { MerchantSearchRequest } from '../../../domain/merchant/merchantSearchRequest';
import { BMerchantSearchRequest } from '../entities/entityTypes';
import { MerchantIdentifier } from '../../../domain/merchant/merchantIdentifier';

const mapBankAccount = (bankAccount: any): BankAccount => {

    if (RequiredAttributes.isUndefinedOrNull(bankAccount)) {

        throw new MappingException('BankAccount response data cannot be converted as it is undefined or null.');

    }

    const accountType:BankAccountType = BankAccountType[
        bankAccount.accountType as keyof typeof BankAccountType
        ];

    return new BankAccount(
      bankAccount.institutionName,
      bankAccount.accountNumber,
      bankAccount.routingNumber,
        accountType
    );

};

const mapBankAccounts = (bankAccounts: any): BankAccount[] => {

    if (RequiredAttributes.isUndefinedOrNull(bankAccounts)) {

        throw new MappingException('BankAccounts response data cannot be converted as it is undefined nor null.');

    }

    return bankAccounts
        .map((bankAccount: any) => mapBankAccount(bankAccount));

};

const mapBusinessOwnerCertification = (businessOwnerCertification: any): BusinessOwnerCertification => {

    if (RequiredAttributes.isUndefinedOrNull(businessOwnerCertification)) {

        throw new MappingException('BusinessOwnerCertification response data cannot be converted as it is undefined or null.');

    }

    const address = NominalAddressMapper.fromObject(businessOwnerCertification.address);

    return new BusinessOwnerCertification(
        PersonName.of(businessOwnerCertification.firstName, businessOwnerCertification.lastName),
        address,
        businessOwnerCertification.ssn,
        new Date(RequiredAttributes.requireNonNull(businessOwnerCertification.dateOfBirth)),
    );

};

const mapTaxInformation = (taxInformation: any): TaxInformation => {

    if (RequiredAttributes.isUndefinedOrNull(taxInformation)) {

        throw new MappingException('TaxInformation response data cannot be converted as it is undefined or null.');

    }

    return new TaxInformation(
        taxInformation.tin,
        taxInformation.ein
    );

};

const mapBusinessIdentification = (identification: any): BusinessIdentification => {

    if (RequiredAttributes.isUndefinedOrNull(identification)) {

        throw new MappingException('BusinessIdentification response data cannot be converted as it is undefined or null.');

    }

    const legalName = new LegalName(identification.legalName);
    const email = new Email(identification.email);
    const address = NominalAddressMapper.fromObject(identification.address);
    const taxInformation = mapTaxInformation(identification.taxInformation);
    const ownerCertification = mapBusinessOwnerCertification(identification.ownerCertification);

    return new BusinessIdentification(
        legalName,
        email,
        address,
        taxInformation,
        ownerCertification
    );

};

const mapMerchant = (merchant: any): Merchant => {

    if (RequiredAttributes.isUndefinedOrNull(merchant)) {

        throw new MappingException('Merchant response data cannot be converted as it is undefined or null.');

    }

    const identification = mapBusinessIdentification(merchant.identification);
    const bankInstitutions = mapBankAccounts(merchant.bankInstitutions);

    return new Merchant(
        new MerchantIdentifier(merchant.uid),
      new Date(RequiredAttributes.requireNonNull(merchant.createDate)),
      new Date(RequiredAttributes.requireNonNull(merchant.updateDate)),
        identification,
        bankInstitutions
    );

};


const fromObject = (merchant: any): Merchant => {

    try {

        return mapMerchant(merchant);

    } catch (err) {

        if (err instanceof MappingException) {

            throw err;

        }

        const stack = err instanceof Error ? err.stack : undefined;
        throw new MappingException(`Unknown err=${err} has happened while mapping response.`, stack);

    }

};

const fromArray = (dealAccesses: any): Merchant[] => {

    if (RequiredAttributes.isUndefinedOrNull(dealAccesses)) {

        throw new MappingException('Merchant response data cannot be converted as it is undefined nor null.');

    }

    return dealAccesses
        .map((dealAccess: any) => fromObject(dealAccess));

};

const fromPage = (page: any): Page<Merchant> => {

    if (RequiredAttributes.isUndefinedOrNull(page)) {

        throw new MappingException('Paged Merchant response data cannot be converted as it is undefined nor null.');

    }

    const array = fromArray(page.content);
    return pageMapper(page, array);

};


const mapSearchRequest = (request: MerchantSearchRequest): BMerchantSearchRequest => ({
    merchantUid: request.merchantIdentifier?.value || null,
    legalName: request.legalName?.value || null,
    pagination: {
        offset: request.pagination.offset,
        limit: request.pagination.limit,
    }
});

const toApiSearchRequest = (request: MerchantSearchRequest): BMerchantSearchRequest => {

    try {

        return mapSearchRequest(request);

    } catch (err) {

        if (err instanceof MappingException) {

            throw err;

        }

        const stack = err instanceof Error ? err.stack : undefined;
        throw new MappingException(`Unknown err=${err} has happened while mapping MerchantSearchRequest.`, stack);

    }

};


const MerchantMapper = {
    fromObject,
    fromArray,
    fromPage,

    toApiSearchRequest,
};

export default MerchantMapper;
