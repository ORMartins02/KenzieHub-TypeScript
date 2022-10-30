import * as yup from "yup";

export const formLoginSchema = yup.object().shape({
    email: yup.string().required('Email é obrigatório').email('Email inválido'),
    password: yup.string().min(6, "No minimo 6 digitos").required(),
});

export const formRegisterSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('Email é obrigatório').email('Email inválido'),
    bio: yup.string().required('Escreva sobre você.'),
    password: yup.string().min(6, "No minimo 6 digitos").required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Senha não confere'),
    contact: yup.string().required('Contato é obrigatório'),
    course_module: yup.string().oneOf([
        "Primeiro módulo (Introdução ao Frontend)",
        "Segundo módulo (Frontend Avançado)",
        "Terceiro módulo (Introdução ao Backend)",
        "Quarto módulo (Backend Avançado)",
    ])
});

export const formTechSchema = yup.object().shape({
    title: yup.string().required('Adicionane uma tecnologia'),
    status: yup.string().oneOf([
        "Iniciante",
        "Intermediário",
        "Avançado",
    ])
});
