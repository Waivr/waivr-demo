import * as Yup from 'yup';
import { Email } from '../../../core/domain/common/contact/email';

export const validateEmail = Yup.object({
    username: Yup.string()
        .required('Required Field')
        .matches(Email.REGEXP, 'Invalid email address')
});
