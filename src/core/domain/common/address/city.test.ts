import { InvalidException } from '../../exceptions/invalidException';
import { City } from './city';

describe('city', () => {

  const doFail = (err: any): void => {

    // fail() does not work yet due to https://github.com/facebook/jest/issues/11698#issuecomment-922351139
    throw new Error(`Exception: ${err} is should not be thrown from mapper.`);

  };

  it('constructor_whenBlank_thenThrowException', async () => {

    try {

      // eslint-disable-next-line no-new
      new City(' ');

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
      new City('abc&oa');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual('Provided value=abc&oa is not a valid city.');

      } else {

        doFail(err);

      }

    }

  });

  it('constructor_whenStringContainsValidCharacters_thenCreatesObject', async () => {

    const raw = 'Bakker-L St.';
    const attribute = new City(raw);
    expect(attribute.value).toEqual(raw);

  });

});
