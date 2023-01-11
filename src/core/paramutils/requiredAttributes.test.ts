import RequiredAttributes from './requiredAttributes';
import { RequiredException } from '../domain/exceptions/requiredException';
import { InvalidException } from '../domain/exceptions/invalidException';

describe('RequiredAttributes', () => {

  const doFail = (err: any): void => {

    // fail() does not work yet due to https://github.com/facebook/jest/issues/11698#issuecomment-922351139
    throw new Error(`Exception: ${err} is should not be thrown from mapper.`);

  };

  it('isUndefinedOrNull_whenUndefinedParam_thenReturnsTrue', () => {

    const evaluation = RequiredAttributes.isUndefinedOrNull(undefined);
    expect(evaluation).toEqual(true);

  });

  it('isUndefinedOrNull_whenNullParam_thenReturnsTrue', () => {

    const evaluation = RequiredAttributes.isUndefinedOrNull(null);
    expect(evaluation).toEqual(true);

  });

  it('isUndefinedOrNull_whenPresentParam_thenReturnsFalse', () => {

    const evaluation = RequiredAttributes.isUndefinedOrNull(1);
    expect(evaluation).toEqual(false);

  });

  it('isEmptyArray_whenUndefinedParam_thenReturnsTrue', () => {

    const evaluation = RequiredAttributes.isEmptyArray(undefined);
    expect(evaluation).toEqual(true);

  });

  it('isEmptyArray_whenNullParam_thenReturnsTrue', () => {

    const evaluation = RequiredAttributes.isEmptyArray(null);
    expect(evaluation).toEqual(true);

  });

  it('isEmptyArray_whenArrayEmpty_thenReturnsTrue', () => {

    const evaluation = RequiredAttributes.isEmptyArray([]);
    expect(evaluation).toEqual(true);

  });

  it('isEmptyArray_whenArrayContainingElement_thenReturnsTrue', () => {

    const evaluation = RequiredAttributes.isEmptyArray([1]);
    expect(evaluation).toEqual(false);

  });

  it('keepOrNullify_whenUndefinedParam_thenReturnsNull', () => {

    const evaluation = RequiredAttributes.keepOrNullify(undefined);
    expect(evaluation).toEqual(null);

  });

  it('keepOrNullify_whenNullParam_thenReturnsNull', () => {

    const evaluation = RequiredAttributes.keepOrNullify(null);
    expect(evaluation).toEqual(null);

  });

  it('keepOrNullify_whenPresentParam_thenReturnsNull', () => {

    const evaluation = RequiredAttributes.keepOrNullify(2);
    expect(evaluation).toEqual(2);

  });

  it('requireNonNull_whenUndefinedParam_thenThrowException', () => {

    try {

      RequiredAttributes.requireNonNull(undefined);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof RequiredException) {

        expect(err.message).toEqual('Attribute attributeName=undefined is required not to be undefined nor null.');

      } else {

        doFail(err);

      }

    }

  });

  it('requireNonNull_whenNullParam_thenThrowException', () => {

    try {

      RequiredAttributes.requireNonNull(null, 'myParam');

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof RequiredException) {

        expect(err.message).toEqual('Attribute attributeName=myParam is required not to be undefined nor null.');

      } else {

        doFail(err);

      }

    }

  });

  it('requireNonNull_whenPresentParam_thenThrowException', () => {

    const date = new Date();
    const requiredReturn = RequiredAttributes.requireNonNull(date, 'myParam');
    expect(requiredReturn).toEqual(date);

  });

  it('requireNonNullOrElse_whenUndefinedParam_andFallBackUndefined_thenThrowException', () => {

    try {

      RequiredAttributes.requireNonNullOrElse(undefined, undefined, 'bli');

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof RequiredException) {

        expect(err.message).toEqual('Fallback attributeName=bli is required not to be undefined nor null.');

      } else {

        doFail(err);

      }

    }

  });

  it('requireNonNullOrElse_whenUndefinedParam_andFallbackNull_thenReturnNull', () => {

    const requiredReturn = RequiredAttributes.requireNonNullOrElse(undefined, null);
    expect(requiredReturn).toEqual(null);

  });

  it('requireNonNullOrElse_whenPresentParam_thenReturnParam', () => {

    const array = [1];
    const requiredReturn = RequiredAttributes.requireNonNullOrElse(array, null);
    expect(requiredReturn).toEqual(array);

  });

  it('requireNonEmpty_whenEmptyString_thenThrowException', () => {

    try {

      RequiredAttributes.requireNonEmpty('');

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message).toEqual('String attributeName=undefined is required not to be empty.');

      } else {

        doFail(err);

      }

    }

  });

  it('requireNonBlank_whenBlankString_thenThrowException', () => {

    try {

      RequiredAttributes.requireNonBlank('  ');

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message).toEqual('String attributeName=undefined is required not to be blank.');

      } else {

        doFail(err);

      }

    }

  });

  it('requireNonBlank_whenValueNotBlank_thenReturnSameValue', () => {

    const value = 'value';
    const checked = RequiredAttributes.requireNonBlank(value);
    expect(checked).toEqual(value);

  });

  it('requireNonBlankOrElse_whenValueBlank_andFallbackProvided_thenReturnFallback', () => {

    const fallback = 'fallback';
    const checked = RequiredAttributes.requireNonBlankOrElse('  ', fallback);
    expect(checked).toEqual(fallback);

  });

  it('requireNonBlankOrElse_whenValueBlank_andFallbackNull_thenReturnFallbackNull', () => {

    const checked = RequiredAttributes.requireNonBlankOrElse('  ', null);
    expect(checked).toBeNull();

  });

  it('requireNonBlankOrNonNullDefault_whenValueBlank_andFallbackProvided_thenReturnFallback', () => {

    const fallback = 'fallback';
    const checked = RequiredAttributes.requireNonBlankOrNonNullDefault('  ', fallback);
    expect(checked).toEqual(fallback);

  });

  it('requireNonBlank_whenNotBlank_thenReturnSameString', () => {

    const value = 'abc';
    const evaluation = RequiredAttributes.requireNonBlank(value);
    expect(evaluation).toEqual(value);

  });

  it('requireNonEmpty_whenBlankString_thenReturnsBlankString', () => {

    RequiredAttributes.requireNonEmpty('  ', 'foo');

  });

  it('requireNonEmpty_whenValidString_thenReturnsSameString', () => {

    const value = 'abc';
    const requiredReturn = RequiredAttributes.requireNonEmpty(value);
    expect(requiredReturn).toEqual(value);

  });

  it('requireNonEmptyArray_whenEmptyArray_thenThrowException', () => {

    try {

      RequiredAttributes.requireNonEmptyArray([]);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof InvalidException) {

        expect(err.message).toEqual('Array attributeName=undefined is required not to be empty.');

      } else {

        doFail(err);

      }

    }

  });

  it('requireNonEmptyArray_whenValidArray_thenReturnsSameArray', () => {

    const value = [null];
    const requiredReturn = RequiredAttributes.requireNonEmptyArray(value);
    expect(requiredReturn).toEqual(value);

  });

  it('requireNonNullElementsArray_whenArrayWithNull_thenThrowException', () => {

    try {

      RequiredAttributes.requireNonNullElementsArray([1, null]);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof RequiredException) {

        expect(err.message).toEqual('Attribute attributeName=undefined is required not to be undefined nor null.');

      } else {

        doFail(err);

      }

    }

  });

  it('requireNonNullElementsArray_whenEmptyArray_thenReturnsEmptyArray', () => {

    const value: any[] = [];
    const requiredReturn = RequiredAttributes.requireNonNullElementsArray(value);
    expect(requiredReturn).toEqual(value);

  });

  it('requireNonNullElementsArray_whenArrayWithValues_thenReturnsEmptyArray', () => {

    const value = [1, 'bli'];
    const requiredReturn = RequiredAttributes.requireNonNullElementsArray(value);
    expect(requiredReturn).toEqual(value);

  });

  it('requireNonEmptyNorNullElementsArray_whenArrayWithValues_thenReturnsEmptyArray', () => {

    const value = [1, 'bli'];
    const requiredReturn = RequiredAttributes.requireNonEmptyNorNullElementsArray(value);
    expect(requiredReturn).toEqual(value);

  });

  it('requireNonEmptyNorNullElementsArray_whenArrayWithNull_thenThrowException', () => {

    try {

      RequiredAttributes.requireNonEmptyNorNullElementsArray([1, null]);

      doFail('Should not get in here.');

    } catch (err) {

      if (err instanceof RequiredException) {

        expect(err.message).toEqual('Attribute attributeName=undefined is required not to be undefined nor null.');

      } else {

        doFail(err);

      }

    }

  });

});
