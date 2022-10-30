import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext, ISubmitRegisterTech } from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Section } from "./styles";
import { ButtonAddTech } from "../Button";
import { formTechSchema } from "../../schemas/formSchema";
import { InputStyle } from "../Input/style";
import { SelectStyle } from "../Select/style";

export const TechAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitRegisterTech>({
    resolver: yupResolver(formTechSchema),
  });

  const { onSubmitRegisterTechFunction, setTechAddModal } =
    useContext(AuthContext);

  return (
    <Section>
      <div id="divTechRegister">
        <button id="closeModal" onClick={() => setTechAddModal(false)}>
          x
        </button>
        <h2>Cadastrar Tecnologia</h2>
        <form action="" onSubmit={handleSubmit(onSubmitRegisterTechFunction)}>
          <label htmlFor="title">Nome</label>
          <InputStyle placeholder="Nome" id="title" {...register("title")} />
          <span>{errors.status?.message}</span>
          <label htmlFor="select">Selecionar status</label>
          <SelectStyle id="select" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </SelectStyle>
          <ButtonAddTech />
        </form>
      </div>
    </Section>
  );
};
