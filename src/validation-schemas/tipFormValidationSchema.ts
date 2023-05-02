import * as Yup from 'yup';

export const TipFormValidationSchema = Yup.object().shape({
    billAmount: Yup.number()
        .notOneOf([0], 'Can\'t be zero')
        .max(10000, 'Too Long!')
        .positive('Cannot be negative')
        .required('Required'),
    tipPercent: Yup.number()
        .notOneOf([0], 'Can\'t be zero')
        .positive('Cannot be negative')
        .required('Required'),
    numberOfPeople: Yup.number()
        .positive('Cannot be negative')
        .max(500, 'Less than 500')
        .notOneOf([0], 'Can\'t be zero')
        .required('Required'),
});