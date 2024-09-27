import seta from "../assets/seta_play.png";
import FlipCards from "./FlipCards"
import styled from "styled-components";
import { useState } from "react";


const CARDS = [
    { question: "Qual é o país mais populoso do mundo?", answer: "A China, com mais de 1,4 bilhão de habitantes." },
    { question: "Qual é a montanha mais alta do mundo?", answer: "O Monte Everest, com 8.848 metros de altura." },
    { question: "Qual é o menor país do mundo?", answer: "O Vaticano, com aproximadamente 44 hectares." },
    { question: "Qual é o rio mais longo do mundo?", answer: "O Rio Nilo, com cerca de 6.650 km de extensão." },
    { question: "Qual cidade é conhecida como a 'Cidade das Luzes'?", answer: "Paris, na França." },
    { question: "Qual país tem mais fusos horários?", answer: "A França, devido aos seus territórios ultramarinos." },
    { question: "Em qual país o sushi foi criado?", answer: "O sushi tem origem no Japão." },
    { question: "Qual deserto é considerado o maior do mundo?", answer: "O Deserto da Antártica, que é um deserto polar." }
];
function Questions() {
    const [openCardIndex, setOpenCardIndex] = useState(null);

    return (
      <Perguntas>
        {CARDS.map((card, index) => (
          <Card
            key={index}
            index={index}
            card={card}
            openCardIndex={openCardIndex}
            setOpenCardIndex={setOpenCardIndex}
          />
        ))}
      </Perguntas>
    );
}

function Card({ index, card, openCardIndex, setOpenCardIndex }) {
    const isCardOpen = openCardIndex === index;

    
    const handleClick = () => {
        setOpenCardIndex(isCardOpen ? null : index);
    };

    return (
      <Pergunta>
        {!isCardOpen ? (
          <>
            <h2>Pergunta {index + 1}</h2>
            <img src={seta} alt="Play" onClick={handleClick} />
          </>
        ) : (
          <>
            <FlipCards />
          </>
        )}
      </Pergunta>
    );
}

export default Questions;

const Perguntas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Pergunta = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 25px;
  h2 {
  color: #333333;
  font-family: 'Recursive', Arial;
  font-size: 16px;
  font-weight: 700;
  }

  img {
    width: 20px;
    height: 23px;
    cursor: pointer;
  }
`;
