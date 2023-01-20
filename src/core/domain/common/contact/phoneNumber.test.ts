import { InvalidException } from '../../exceptions/invalidException';
import { PhoneNumber } from './phoneNumber';

describe('phonenumber', () => {
  const doFail = (err: any): void => {
    // fail() does not work yet due to https://github.com/facebook/jest/issues/11698#issuecomment-922351139
    throw new Error(`Exception: ${err} is should not be thrown from mapper.`);
  };

  it('constructor_whenBlank_thenThrowException', async () => {
    try {
      // eslint-disable-next-line no-new
      new PhoneNumber(' ');
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
      new PhoneNumber('abc&oa');
    } catch (err) {
      if (err instanceof InvalidException) {
        expect(err.message)
          .toEqual('Provided value=abc&oa is not a valid phone number.');
      } else {
        doFail(err);
      }
    }
  });

  it('constructor_whenStringContainsInvalidSpecialCharacter_thenThrowException', async () => {
    try {
      // eslint-disable-next-line no-new
      new PhoneNumber('444-222-3333');
    } catch (err) {
      if (err instanceof InvalidException) {
        expect(err.message)
          .toEqual('Provided value=444-222-3333 is not a valid phone number.');
      } else {
        doFail(err);
      }
    }
  });

  it('constructor_whenStringContainsNumbersOnly_thenCreatesObject', async () => {
    const raw = '4443332222';
    const attribute = new PhoneNumber(raw);
    expect(attribute.value).toEqual(raw);
  });
});
