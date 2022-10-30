import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ButtonStyle } from "./style";
import { FaPlus } from "react-icons/fa";

export const ButtonRegister = () => {
  return <ButtonStyle type="submit">Cadastrar</ButtonStyle>;
};

export const ButtonLogin = () => {
  return <ButtonStyle type="submit">Entrar</ButtonStyle>;
};

export const ButtonGoToRegister = () => {
  const navigate = useNavigate();

  return (
    <ButtonStyle onClick={() => navigate("/Register")}>Cadastrar</ButtonStyle>
  );
};

export const ButtonGoToLogin = () => {
  const navigate = useNavigate();

  return <ButtonStyle onClick={() => navigate("/")}>Voltar</ButtonStyle>;
};

export const ButtonExit = () => {
  const { logout } = useContext(AuthContext);

  return <ButtonStyle onClick={logout}>Sair</ButtonStyle>;
};

export const ButtonOpenModalTech = () => {
  const { setTechAddModal } = useContext(AuthContext);

  return (
    <ButtonStyle onClick={() => setTechAddModal(true)}>
      <FaPlus />
    </ButtonStyle>
  );
};

export const ButtonAddTech = () => {
  return <ButtonStyle type="submit">Cadastrar Tecnologia</ButtonStyle>;
};
