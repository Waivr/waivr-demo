import {
    render,
    screen,
    waitFor,
    act
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Formik } from 'formik';
import React from 'react';
import InputFormik, { InputIconEnum, InputFormikProps } from '.';
import { validateEmail } from '../validation/validateEmail';

describe('Test Input formik component', () => {

    const onSubmit = jest.fn();

    const inputProps: InputFormikProps = {
        name: 'email',
        type: 'email',
        placeholder: 'email@email.com',
        label: 'Email',
        required: true,
        testid: 'test-input',
        testKeys: {
            container: 'test-container',
            content: 'test-content',
            label: 'test-label',
            input: 'test-input',
            error: 'test-error',
            leftIcon: 'test-left-icon',
            rightIcon: 'test-right-icon',
        },
        icons: {
            left: {
                default: InputIconEnum.EMAIL
            },
            right: {
                default: InputIconEnum.EMAIL
            }
        }
    };

    const renderField = () => (render(
        <Formik
        initialValues={{ email: '' }}
            onSubmit={(values) => onSubmit(values)}
            validationSchema={validateEmail}
        >
            <Form>
                <InputFormik
                    {...inputProps}
                />
                <button type="submit" data-testid="submit">Submit</button>
            </Form>
        </Formik>
    ));

    beforeEach(() => {

        renderField();

    });

    it('should be render input successfully', async () => {

        // Arrange
        const input = screen.getByTestId('test-input');
        const inputLabel = screen.getByTestId('test-label');

        // Act
        userEvent.type(input, 'value');

        // Assert
        await waitFor(async () => expect(input).toHaveValue('value'));
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('name', inputProps.name);
        expect(input).toHaveAttribute('type', inputProps.type);
        expect(input).toHaveAttribute('placeholder', inputProps.placeholder);
        expect(inputLabel).toBeInTheDocument();
        expect(screen.findByText(String(inputProps.label)));

    });

    it('should be fill input successfully', async () => {

        // Arrange
        const input = screen.getByTestId('test-input');

        // Act
        const validValue = 'email@email.com';
        await act(async () => userEvent.type(input, validValue));

        // Assert
        await waitFor(async () => expect(input).toHaveValue(validValue));

    });

    it('should be render the left icon', () => {

        // Arrange
        const leftIcon = screen.getByTestId('test-left-icon');

        // Act

        // Assert
        expect(leftIcon).toBeInTheDocument();

    });

    it('should be render the right icon', () => {

        // Arrange
        const rightIcon = screen.getByTestId('test-right-icon');

        // Act

        // Assert
        expect(rightIcon).toBeInTheDocument();

    });

    it('should be render * in label when input is required', () => {

        // Arrange
        const label = screen.getByText('Email*');

        // Act

        // Assert
        expect(label).toBeInTheDocument();

    });

    it('should be not show error when render start', () => {

         // Arrange
         const error = screen.queryByTestId('test-error');
 
         // Act
 
         // Assert
         waitFor(() => {
 
             expect(error).not.toBeTruthy();
             expect(error).not.toBeInTheDocument();
 
         });

    });

    it('should be show error when fill input with invalid value', async () => {

        // Arrange
        const invalidValue = 'email@email';
        const input = screen.getByTestId('test-input');
        const error = screen.queryByTestId('test-error');
        const submitButton = screen.getByTestId('submit');

        // Act
        userEvent.type(input, invalidValue);
        userEvent.click(submitButton);

        // Assert
        waitFor(() => {

            expect(input).toHaveValue(invalidValue);
            expect(error).toBeTruthy();
            expect(error).toBeInTheDocument();

        });
        
    });

    it('should be clear error after fill the input correctly', async () => {

        // Arrange
        const invalidValue = 'email@email';
        const validValue = 'email@email.com';
        const input = screen.getByTestId('test-input');
        const error = screen.queryByTestId('test-error');
        const submitButton = screen.getByTestId('submit');

        // Act
        userEvent.type(input, invalidValue);
        userEvent.click(submitButton);

        // Assert
        waitFor(() => {

            expect(input).toHaveValue(invalidValue);
            expect(error).toBeTruthy();
            expect(error).toBeInTheDocument();

        });

        // Act 2
        userEvent.clear(input);
        userEvent.type(input, validValue);

        // Assert 2
        waitFor(() => {

            expect(input).toHaveValue(validValue);
            expect(error).not.toBeTruthy();
            expect(error).not.toBeInTheDocument();

        });

    });

});
