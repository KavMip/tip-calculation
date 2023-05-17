import * as Yup from 'yup';
import { PlanType } from '../interfaces/multiStepForm/multiStepFormTypes';

export const MultiStepFormValidationSchema = Yup.object().shape({
    personalInfo: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phoneNumber: Yup.string()
            .matches(/^[0-9+]+$/, 'Must contain only numbers or a plus symbol')
            .required('Phone number is required'),
    }),
    planType: Yup.object().shape({
        planType: Yup.string().oneOf(Object.values(PlanType)).required('Plan type is required'),
        yearly: Yup.boolean(),
    }),
    addOns: Yup.object().shape({
        onlineService: Yup.boolean(),
        largerStorage: Yup.boolean(),
        customizableProfile: Yup.boolean(),
    }),
});