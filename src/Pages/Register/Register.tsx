import { ButtonGoToLogin, ButtonRegister } from "../../components/Button";
import { formRegisterSchema } from "../../schemas/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext, IUserRegister } from "../../context/AuthContext";
import { useContext } from "react";
import { Section } from "./style.register";
import { useForm } from "react-hook-form";
import { InputStyle } from "../../components/Input/style";
import { SelectStyle } from "../../components/Select/style";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(formRegisterSchema),
  });

  const { onSubmitRegisterFunction } = useContext(AuthContext);

  return (
    <Section>
      <div id="divTitle">
        <h1>Kenzie hub</h1>
        <ButtonGoToLogin />
      </div>
      <div id="divRegister">
        <p>Crie sua conta</p>
        <p>Rápido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(onSubmitRegisterFunction)}>
          <label htmlFor="name">Nome</label>
          <InputStyle placeholder="Nome" id="name" {...register("name")} />
          <span>{errors.name?.message}</span>
          <label htmlFor="email">Email</label>
          <InputStyle placeholder="Email" id="email" {...register("email")} />
          <span>{errors.email?.message}</span>
          <label htmlFor="password">Senha</label>
          <InputStyle
            type="password"
            placeholder="Senha"
            id="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <InputStyle
            type="password"
            placeholder="Digite aqui sua senha"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>
          <label htmlFor="contact">Contato</label>
          <InputStyle
            placeholder="Opção de contato"
            id="contact"
            {...register("contact")}
          />
          <span>{errors.bio?.message}</span>
          <label htmlFor="bio">Bio</label>
          <InputStyle
            placeholder="Fale sobre você"
            id="bio"
            {...register("bio")}
          />
          <label htmlFor="select">Selecionar módulo</label>
          <SelectStyle id="select" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </SelectStyle>
          <span>{errors.course_module?.message}</span>
          <ButtonRegister />
        </form>
      </div>
    </Section>
  );
};
