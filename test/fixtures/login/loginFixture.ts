import LoginProfileFixture from './loginProfileFixture';
import { Login } from '../../../src/core/domain/login/login';
import { PersonName } from '../../../src/core/domain/person/personName';
import { Email } from '../../../src/core/domain/common/contact/email';

const ROOT = new Login(
  '24c95c8c-2e1f-4cdb-9a74-31ed6022e845',
  new Date('2021-10-25T20:49:03.158Z'),
  new Date('2021-10-25T20:49:03.158Z'),
  PersonName.of('firstName', 'lastName'),
  new Email('john.doe@gmail.com'),
  null,
  true,
  null,
  [
    LoginProfileFixture.asDomain.asRoot()
  ]
);

const NON_ROOT = new Login(
  'b52999a2-0c6d-4d90-aa25-f646a71b1822',
  new Date('2021-10-26T20:49:03.158Z'),
  new Date('2021-10-26T20:49:03.158Z'),
  PersonName.of('firstName', 'lastName'),
  new Email('jane.doe@gmail.com'),
  null,
  true,
  null,
  [
    LoginProfileFixture.asDomain.asRoot(),
    LoginProfileFixture.asDomain.asNonRoot()
  ]
);

const asObjectUser = (): any => ({
  uuid: ROOT.uuid,
  createDate: ROOT.createDate,
  updateDate: ROOT.updateDate,
  firstName: ROOT.personName.firstName.value,
  lastName: ROOT.personName.lastName.value,
  email: ROOT.email.value,
  active: ROOT.active,
  profiles: [
    LoginProfileFixture.asObject.asRoot()
  ],
});

const asObjectAdmin = (): any => ({
  uuid: NON_ROOT.uuid,
  createDate: NON_ROOT.createDate,
  updateDate: NON_ROOT.updateDate,
  firstName: NON_ROOT.personName.firstName.value,
  lastName: NON_ROOT.personName.lastName.value,
  email: NON_ROOT.email.value,
  active: NON_ROOT.active,
  profiles: [
    LoginProfileFixture.asObject.asRoot(),
    LoginProfileFixture.asObject.asNonRoot(),
  ],
});

const asDomainUser = (): Login => ({
  ...ROOT
});

const asDomainAdmin = (): Login => ({
  ...NON_ROOT
});

const asDomain = {
  asUser: asDomainUser,
  asAdmin: asDomainAdmin,
};

const asObject = {
  asUser: asObjectUser,
  asAdmin: asObjectAdmin,
};

const LoginFixture = {
  asDomain,
  asObject,
};

export default LoginFixture;
