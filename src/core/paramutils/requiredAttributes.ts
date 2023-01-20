import { RequiredException } from '../domain/exceptions/requiredException';
import { InvalidException } from '../domain/exceptions/invalidException';
import { StringOptionalType } from '../domain/common/genericTypes';

const isUndefinedOrNull = <T, >(value: T): boolean => (value === undefined || value === null);

const isEmptyArray = <T, >(value: T[] | undefined | null): boolean => (value === undefined || value === null || value.length === 0);

const isEmptyString = (value: string): boolean => (value === undefined || value === null || value === '');

const isBlankString = (value: string): boolean => isEmptyString(value) || value.trim() === '';

const keepOrNullify = <T, >(value: T): T | null => {
    if (isUndefinedOrNull(value)) {
        return null;
    }

    return value;
};

const keepOrEmptyArray = <T, >(value: T[] | null | undefined): NonNullable<T[]> => {
    if (isUndefinedOrNull(value)) {
        return [];
    }

    return value as NonNullable<T[]>;
};

const requireNonNull = <T, >(value: T, attributeName?: string): NonNullable<T> => {
    if (isUndefinedOrNull(value)) {
        throw new RequiredException(`Attribute attributeName=${attributeName} is required not to be undefined nor null.`);
    }

    return value as NonNullable<T>;
};

const requireNonNullOrElse = <T, >(value: T, fallback: T, attributeName?: string): NonNullable<T> => {
    if (fallback === undefined) {
        throw new RequiredException(`Fallback attributeName=${attributeName} is required not to be undefined nor null.`);
    }

    if (isUndefinedOrNull(value)) {
        return fallback as NonNullable<T>;
    }

    return value as NonNullable<T>;
};

const requireNonEmpty = (value: string, attributeName?: string): NonNullable<string> => {
    requireNonNull(value, attributeName);
    if (isEmptyString(value)) {
        throw new InvalidException(`String attributeName=${attributeName} is required not to be empty.`);
    }

    return value as NonNullable<string>;
};

const requireNonBlank = (value: string | undefined | null, attributeName?: string): NonNullable<string> => {
    const newValue:string = requireNonNull(value, attributeName);
    if (isBlankString(newValue)) {
        throw new InvalidException(`String attributeName=${attributeName} is required not to be blank.`);
    }

    return newValue as NonNullable<string>;
};

const requireNonBlankOrElse = (value: string | undefined | null, fallback: StringOptionalType): StringOptionalType => {
    try {
        return requireNonBlank(value);
    } catch (error) {
        return fallback;
    }
};

const requireNonBlankOrNonNullDefault = (value: string | undefined | null, fallback: string): NonNullable<string> => {
    try {
        return requireNonBlank(value);
    } catch (error) {
        return fallback;
    }
};


const requireNonEmptyArray = <T, >(value: T[], attributeName?: string): NonNullable<T>[] => {
    requireNonNull(value, attributeName);
    if (value.length === 0) {
        throw new InvalidException(`Array attributeName=${attributeName} is required not to be empty.`);
    }

    return value as NonNullable<T>[];
};

const requireNonNullElementsArray = <T, >(value: T[], attributeName?: string): NonNullable<T>[] => {
    requireNonNull(value, attributeName);

    value.forEach((element) => requireNonNull(element, attributeName));

    return value as NonNullable<T>[];
};

const requireNonEmptyNorNullElementsArray = <T, >(value: T[], attributeName?: string): NonNullable<T>[] => {
    const nonEmpty = requireNonEmptyArray(value, attributeName);
    return requireNonNullElementsArray(nonEmpty, attributeName);
};

const requireArrayHavingAtLeastOneNonNull = <T, >(values: T[], attributeName?: string): void => {
    // eslint-disable-next-line no-restricted-syntax
    for (const element of values) {
        if (isUndefinedOrNull(element)) {
            return;
        }
    }

    throw new InvalidException(`Array attributeName=${attributeName} is required have ate least one non-null element.`);
};

const RequiredAttributes = {
    isUndefinedOrNull,
    isEmptyArray,
    isBlankString,

    keepOrNullify,
    keepOrEmptyArray,
    requireNonNull,
    requireNonNullOrElse,

    requireNonEmpty,
    requireNonBlank,
    requireNonBlankOrElse,
    requireNonBlankOrNonNullDefault,

    requireNonEmptyArray,
    requireNonNullElementsArray,
    requireNonEmptyNorNullElementsArray,
    requireArrayHavingAtLeastOneNonNull,
};

export default RequiredAttributes;
