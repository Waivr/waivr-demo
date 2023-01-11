import { InvalidException } from '../../exceptions/invalidException';
import { Email } from './email';

describe('email', () => {

  const doFail = (err: any): void => {

    // fail() does not work yet due to https://github.com/facebook/jest/issues/11698#issuecomment-922351139
    throw new Error(`Exception: ${err} is should not be thrown from mapper.`);

  };

  it('constructor_whenBlank_thenThrowException', async () => {

    try {

      // eslint-disable-next-line no-new
      new Email(' ');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual('String attributeName=undefined is required not to be blank.');

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringContainsInvalidCharacter_thenThrowException', async () => {

    try {

      // eslint-disable-next-line no-new
      new Email('abc&oa');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual('Provided value=abc&oa is not a valid email.');

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringContainsInvalidSpecialCharacter_thenThrowException', async () => {

    try {

      // eslint-disable-next-line no-new
      new Email('abc&oa@gmail.com');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual('Provided value=abc&oa is not a valid email.');

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringContainsValidCharacters_thenCreatesObject', async () => {

    const raw = 'john.doe@gmail.com';
    const attribute = new Email(raw);
    expect(attribute.value).toEqual(raw);

  });

});
