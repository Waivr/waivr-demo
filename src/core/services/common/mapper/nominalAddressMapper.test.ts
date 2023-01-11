import { MappingException } from '../../../domain/exceptions/mappingException';
import NominalAddressMapper from './nominalAddressMapper';
import NominalAddressFixture from '../../../../../test/fixtures/common/nominalAddressFixture';


describe('nominalAddressMapper', () => {

  const doFail = (err: any): void => {

    // fail() does not work yet due to https://github.com/facebook/jest/issues/11698#issuecomment-922351139
    throw new Error(`Exception: ${err} is should not be thrown from mapper.`);

  };

  it('fromObject_whenInvalidObject_thenThrowException', async () => {

    try {

      NominalAddressMapper.fromObject({});

      doFail('Should never be able to convert');

    } catch (err) {

      if (err instanceof MappingException) {

        expect(err.message)
          .toEqual('Unknown err=Error: Attribute attributeName=undefined is required not to be undefined nor null. has happened while mapping response.');

      } else {

        doFail(err);

      }

    }

  });

  it('fromObject_whenValidObject_thenConvertsToDomain', async () => {

    const data = NominalAddressFixture.asApi.asPmInvestisseurImmobilier();
    const domain = NominalAddressMapper.fromObject(data);
    const expected = NominalAddressFixture.asDomain.asPmInvestisseurImmobilier();
    expect(domain.line1).toEqual(expected.line1);
    expect(domain.line2).toEqual(expected.line2);
    expect(domain.city).toEqual(expected.city);
    expect(domain.state).toEqual(expected.state);
    expect(domain.country).toEqual(expected.country);
    expect(domain.zipCode).toEqual(expected.zipCode);

  });

  it('toApiRequest_whenInvalidDomain_thenThrowException', async () => {

    try {

      const nominalAddress = NominalAddressFixture.asDomain.asNewNominal();
      nominalAddress.city = NominalAddressFixture.asApi.asNewNominal().city;
      NominalAddressMapper.toApiRequest(nominalAddress);

      doFail('Should never be able to convert');

    } catch (err) {

      if (err instanceof MappingException) {

        expect(err.message)
          .toEqual('Unknown err=Error: Attribute attributeName=undefined is required not to be undefined nor null. has happened while mapping response.');

      } else {

        doFail(err);

      }

    }

  });

  it('toApiRequest_whenValidDomain_thenConvertsToApi', async () => {

    const domain = NominalAddressFixture.asDomain.asPmInvestisseurImmobilier();
    const api = NominalAddressMapper.toApiRequest(domain);
    const expected = NominalAddressFixture.asApi.asPmInvestisseurImmobilier();
    expect(api.line1).toEqual(expected.line1);
    expect(api.line2).toEqual(expected.line2);
    expect(api.city).toEqual(expected.city);
    expect(api.state).toEqual(expected.state);
    expect(api.country).toEqual(expected.country);
    expect(api.zipCode).toEqual(expected.zipCode);

  });

});
