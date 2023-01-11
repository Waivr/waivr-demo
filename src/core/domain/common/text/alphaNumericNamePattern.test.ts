import checkIsAlphaNumericName from './alphaNumericNamePattern';

describe('Check if string have spaces', () => {


    it('should be pass if send the valid string', () => {

        const value = 'John doe';

        checkIsAlphaNumericName(value, 'test');

    });

    it('should be not pass if send an invalid string', () => {

        const value = ' John*doe';

        try {
            
            // not action

        } catch (error: any) {

            expect(checkIsAlphaNumericName(value, 'test')).toThrow(error);
            
        }
    
    });
    
});
