import { ApiAccessToken } from '../../../src/core/domain/auth/apiAccessToken';

const asObjectValid = (): any => ({
  accessToken: 'valid-token',
  dryRun: false,
});

const asDomainValid = (): ApiAccessToken => {

  const generatedDate = new Date();
  const validUntil = new Date();
  validUntil.setHours(generatedDate.getHours() + 1);

  return new ApiAccessToken(
    'valid-token',
    generatedDate,
    validUntil
  );

};

const asDomainShouldRefresh = (): ApiAccessToken => {

  const generatedDate = new Date();
  const validUntil = new Date();
  validUntil.setMinutes(generatedDate.getMinutes() + 2);

  return new ApiAccessToken(
    'should-refresh-token',
    generatedDate,
    validUntil
  );

};

const asDomainInvalid = (): ApiAccessToken => {

  const generatedDate = new Date();
  const validUntil = new Date();
  validUntil.setMinutes(generatedDate.getMinutes() - 1);

  return new ApiAccessToken(
    'valid-token',
    generatedDate,
    validUntil
  );

};


const asDomain = {
  asValid: asDomainValid,
  asInvalid: asDomainInvalid,
  asShouldRefresh: asDomainShouldRefresh,
};

const asObject = {
  asValid: asObjectValid,
};

const AccessTokenFixture = {
  asDomain,
  asObject,
};

export default AccessTokenFixture;
