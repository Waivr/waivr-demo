import React, { InputHTMLAttributes } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import StringUtils from '../../../core/paramutils/stringUtils';

export enum InputIconEnum {
    PHONE = '/waivr-demo/assets/icons/phone.png',
    EMAIL = '/waivr-demo/assets/icons/mail.png'
}

export type IconInputOption = {
    custom?: React.ReactNode;
    default?: InputIconEnum;
}

export type IconInputProps = {
    right?: IconInputOption;
    left?: IconInputOption;
}

export enum InputLabelPosition {
    TOP = 'TOP',
    RIGHT = 'RIGHT',
    BOTTOM = 'BOTTOM',
    LEFT = 'LEFT',
}

/**
 * Definition of properties that can be used in the InputFormik. The input extend an input element, then, can be use all properties of an input default
 */
export interface InputFormikProps extends InputHTMLAttributes<unknown> {
    /**
     * @description The name of field to use in formik.
     * The Formik library uses this value to assemble the object that is returned in the submit function, so this value must be unique.
     * @example
     * import InputFormik, { InputIconEnum } from 'src/__sharedComponents/InputFormik';
     *  <InputFormik
            name="phone"
        />
     */
    name: string;

    /**
     * @description Use this attribute to found the field in tests.
     * @example
     * import InputFormik, { InputIconEnum } from 'src/__sharedComponents/InputFormik';
     *  <InputFormik
            name="phone"
            testid="test-input-phone"
        />
     */
    testid?: string;

    testKeys?: {
        container?: string;
        content?: string;
        label?: string;
        input?: string;
        leftIcon?: string;
        rightIcon?: string;
        error?: string;
    }

    /**
     * @description This attribute can be used to render icon in left or right side of input.
     * @usage To use this prop, can send an object with left and/or right values.
     * Each value of left and right, is possible be a ReactNode (any value accepted in type React.ReactNode), in this case, you be use the `custom` key inside left/right object.
     * Also can use the default icon already existed in the project. In this case, already have a enum `InputIconEnum` with icons possibles with the paths of files to use.
     * Always when need add a new image to icon and this icon cab be use in more screens, it is suggested add in this enum to maintain standardization and can will be use by others devs.
     * @example
     * import InputFormik, { InputIconEnum } from 'src/__sharedComponents/InputFormik';
     *  <InputFormik
            name="phone"
            icons={{
                left: {
                    default: InputIconEnum.PHONE
                },
                right: {
                    custom: (<div><span>you can also use any structure of JSX element</span></div>),
                }
            }}
        />
     */
    icons?: IconInputProps;

    /**
     * @description Use this property to set a margin bottom in the field container
     * @example
     * import InputFormik from 'src/__sharedComponents/InputFormik';
     *  <InputFormik
            name="phone"
            mb="8px" // also be use number value and will be converted to px e.g: mb={8}
        />
     */
    mb?: string | number;

    /**
     * @description Render any value with label
     * @example
     * import InputFormik from 'src/__sharedComponents/InputFormik';
     *  <InputFormik
            name="username"
            label="Username" // you can also send any JSX element. For example, to render text using translate, you can use the component provided by the library. label={<Trans i18nKey="loginForm.fields.identification" />}
        />
     */
    label?: string | React.ReactNode;

    /**
     * @description If you use the label property, can define the position that the label will render. Default is top (`InputLabelPosition.TOP`)
     * @example
     * import InputFormik, { InputLabelPosition } from 'src/__sharedComponents/InputFormik';
     *  <InputFormik
            name="username"
            label={<Trans i18nKey="loginForm.fields.identification" />}
            labelPosition={InputLabelPosition.BOTTOM}
        />
     */
    labelPosition?: InputLabelPosition;

    /**
     * @description If in addition to the label, you need to show another element next to the label, such as a badge, you can use this property
     * @example
     * import InputFormik from 'src/__sharedComponents/InputFormik';
     *  <InputFormik
            name="password"
            label={<Trans i18nKey="registerForm.fields.password" />}
            labelHelper={<Helper helperContent={registerHelper} />}
        />
     */
    labelHelper?: React.ReactNode;
}

export const hasError = (name: string, errors: FormikErrors<unknown> = {}, touched: FormikTouched<unknown> = {}) => (
        errors
        && name
        && touched
    );

export type ContainerStyledProps = InputFormikProps & {
    error?: boolean;
    disabled?: boolean;
    filled?: boolean;
    focused?: boolean;
}

export interface DefaultFormikContext {
    [key: string]: string | number;
}

interface FieldColors {
    DEFAULT: string;
    ERROR: string;
    FOCUSED: string;
    FILLED: string;
    /**
     * this value is equivalent to disabled
     */
    LOCKED: string;
}

export const BORDER_COLORS: FieldColors = {
    DEFAULT: '#757382',
    ERROR: '#FD3737',
    FOCUSED: '#2A273A',
    FILLED: '#757382',
    LOCKED: '#757382',
};

export const TEXT_COLORS: FieldColors = {
    DEFAULT: '#757382',
    ERROR: '#757382',
    FOCUSED: '#08184E',
    FILLED: '#2A273A',
    LOCKED: '#757382',
};

const BACKGROUND_COLORS: FieldColors = {
    LOCKED: '#EAEAEA',
    DEFAULT: '#F9F9FB',
    ERROR: '#F9F9FB',
    FOCUSED: '#F9F9FB',
    FILLED: '#F9F9FB',
};

const LABEL_COLORS: FieldColors = {
    DEFAULT: '#757382',
    ERROR: '#FD3737',
    FOCUSED: '#2A273A',
    FILLED: '#757382', // '#08184E',
    LOCKED: '#757382', // '#08184E',
};

export const transformValueToPx = (value: string | number) => {

    if (!StringUtils.isFilled(value)) return value;

    if (Number.isNaN(Number(value))) return value;

    const stringValue = String(value);

    if (stringValue.toLowerCase().endsWith('px')) return value;

    return `${stringValue}px`;

};

const getBorderStyleByColor = (color: string, strong = false) => `${strong ? '2' : '1'}px solid ${color}`;

export const getBorderStyleByParams = (error = false, focused = false, disabled = false, filled = false) => {
    
    if (error) return getBorderStyleByColor(BORDER_COLORS.ERROR);
    if (disabled) return getBorderStyleByColor(BORDER_COLORS.LOCKED);
    if (focused) return getBorderStyleByColor(BORDER_COLORS.FOCUSED, true);
    if (filled) return getBorderStyleByColor(BORDER_COLORS.FILLED);

    return getBorderStyleByColor(BORDER_COLORS.DEFAULT);

};

export const getTextColorByParams = (error = false, focused = false, disabled = false, filled = false) => {

    if (error) return TEXT_COLORS.ERROR;
    if (disabled) return TEXT_COLORS.LOCKED;
    if (focused) return TEXT_COLORS.FOCUSED;
    if (filled) return TEXT_COLORS.FILLED;
    return TEXT_COLORS.DEFAULT;

};

export const getLabelColorByParams = (error = false, focused = false, disabled = false, filled = false) => {
    
    if (error) return LABEL_COLORS.ERROR;
    if (disabled) return LABEL_COLORS.LOCKED;
    if (focused) return LABEL_COLORS.FOCUSED;
    if (filled) return LABEL_COLORS.FILLED;
    return LABEL_COLORS.DEFAULT;

};

export const getBackgroundByDisabled = (props?: ContainerStyledProps) => BACKGROUND_COLORS[props?.disabled ? 'LOCKED' : 'DEFAULT'];

export const positionPropsByLabelPosition = {
    RIGHT: 'row-reverse',
    BOTTOM: 'column-reverse',
    LEFT: 'row',
    TOP: 'column',
};
