import { InvalidException } from '../../exceptions/invalidException';
import { ZipCode } from './zipCode';

describe('zipCode', () => {

  const doFail = (err: any): void => {

    // fail() does not work yet due to https://github.com/facebook/jest/issues/11698#issuecomment-922351139
    throw new Error(`Exception: ${err} is should not be thrown from mapper.`);

  };

  it('constructor_whenBlank_thenThrowException', async () => {

    try {

      // eslint-disable-next-line no-new
      new ZipCode(' ');

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
      new ZipCode('abc&oa');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual('Provided value=abc&oa is not a valid zipcode.');

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringContainsValidCharacters_andOnlyNumbers_thenCreatesObject', async () => {

    const raw = '001234';
    const attribute = new ZipCode(raw);
    expect(attribute.value).toEqual(raw);

  });

  it('constructor_whenStringContainsValidCharacters_andOnlyChars_thenCreatesObject', async () => {

    const raw = 'asdABC';
    const attribute = new ZipCode(raw);
    expect(attribute.value).toEqual(raw);

  });

  it('constructor_whenStringContainsValidCharacters_andAlphaNumeric_thenCreatesObject', async () => {

    const raw = 'H4E-2A8';
    const attribute = new ZipCode(raw);
    expect(attribute.value).toEqual(raw);

  });

});
