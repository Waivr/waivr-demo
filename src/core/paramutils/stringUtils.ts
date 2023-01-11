const isFilled = (field: string | number): boolean => (!!String(field).length);

const manyFieldsInArrayFormat = (array: (string | number)[]) => {

    const hasEmptyValue: boolean[] = [];
    array.map((field: string | number) => hasEmptyValue.push(isFilled(String(field))));

    return !hasEmptyValue.includes(false);

};

const formatText = (text: string): string => {

    const formatted = text.trim();

    if (formatted.length === 0) {

        return '';

    }

    return formatted[0].toUpperCase() + formatted.substring(1);

};

const isStringWithoutSpaceBefore = (value: string) => {

    const fullLength = value.length;
    const trimLength = value.trimStart().length;
    return fullLength === trimLength;

};

const StringUtils = {
    isFilled,
    manyFieldsInArrayFormat,
    formatText,
    isStringWithoutSpaceBefore
};

export default StringUtils;
