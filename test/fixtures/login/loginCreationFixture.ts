import { Password } from '../../../src/core/domain/common/credential/password';
import { Email } from '../../../src/core/domain/common/contact/email';
import { LoginCreationRequest } from '../../../src/core/domain/login/loginCreationRequest';
import { BLoginCreateRequest } from '../../../src/core/services/login/entities/loginTypes';
import { PersonName } from '../../../src/core/domain/person/personName';

const asDomainJohnDoe = (): LoginCreationRequest => new LoginCreationRequest(
  PersonName.of('John', 'Doe',),
  new Email('abc@abc.com'),
  new Password('Password@1')
);

const asObjectJohnDoe = () => ({
  firstName: 'John',
  lastName: 'doe',
  email: 'john.doe@gmail.com',
  password: 'Password@1',
});

const asApiJohnDoe = (): BLoginCreateRequest => ({
  firstName: 'John',
  lastName: 'doe',
  email: 'john.doe@gmail.com',
  password: 'Password@1',
});

const asDomain = {
  asJohnDoe: asDomainJohnDoe,
};

const asObject = {
  asJohnDoe: asObjectJohnDoe,
};

const asApi = {
  asJohnDoe: asApiJohnDoe,
};

const LoginRequestFixture = {
  asDomain,
  asObject,
  asApi,
};

export default LoginRequestFixture;
