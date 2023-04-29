import * as Yup from 'yup';

export const TipFormValidationSchema = Yup.object().shape({
    billAmount: Yup.number()
        .notOneOf([0], 'Can\'t be zero')
        .max(10000, 'Too Long!')
        .positive('Cannot be negative')
        .required('Required'),
    tipPercent: Yup.string()
        .matches(/^\d+$/, 'Only positive')
        .test('is-positive', 'Only positive', value => {
            return parseInt(value || '0') >= 0;
        })
        .required('Required'),
    numberOfPeople: Yup.number().required('Can\'t be zero')
        .positive('Cannot be negative')
        .max(500, 'Cannot be more than 500')
        .notOneOf([0], 'Can\'t be zero')
});