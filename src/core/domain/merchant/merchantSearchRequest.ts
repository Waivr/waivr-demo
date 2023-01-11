import { Pagination } from '../common/pagination';
import { MerchantIdentifier } from './merchantIdentifier';
import { LegalName } from './legalName';
import RequiredAttributes from '../../paramutils/requiredAttributes';

export class MerchantSearchRequest {

    merchantIdentifier: MerchantIdentifier | null;

    legalName: LegalName | null;

    pagination: Pagination;


    constructor(
        merchantIdentifier: MerchantIdentifier | null,
        legalName: LegalName | null,
        pagination: Pagination
    ) {

        this.merchantIdentifier = merchantIdentifier;
        this.legalName = legalName;
        this.pagination = RequiredAttributes.requireNonNull(pagination);

    }

    public static firstNElements(quantity: number): MerchantSearchRequest {

        const pagination = new Pagination(0, quantity);

        return new MerchantSearchRequest(
            null,
            null,
            pagination
        );

    }

}
