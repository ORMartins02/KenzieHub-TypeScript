import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { formTechSchema } from "../../schemas/formSchema";
import { AuthContext, ITechs } from "../../context/AuthContext";
import { ButtonStyle } from "../Button/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Section } from "./styles";
import { useForm } from "react-hook-form";
import { InputStyle } from "../Input/style";
import { SelectStyle } from "../Select/style";

export const TechEditRmv = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechs>({
    resolver: yupResolver(formTechSchema),
  });

  const { setTechEditRmvModal, handleTechEdit, handleTechRmv } =
    useContext(AuthContext);

  const { actualTech } = useContext(AuthContext);
  const { id, title } = actualTech;

  return (
    <Section>
      <div id="divTechRegister">
        <button id="closeModal" onClick={() => setTechEditRmvModal(false)}>
          x
        </button>
        <h2>Editar Tecnologia</h2>
        <form onSubmit={handleSubmit(handleTechEdit)}>
          <label htmlFor="title">Nome</label>
          <InputStyle
            placeholder="Nome"
            id={`${id}`}
            value={`${title}`}
            {...register("title")}
          />
          <span>{errors.status?.message}</span>
          <label htmlFor="select">Selecionar status</label>
          <SelectStyle id="select" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </SelectStyle>
          <div id="divButtons">
            <ButtonStyle
              onSubmit={handleSubmit(handleTechEdit)}
              id="edit"
              title="Editar Tecnologia"
            >
              <FaEdit />
            </ButtonStyle>
            <ButtonStyle
              onClick={handleSubmit(handleTechRmv)}
              id="trash"
              title="Remover Tecnologia"
            >
              <FaTrashAlt />
            </ButtonStyle>
          </div>
        </form>
      </div>
    </Section>
  );
};
