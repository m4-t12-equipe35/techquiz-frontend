import * as yup from 'yup'

const loginSchema = yup.object().shape({
    email: yup.string().required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória')
})

export default loginSchema