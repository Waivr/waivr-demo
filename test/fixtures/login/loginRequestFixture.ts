import { LoginRequest } from '../../../src/core/domain/auth/authRequestTypes';
import { Email } from '../../../src/core/domain/common/contact/email';
import { Password } from '../../../src/core/domain/common/credential/password';
import { BAuthRequest } from '../../../src/core/services/auth/entities/authTypes';

const asDomainReal = (): LoginRequest => ({
    username: new Email('abc@abc.com'),
    password: new Password('Password@1')
  });

const asObjectReal = () => ({
  username: 'abc@abc.com',
  password: 'Password@1',
});

const asApiReal = (): BAuthRequest => ({
  username: 'abc@abc.com',
  password: 'Password@1',
});

const asDomain = {
  asReal: asDomainReal,
};

const asObject = {
  asReal: asObjectReal,
};

const asApi = {
  asReal: asApiReal,
};

const LoginRequestFixture = {
  asDomain,
  asObject,
  asApi,
};

export default LoginRequestFixture;
