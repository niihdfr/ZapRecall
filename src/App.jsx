
import Content from "./Components/Content";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
    overflow-x: hidden;
}

  body {
    margin: 0;
    padding: 0;
    background-color: #FB6B6B;

    
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
      <Content />
    </>
  )
}


export default App;
