import { LoginToken, LoginTokenProfile } from '../../../src/core/domain/auth/loginToken';
import ContextSessionFixture from './contextSessionFixture';
import AccessTokenFixture from './accessTokenFixture';

const asDomainReal = (): LoginToken => {

  const profile:LoginTokenProfile = {
    role: 'ROLE_USER',
  };
  const profiles: LoginTokenProfile[] = [
    profile
  ];
  return new LoginToken(
    AccessTokenFixture.asDomain.asValid(),
    '97c73467-be09-40ce-9ee2-2ac96f48770f',
    profiles,
    ContextSessionFixture.asDomain.asFullSession()
  );

};

const asObjectReal = () => ({
  accessToken: AccessTokenFixture.asDomain.asValid().value,
  loginUuid: '97c73467-be09-40ce-9ee2-2ac96f48770f',
  profiles: [
    {
      role: 'ROLE_USER',
      organizationUuid: 'ffea02a0-da75-42ea-af16-2aa6734ad7f5'
    }
  ],
});

const asDomain = {
  asReal: asDomainReal,
};

const asObject = {
  asReal: asObjectReal,
};

const LoginTokenFixture = {
  asDomain,
  asObject,
};

export default LoginTokenFixture;
