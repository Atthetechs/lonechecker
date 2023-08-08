import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    age: Yup.number().required('Age is required').min(18, 'Age must be at least 18'),
    maritalStatus: Yup.string().required('Marital status is required'),
    loanDuration: Yup.string().required('Loan duration is required'),
    monthlySalary: Yup.string().required('Monthly salary is required'),
    cityOfWork: Yup.string().required('City of work is required'),
    cityOfResidence: Yup.string().required('City of residence is required'),
    jobDesignation: Yup.string().required('Job designation is required'),
    nationalityID: Yup.string().required('Nationality ID is required'),
    country: Yup.string().required('Country is required'),
    checked: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
  });