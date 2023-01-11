import React, { memo, useState } from 'react';
import { ErrorMessage, useFormikContext } from 'formik';
import {
 StyledError, StyledInput, StyledContainer, StyledContent, StyledLabel, StyledWrapper, StyledIconWrapper, StyledLabelContent
} from './style';
import {
 InputFormikProps, hasError, DefaultFormikContext, IconInputOption
} from './view';

function InputFormik({
 type, name, testid, testKeys, label, ...props
}: InputFormikProps) {

    const [inputFocused, setInputFocused] = useState(false);
    const {
        errors, values, handleBlur, touched
    } = useFormikContext<DefaultFormikContext>();
    const hasSomeError = hasError(name, errors, touched);

    const onBlurField = (event: React.FocusEvent<HTMLInputElement, Element>) => {

        setInputFocused(false);
        handleBlur(event);

    };

    const styleProps = {
        error: hasSomeError,
        disabled: props.disabled,
        filled: values && values[name],
        focused: inputFocused,
    };

    const renderIconCustomOrDefault = (icon?: IconInputOption | null, forceRender?: boolean, testId?: string) => {

        let render: React.ReactNode | null = null;

        if (icon) {

            if (icon.custom) {

                render = icon.custom;

            }
            if (icon.default) {

                const src = icon.default;

                if (src) {

                    render = (
                        <img
                            src={src}
                            alt="icon"
                            style={{
                                width: '24px',
                                height: '24px'
                            }}
                        />
                    );
                  
                }

            }

        }

        if (render || forceRender) {

            return (
                <StyledIconWrapper data-testid={testId}>
                    {render}
                </StyledIconWrapper>
            );

        }

        return null;

    };

    const renderLabel = () => {

        if (label) {

            return (
                <StyledLabel
                    {...styleProps}
                    htmlFor={name}
                    data-testid={testKeys?.label}
                >
                    {label}
                    {props.required ? '*' : ''}
                    <div>{props?.labelHelper}</div>
                </StyledLabel>
            );
            
        }

        return null;

    };

    const renderInputContent = () => {

        const { icons } = props;

        return (
            <StyledContent
                {...styleProps}
                data-testid={testKeys?.content}
            >
                {renderIconCustomOrDefault(icons?.left, true, testKeys?.leftIcon)}

                <StyledInput
                    {...props}
                    {...styleProps}
                    type={type}
                    name={name}
                    id={name}
                    autoComplete="off"
                    data-testid={testid || testKeys?.input}
                    onFocus={() => setInputFocused(true)}
                    onBlur={onBlurField}
                />

                {renderIconCustomOrDefault(icons?.right, false, testKeys?.rightIcon)}
            </StyledContent>
        );

    };

    const renderCheckboxContent = () => (
            <StyledInput
                {...props}
                {...styleProps}
                style={{ width: 'auto' }}
                type={type}
                name={name}
                id={name}
                autoComplete="off"
                data-testid={testid || testKeys?.input}
                onFocus={() => setInputFocused(true)}
                onBlur={onBlurField}
            />
        );

    const renderContentByType = () => {

        switch (type) {

            case 'checkbox':
                return renderCheckboxContent();
            default:
                return renderInputContent();
        
        }

    };

    const renderLabelAndContent = () => (
        <StyledLabelContent labelPosition={props?.labelPosition}>
            {renderLabel()}
            {renderContentByType()}
        </StyledLabelContent>
    );

    return (
        <StyledContainer
            {...props}
            {...styleProps}
            data-testid={testKeys?.container}
        >
                <StyledWrapper>
                    {renderLabelAndContent()}
                    <ErrorMessage
                        render={(message: string) => <StyledError> {message}</StyledError>}
                        name={name}
                        data-testid={testKeys?.error || 'error-message'}
                    />
                </StyledWrapper>
        </StyledContainer>
    );

}

/**
 * Input component based in the Formik field. The input extend an input element, then, can be use all properties of an input default
 */
export default memo(InputFormik);
export * from './view';
