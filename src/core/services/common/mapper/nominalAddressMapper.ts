import { InvalidException } from '../../../domain/exceptions/invalidException';
import { MappingException } from '../../../domain/exceptions/mappingException';
import { NominalAddress } from '../../../domain/common/address/nominalAddress';
import { Line1 } from '../../../domain/common/address/line1';
import { Line2 } from '../../../domain/common/address/line2';
import { City } from '../../../domain/common/address/city';
import { State } from '../../../domain/common/address/state';
import { Country } from '../../../domain/common/address/country';
import { ZipCode } from '../../../domain/common/address/zipCode';
import RequiredAttributes from '../../../paramutils/requiredAttributes';
import { BNominalAddress } from '../entities/commonTypes';

const mapNominalAddress = (nominalAddress: any): NominalAddress => {

  const line1 = new Line1(nominalAddress.line1);
  const line2 = (nominalAddress.line2 && new Line2(nominalAddress.line2)) || null;
  const city = new City(nominalAddress.city);
  const state = new State(nominalAddress.state);
  const country = new Country(nominalAddress.country);
  const zipCode = new ZipCode(nominalAddress.zipCode);
  return new NominalAddress(
    line1,
    city,
    state,
    country,
    zipCode,
    line2,
  );

};

const fromObject = (nominalAddress: any): NominalAddress => {

  try {

    return mapNominalAddress(nominalAddress);

  } catch (err) {

    if (err instanceof InvalidException) {

      throw err;

    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping response.`, stack);

  }

};

const mapRequest = (nominalAddress: NominalAddress): BNominalAddress => {

  const line2 = (nominalAddress.line2 && nominalAddress.line2.value) || null;
  return {
    line1: RequiredAttributes.requireNonNull(nominalAddress.line1.value),
    line2,
    city: RequiredAttributes.requireNonNull(nominalAddress.city.value),
    state: RequiredAttributes.requireNonNull(nominalAddress.state.value),
    country: RequiredAttributes.requireNonNull(nominalAddress.country.value),
    zipCode: RequiredAttributes.requireNonNull(nominalAddress.zipCode.value),
  };

};

const toApiRequest = (nominalAddress: NominalAddress): BNominalAddress => {

  try {

    return mapRequest(nominalAddress);

  } catch (err) {

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping response.`, stack);

  }

};

const NominalAddressMapper = {
  fromObject,

  toApiRequest
};

export default NominalAddressMapper;
