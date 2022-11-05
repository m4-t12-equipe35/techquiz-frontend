import * as yup from 'yup'

const registerSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha é obrigatória")
      .oneOf([yup.ref("password")], "Confirmação de senha está incorreta"),
    stack: yup.string().required('Seleção de stack é obrigatória')
})

export default registerSchema