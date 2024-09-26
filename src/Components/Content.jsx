import styled from 'styled-components';
import logo from "../assets/logo.png"
import Questions from "./Questions"
import Counter from "./Counter";

function Content(props) {
    return (
        <>          
            <Header>
                    <img src={logo} alt="ZapRecallLogo" />
                    <h1>ZapRecall</h1>
            </Header>
            <Questions card = {props.card}/>
            <Counter />
        </>
    )
    
    
}

const Header = styled.div `

            display: flex;
            align-items: center;
            justify-content: center;
            margin: 42px 51px 0px 0px;
            gap: 20px;

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