import CARD from "./mock"
import Content from "./components/Content.jsx";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
      <Content card= {CARD}/>
    </>
  )
}


export default App;
