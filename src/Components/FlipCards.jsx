import { useState } from "react";
import Virar from "../assets/seta_virar.png";
import styled from "styled-components";

export default function FlipCards({ question, answer, handleResposta }) {
    const [virada, setVirada] = useState(true);

    return (
        <>
            {virada ? (
                <CardPergunta>
                    <h4>{question}</h4>
                    <img src={Virar} alt="" onClick={() => setVirada(false)} />
                </CardPergunta>
            ) : (
                <CardPergunta virada={virada}>
                    <h4>{answer}</h4>
                    <Opcoes handleResposta={handleResposta} />
                </CardPergunta>
            )}
        </>
    );
}

function Opcoes({ handleResposta }) {
    const listaOpcoes = [
        { opcao: "1", texto: "Não lembrei", classe: "red" },
        { opcao: "2", texto: "Quase não lembrei", classe: "orange" },
        { opcao: "3", texto: "Zap!", classe: "green" }
    ];

    return (
        <Botoes>
            {listaOpcoes.map((itemOpcao) => (
                <Botao
                    key={itemOpcao.opcao}
                    className={itemOpcao.classe}
                    onClick={() => handleResposta(itemOpcao.classe)}
                >
                    <span>{itemOpcao.texto}</span>
                </Botao>
            ))}
        </Botoes>
    );
}

const CardPergunta = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.virada ? "row" : "column")};
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 0;

    h4 {
        color: #333333;
        font-size: 18px;
        font-family: 'Recursive', Arial;
        font-weight: 400 !important;
        margin-top: 18px;
    }

    img {
        width: 30px;
        height: 20px;
        cursor: pointer;
        margin-left: 240px;
        margin-bottom: 6px;
    }
`;

const Botoes = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
    gap: 10px;
`;

const Botao = styled.div`
    background-color: ${(props) => {
        if (props.className === "red") {
            return "#FF3030"; 
        } else if (props.className === "orange") {
            return "#FF922E"; 
        } else {
            return "#2FBE34"; 
        }
    }};

    width: 80px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;

    span {
        color: white;
        width: 65px;
        font-size: 12px;
        font-weight: 400;
        font-family: 'Recursive', Arial;
        text-align: center;
    }
`;
