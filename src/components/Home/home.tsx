import { useContext, useEffect, useState } from "react";
import { ContainerInfo, ListTechs, BoxInfo, Overflow } from "./home.style";
import CatPc from "../../assets/catpc.svg";
import Women from "../../assets/women.svg";
import api from "../../services";
import { useNavigate } from "react-router-dom";
import { ITech, QuestionContext } from "../../contexts/QuestionsContext";

const Homepage = () => {
  const {
    techList,
    setTechList,
    setTech,
    filteredTech,
    setFilteredTech,
    questions,
    setQuestionsByTech,
  } = useContext(QuestionContext);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  function selectTech(tech: ITech) {
    console.log(questions);
    setTech(tech);
    const filteredQuestions = questions.filter(
      (question) => question.tech.id === tech.id
    );
    console.log(tech);
    console.log(questions[0].tech.id);

    setQuestionsByTech(filteredQuestions);
    navigate("/questions");
  }

  useEffect(() => {
    api
      .get("/techs")
      .then((res) => {
        setTechList(res.data);
      })
      .catch((err) => console.log(err));
  }, [setTechList]);

  const showTechs = () => {
    if (filteredTech) {
      const input = searchInput.toLocaleLowerCase();
      const productInput = techList.filter((elem) =>
        elem.name.toLowerCase().includes(input)
      );
      setFilteredTech(productInput);
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
          {techList
            ?.filter((elem) =>
              elem.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((elem) => {
              return (
                <li key={elem.id} onClick={() => selectTech(elem)}>
                  {elem.name}
                </li>
              );
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
