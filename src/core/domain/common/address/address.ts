import { NominalAddress } from './nominalAddress';
import RequiredAttributes from '../../../paramutils/requiredAttributes';
import { DateOptionalType } from '../genericTypes';

export class Address {

  uuid: string;

  createDate: Date;

  updateDate: Date;

  startDate: Date;

  endDate?: DateOptionalType;

  nominalAddress: NominalAddress;


  constructor(
    uuid: string,
    createDate: Date,
    updateDate: Date,
    startDate: Date,
    nominalAddress: NominalAddress,
    endDate?: DateOptionalType | null,
    ) {

    this.uuid = RequiredAttributes.requireNonBlank(uuid);
    this.createDate = RequiredAttributes.requireNonNull(createDate);
    this.updateDate = RequiredAttributes.requireNonNull(updateDate);
    this.startDate = RequiredAttributes.requireNonNull(startDate);
    this.endDate = RequiredAttributes.keepOrNullify(endDate);
    this.nominalAddress = RequiredAttributes.requireNonNull(nominalAddress);
  
  }

}
