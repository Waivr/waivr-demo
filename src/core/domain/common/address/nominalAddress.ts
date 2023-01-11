import { Line1 } from './line1';
import { Line2 } from './line2';
import { City } from './city';
import { State } from './state';
import { Country } from './country';
import { ZipCode } from './zipCode';
import RequiredAttributes from '../../../paramutils/requiredAttributes';

export class NominalAddress {

  line1: Line1;

  line2?: Line2 | null;

  city: City;

  state: State;

  country: Country;

  zipCode: ZipCode;


  constructor(
    line1: Line1,
    city: City,
    state: State,
    country: Country,
    zipCode: ZipCode,
    line2?: Line2 | null,
    ) {

    this.line1 = RequiredAttributes.requireNonNull(line1);
    this.city = RequiredAttributes.requireNonNull(city);
    this.state = RequiredAttributes.requireNonNull(state);
    this.country = RequiredAttributes.requireNonNull(country);
    this.zipCode = RequiredAttributes.requireNonNull(zipCode);
    this.line2 = RequiredAttributes.keepOrNullify(line2);

  }
  
}
