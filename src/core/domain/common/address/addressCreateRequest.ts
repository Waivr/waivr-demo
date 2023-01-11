import { NominalAddress } from './nominalAddress';
import RequiredAttributes from '../../../paramutils/requiredAttributes';


export class AddressCreateRequest {

  startDate: Date;

  nominalAddress: NominalAddress;


  constructor(
    startDate: Date,
    nominalAddress: NominalAddress,
    ) {

    this.startDate = RequiredAttributes.requireNonNull(startDate);
    this.nominalAddress = RequiredAttributes.requireNonNull(nominalAddress);
  
  }
  
}
