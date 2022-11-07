import { useEffect, useState } from "react";
import { ContainerInfo, ListTechs, BoxInfo, Overflow } from "./home.style";
import CatPc from "../../assets/catpc.svg";
import Women from "../../assets/women.svg";
import api from "../../services";

interface ITech {
  id: string;
  name: string;
  stack: string;
}

const Homepage = () => {
  const [tech, setTech] = useState<ITech[]>([]);
  const [filterTech, setFilterTech] = useState<ITech[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    api
      .get("/techs")
      .then((res) => {
        setTech(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showTechs = () => {
    if (filterTech) {
      const input = searchInput.toLocaleLowerCase();
      const productInput = tech.filter((elem) =>
        elem.name.toLowerCase().includes(input)
      );
      setFilterTech(productInput);
    }
  };

  return (
    <>
      <ContainerInfo>
        <img src={Women} alt="mulher no quadro" />
        <div>
          <p>Teste seus conhecimentos sobre as tecnologias que você gosta</p>
          <div>
            {" "}
            <input
              onChange={(event) => setSearchInput(event.target.value)}
              type="text"
              placeholder="Pesquise uma tecnologia"
            />
            <button
              type="submit"
              onClick={() => {
                showTechs();
              }}
            >
              Buscar
            </button>
          </div>
        </div>
        <img src={CatPc} alt="mulher com gato" className="imgCatPc" />
      </ContainerInfo>
      <Overflow>
        <ListTechs>
          {tech
            ?.filter((elem) =>
              elem.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((elem) => {
              return <li key={elem.id}>{elem.name}</li>;
            })}
        </ListTechs>
      </Overflow>
      <BoxInfo>
        <p>Teste seus conhecimentos sobre as tecnologias que você gosta</p>
      </BoxInfo>
    </>
  );
};

export default Homepage;
