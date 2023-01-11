import DateFixture from '../../../test/fixtures/common/dateFixture';
import DateUtils from './dateUtils';
import { RequiredException } from '../domain/exceptions/requiredException';

describe('DateUtils', () => {

  const doFail = (err: any): void => {

    // fail() does not work yet due to https://github.com/facebook/jest/issues/11698#issuecomment-922351139
    throw new Error(`Exception: ${err} is should not be thrown from mapper.`);

  };

  it('isAfterDate_whenSourceNull_andTargetNull_thenThrowException', async () => {

    try {

      DateUtils.isAfterDate(null as any, null as any);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof RequiredException) {

        expect(err.message)
          .toEqual('Attribute attributeName=source date is required not to be undefined nor null.');

      } else {

        doFail(err);

      }

    }

  });

  it('isAfterDate_whenSourceNotNull_andTargetNull_thenThrowException', async () => {

    try {

      DateUtils.isAfterDate(new Date(), null as any);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof RequiredException) {

        expect(err.message)
          .toEqual('Attribute attributeName=target date is required not to be undefined nor null.');

      } else {

        doFail(err);

      }

    }

  });

  it('isAfterDate_whenSourceNull_andTargetNotNull_thenThrowException', async () => {

    try {

      DateUtils.isAfterDate(undefined as any, new Date());

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof RequiredException) {

        expect(err.message)
          .toEqual('Attribute attributeName=source date is required not to be undefined nor null.');

      } else {

        doFail(err);

      }

    }

  });

  it('isAfterDate_whenSourceSameTarget_thenReturnFalse', async () => {

    const source = new Date();
    const evaluation = DateUtils.isAfterDate(source, source);
    expect(evaluation).toEqual(false);

  });

  it('isAfterDate_whenSourceBeforeTarget_thenReturnFalse', async () => {

    const source = DateFixture.inHours(-1);
    const target = DateFixture.inHours(1);
    const evaluation = DateUtils.isAfterDate(source, target);
    expect(evaluation).toEqual(false);

  });

  it('isAfterDate_whenSourceAfterTarget_thenReturnTrue', async () => {

    const source = DateFixture.inHours(1);
    const target = DateFixture.inHours(-1);
    const evaluation = DateUtils.isAfterDate(source, target);
    expect(evaluation).toEqual(true);

  });

  it('isFutureDate_whenDateNull_thenThrowException', async () => {

    try {

      DateUtils.isFutureDate(null as any);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof RequiredException) {

        expect(err.message)
          .toEqual('Attribute attributeName=source date is required not to be undefined nor null.');

      } else {

        doFail(err);

      }

    }

  });

  it('isFutureDate_whenDateBeforeNow_thenReturnFalse', async () => {

    const date = DateFixture.inHours(-1);
    const evaluation = DateUtils.isFutureDate(date);
    expect(evaluation).toEqual(false);

  });

  it('isFutureDate_whenDateAfterNow_thenReturnTrue', async () => {

    const date = DateFixture.inHours(1);
    const evaluation = DateUtils.isFutureDate(date);
    expect(evaluation).toEqual(true);

  });

  it('requireFutureDate_whenDateBeforeNow_thenThrowException', async () => {

    const date = DateFixture.inHours(-1);
    try {

      DateUtils.requireFutureDate(date);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof RequiredException) {

        expect(err.message)
          .toEqual(`Date=${date} is not after now().`);

      } else {

        doFail(err);

      }

    }

  });

  it('requireFutureDate_whenDateAfterNow_thenOk', async () => {

    const date = DateFixture.inHours(1);
    const evaluation = DateUtils.requireFutureDate(date);
    expect(evaluation).toEqual(date);

  });


});
