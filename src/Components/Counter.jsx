import styled from "styled-components";

export default function Counter ({contador}) {
    return (
                <Footer>
                    <h3>{`${contador}/8 CONCLUÍDOS`}</h3>
                </Footer>
        );
        
    
}

const Footer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  z-index: 3;
  position: fixed;
  bottom: 0;
  left: 0; 
  border-top: 1px solid #ddd; 

  h3 {
    color: #333333;
    font-size: 18px;
    font-family: 'Recursive', Arial;
    text-align: center;
  }
`;