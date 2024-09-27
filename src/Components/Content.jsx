import styled from 'styled-components';
import logo from "../assets/logo.png"
import Questions from "./Questions"
import Counter from './Counter';

function Content() {


    return (
        <>          
            <Header>
                    <img src={logo} alt="Logo" />
                    <h1>ZapRecall</h1>
            </Header>
            <Questions  />
        </>
    )
    
    
}

const Header = styled.div `

            display: flex;
            align-items: center;
            justify-content: center;
            margin: 42px 51px 0px 0px;
            gap: 20px;
            margin-bottom: 51px;
            width: 100%;

                h1 {
                    font-family: "Righteous", Arial;
                    font-weight: 400;
                    font-size: 36px;
                    color: white;
                    }
                img {
                    width: 52px;
                    height: 60px;
                }
            `
export default Content;