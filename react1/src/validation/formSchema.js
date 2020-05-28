import * as yup from 'yup'

export const loginFormSchema = yup.object().shape({
    username: yup.string()
       .trim()
       .required('Username is a required field'),
    password: yup.string()
       .required('Password is a required field'),
})

export const signupFormSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .min(4, 'Username must be at least four characters')
        .required('Username is a required field'),
    password: yup.string()
        .min(8, 'Password must be at least eight characters')
        .required('Password is a required field'),
})