import play from "../assets/seta_play.png";
import FlipCards from "./FlipCards";
import styled from "styled-components";
import Counter from "./Counter";
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
    const [contador, setContador] = useState(0);
    const [respondidos, setRespondidos] = useState(Array(CARDS.length).fill(null)); 

    const incrementarContador = () => {
        setContador(prev => prev + 1);
    };

    return (
        <>
            <Perguntas>
                {CARDS.map((card, index) => (
                    <Card
                        key={index}
                        index={index}
                        card={card}
                        incrementarContador={incrementarContador}
                        respondido={respondidos[index]}
                        setRespondido={(resposta) => {
                            const novosRespondidos = [...respondidos];
                            novosRespondidos[index] = resposta;
                            setRespondidos(novosRespondidos);
                        }}
                    />
                ))}
            </Perguntas>
            <Counter contador={contador} />
        </>
    );
}

function Card({ index, card, incrementarContador, respondido, setRespondido }) {
    const [perguntar, setPerguntar] = useState(false);

    const handleResposta = (resposta) => {
        setRespondido(resposta);
        incrementarContador(); 
        setPerguntar(false); 
    };

    return (
        <Pergunta perguntar={perguntar}>
            {!perguntar ? (
                <>
                    <h2 className={respondido ? `riscado ${respondido}` : ""}>Pergunta {index + 1}</h2>
                    <Icon respondido={respondido} setPerguntar={setPerguntar} />
                </>
            ) : (
                <FlipCards
                    question={card.question}
                    answer={card.answer}
                    handleResposta={handleResposta} 
                />
            )}
        </Pergunta>
    );
}

function Icon({ respondido, setPerguntar }) {
    return (
        <>
            {!respondido ? (
                <img src={play} alt="play" onClick={() => setPerguntar(true)} />
            ) : (
                <ion-icon name={respondido}></ion-icon>
            )}
        </>
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
    height: ${(props) => (props.perguntar ? "131px" : "65px")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    background-color: ${(props) => (props.perguntar ? "#FFFFD4" : "white")};
    border-radius: 5px;
    margin-bottom: 25px;
    transition: height 0.3s ease;

    h2 {
        color: #333333;
        font-family: 'Recursive', Arial;
        font-size: 16px;
        font-weight: 700;
    }

    h2.riscado {
        text-decoration: line-through;
    }

    h2.riscado.red {
        color: #FF3030; // Cor para a opção "Não lembrei"
    }

    h2.riscado.orange {
        color: #FF922E; // Cor para a opção "Quase não lembrei"
    }

    h2.riscado.green {
        color: #2FBE34; // Cor para a opção "Zap!"
    }

    img {
        width: 20px;
        height: 23px;
        cursor: pointer;
    }
`;
