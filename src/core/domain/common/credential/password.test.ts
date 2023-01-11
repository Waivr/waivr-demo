import { InvalidException } from '../../exceptions/invalidException';
import { Password } from './password';

describe('password', () => {

  const doFail = (err: any): void => {

    // fail() does not work yet due to https://github.com/facebook/jest/issues/11698#issuecomment-922351139
    throw new Error(`Exception: ${err} is should not be thrown from mapper.`);

  };

  it('constructor_whenBlank_thenThrowException', async () => {

    try {

      // eslint-disable-next-line no-new
      new Password(' ');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual('String attributeName=undefined is required not to be blank.');

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringMissingCapitalLetter_thenThrowException', async () => {

    const raw = 'password@1';

    try {

      // eslint-disable-next-line no-new
      new Password('password@1');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual(`Provided value=${raw} is not a valid password.`);

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringMissingNumber_thenThrowException', async () => {

    const raw = 'Password@P';

    try {

      // eslint-disable-next-line no-new
      new Password('Password@P');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual(`Provided value=${raw} is not a valid password.`);

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringMissingSpecialChar_thenThrowException', async () => {

    const raw = 'Passworda1';

    try {

      // eslint-disable-next-line no-new
      new Password('Passworda1');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual(`Provided value=${raw} is not a valid password.`);

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringMissingMinLengthOf8_thenThrowException', async () => {

    const raw = 'P@sswo1';

    try {

      // eslint-disable-next-line no-new
      new Password('P@sswo1');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual(`Provided value=${raw} is not a valid password.`);

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringExceededMaxLengthOf20_thenThrowException', async () => {

    const raw = 'Password@1asd213g%&sad';
    try {

      // eslint-disable-next-line no-new
      new Password(raw);

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual(`Provided value=${raw} is not a valid password.`);

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringWithValidConstraints_thenCreatesObject', async () => {

    const raw = 'Password@1';
    const attribute = new Password(raw);
    expect(attribute.value).toEqual(raw);

  });

});
