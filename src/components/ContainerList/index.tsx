import { DivContainer } from "./styles";
import { ButtonOpenModalTech } from "../Button";
import { TechList } from "../TechList";

export const ConatinerList = () => {
  return (
    <DivContainer>
      <div id="divHeaderTech">
        <h2>Tecnologias</h2>
        <ButtonOpenModalTech></ButtonOpenModalTech>
      </div>
      <div>
        <TechList />
      </div>
    </DivContainer>
  );
};
