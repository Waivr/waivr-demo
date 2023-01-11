import { InvalidException } from '../domain/exceptions/invalidException';
import NumberUtils from './numberUtils';

describe('numberUtils', () => {

  const doFail = (err: any): void => {

    // fail() does not work yet due to https://github.com/facebook/jest/issues/11698#issuecomment-922351139
    throw new Error(`Exception: ${err} is should not be thrown from mapper.`);

  };

  it('isEquals_whenSourceNull_andTargetNull_thenReturnTrue', async () => {


    const evaluation = NumberUtils.isEquals(null as any, null as any);
    expect(evaluation).toEqual(true);

  });

  it('isEquals_whenSourceNotNull_andTargetNull_thenReturnFalse', async () => {

    const evaluation = NumberUtils.isEquals(10, undefined as any);
    expect(evaluation).toEqual(false);

  });

  it('isEquals_whenSourceNull_andTargetNotNull_thenReturnFalse', async () => {

    const evaluation = NumberUtils.isEquals(undefined as any, 10);
    expect(evaluation).toEqual(false);

  });

  it('isEquals_whenSourceSameTarget_thenReturnTrue', async () => {

    const evaluation = NumberUtils.isEquals(10, 10);
    expect(evaluation).toEqual(true);

  });

  it('isEquals_whenSourceDifferentTarget_thenReturnFalse', async () => {

    const evaluation = NumberUtils.isEquals(10, 11);
    expect(evaluation).toEqual(false);

  });

  it('isGreaterThan_whenSourceNull_andTargetNotNull_thenReturnFalse', async () => {

    const evaluation = NumberUtils.isGreaterThan(undefined as any, 10);
    expect(evaluation).toEqual(false);

  });

  it('isGreaterThan_whenSourceNull_andTargetNull_thenReturnFalse', async () => {

    const evaluation = NumberUtils.isGreaterThan(undefined as any, null as any);
    expect(evaluation).toEqual(false);

  });

  it('isGreaterThan_whenSourceSameTarget_thenReturnFalse', async () => {

    const evaluation = NumberUtils.isGreaterThan(10, 10);
    expect(evaluation).toEqual(false);

  });

  it('isGreaterThan_whenSourceGreaterTarget_thenReturnTrue', async () => {

    const evaluation = NumberUtils.isGreaterThan(11, 10);
    expect(evaluation).toEqual(true);

  });

  it('isEqualsOrGreaterThan_whenSourceLowerTarget_thenReturnFalse', async () => {

    const evaluation = NumberUtils.isEqualsOrGreaterThan(9, 10);
    expect(evaluation).toEqual(false);

  });


  it('isEqualsOrGreaterThan_whenSourceSameTarget_thenReturnTrue', async () => {

    const evaluation = NumberUtils.isEqualsOrGreaterThan(10, 10);
    expect(evaluation).toEqual(true);

  });

  it('isEqualsOrGreaterThan_whenSourceGreaterTarget_thenReturnTrue', async () => {

    const evaluation = NumberUtils.isEqualsOrGreaterThan(11, 10);
    expect(evaluation).toEqual(true);

  });

  it('isPositive_whenValueZero_thenReturnFalse', async () => {

    const evaluation = NumberUtils.isPositive(0);
    expect(evaluation).toEqual(false);

  });

  it('isPositive_whenValuePositive_thenReturnTrue', async () => {

    const evaluation = NumberUtils.isPositive(1);
    expect(evaluation).toEqual(true);

  });

  it('requireNonNegative_whenValueNegative_thenThrowException', async () => {

    try {

      NumberUtils.requireNonNegative(-1);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual('Number value=-1 is required not to be Negative.');

      } else {

        doFail(err);

      }

    }


  });

  it('requireNonNegative_whenValueZero_thenReturnsValue', async () => {

    const value = 0;
    const evaluation = NumberUtils.requireNonNegative(value);
    expect(evaluation).toEqual(value);

  });

  it('requirePositive_whenValueNegative_thenThrowException', async () => {

    try {

      NumberUtils.requirePositive(-1);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual('Number value=-1 is required to be Positive.');

      } else {

        doFail(err);

      }

    }


  });

  it('requirePositive_whenValueZero_thenThrowException', async () => {

    try {

      NumberUtils.requirePositive(0);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message)
          .toEqual('Number value=0 is required to be Positive.');

      } else {

        doFail(err);

      }

    }


  });

  it('requirePositive_whenValuePositive_thenReturnsValue', async () => {

    const value = 1;
    const evaluation = NumberUtils.requirePositive(value);
    expect(evaluation).toEqual(value);

  });

});
