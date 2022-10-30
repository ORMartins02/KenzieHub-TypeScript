import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DivHeader } from "./style.Home";
import { ButtonExit } from "../../components/Button";
import { ConatinerList } from "../../components/ContainerList";
import { TechAdd } from "../../components/TechAdd";
import { TechEditRmv } from "../../components/TechEditRmv";

export const Dashboard = () => {
  const { userData, techAddModal, techEditRmvModal } = useContext(AuthContext);

  return userData ? (
    <DivHeader>
      <div id="headerHome">
        <h1>Kenziehub</h1>
        <ButtonExit />
      </div>
      <hr />
      <div id="userHome">
        <h2>Olá, {userData.name}</h2>
        <span>{userData.course_module}</span>
      </div>
      <hr />
      <ConatinerList />
      {techAddModal ? <TechAdd /> : <></>}
      {techEditRmvModal ? <TechEditRmv /> : <></>}
    </DivHeader>
  ) : (
    <Navigate to="/" replace />
  );
};
