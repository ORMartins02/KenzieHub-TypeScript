import { formLoginSchema } from "../../schemas/formSchema";
import { AuthContext, IUserLogin } from "../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Section } from "./style.login";
import { useForm } from "react-hook-form";
import { ButtonLogin, ButtonGoToRegister } from "../../components/Button";
import { InputStyle } from "../../components/Input/style";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formLoginSchema),
  });

  const { onSubmitLoginFunction } = useContext(AuthContext);

  return (
    <Section>
      <h1>Kenzie hub</h1>
      <div id="divLogin">
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmitLoginFunction)}>
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
          <ButtonLogin />
        </form>
        <div id="divRegister">
          <span>Ainda não é cadastrado?</span>
          <ButtonGoToRegister />
        </div>
      </div>
    </Section>
  );
};
