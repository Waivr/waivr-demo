import { NominalAddress } from '../../../src/core/domain/common/address/nominalAddress';
import { Line1 } from '../../../src/core/domain/common/address/line1';
import { Line2 } from '../../../src/core/domain/common/address/line2';
import { City } from '../../../src/core/domain/common/address/city';
import { State } from '../../../src/core/domain/common/address/state';
import { Country } from '../../../src/core/domain/common/address/country';
import { ZipCode } from '../../../src/core/domain/common/address/zipCode';

const asApiNewNominal = (): any => ({
  line1: '82 St-Jerome',
  line2: null,
  city: 'Montreal',
  state: 'Quebec',
  country: 'Canada',
  zipCode: 'H5B0S5',
});

const asObjectNewNominal = (): any => ({
  line1: {
    value: '82 St-Jerome'
  },
  line2: null,
  city: {
    value: 'Montreal'
  },
  state: {
    value: 'Quebec'
  },
  country: {
    value: 'Canada'
  },
  zipCode: {
    value: 'H5B0S5'
  },
});

const asDomainNewNominal = (): NominalAddress => new NominalAddress(
    new Line1('82 St-Jerome'),
    new City('Montreal'),
    new State('Quebec'),
    new Country('Canada'),
    new ZipCode('H5B0S5'),
  );

const asApiPmInvestisseurImmobilier = (): any => ({
  line1: '2139 Sherbrooke',
  line2: '#32',
  city: 'Montreal',
  state: 'Quebec',
  country: 'Canada',
  zipCode: 'N6TP9A',
});

const asObjectPmInvestisseurImmobilier = (): any => ({
  line1: {
    value: '2139 Sherbrooke'
  },
  line2: {
    value: '#32'
  },
  city: {
    value: 'Montreal'
  },
  state: {
    value: 'Quebec'
  },
  country: {
    value: 'Canada'
  },
  zipCode: {
    value: 'N6TP9A'
  },
});

const asDomainPmInvestisseurImmobilier = (): NominalAddress => new NominalAddress(
  new Line1('2139 Sherbrooke'),
  new City('Montreal'),
  new State('Quebec'),
  new Country('Canada'),
  new ZipCode('N6TP9A'),
  new Line2('#32'),
);


const asDomain = {
  asPmInvestisseurImmobilier: asDomainPmInvestisseurImmobilier,
  asNewNominal: asDomainNewNominal,
};

const asObject = {
  asPmInvestisseurImmobilier: asObjectPmInvestisseurImmobilier,
  asNewNominal: asObjectNewNominal,
};

const asApi = {
  asPmInvestisseurImmobilier: asApiPmInvestisseurImmobilier,
  asNewNominal: asApiNewNominal,
};

const NominalAddressFixture = {
  asDomain,
  asObject,
  asApi,
};

export default NominalAddressFixture;
