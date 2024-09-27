import styled from "styled-components";

function Counter ({contador}) {
    return (
        <Footer>
            <h3>{`${contador}/8 CONCUIDOS `}</h3>
        </Footer>
    )
}

export default Counter;

const Footer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: fixed; /* Fixa o footer */
  bottom: 0; /* Posiciona ele na parte inferior da tela */
  z-index: 3;
  
  h3 {
    color: #333333;
    font-size: 18px;
    font-family: 'Recursive', Arial;
    text-align: center;
  }
`;


