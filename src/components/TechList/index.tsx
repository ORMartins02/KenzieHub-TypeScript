import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { List, Tech } from "./styles";

export const TechList = () => {
  const { techList, setActualTech, setTechEditRmvModal } =
    useContext(AuthContext);

  return (
    <List id="listContainer">
      {techList.length === 0 ? (
        <h3 id="emptyList" key={"1"}>
          Não possui nenhuma tecnologia registrada
        </h3>
      ) : (
        techList.map((elem) => {
          return (
            <Tech
              key={elem.id}
              id="listCard"
              title="Clique para editar esta Tech"
              onClick={() => {
                setActualTech({
                  id: elem.id,
                  title: elem.title,
                  status: elem.status,
                });
                setTechEditRmvModal(true);
              }}
            >
              <div id="divCard">
                <h3>{elem.title}</h3>
                <span>{elem.status}</span>
              </div>
            </Tech>
          );
        })
      )}
    </List>
  );
};
