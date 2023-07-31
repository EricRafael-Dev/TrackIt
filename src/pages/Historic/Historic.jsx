import Header from "../../components/Header"
import TitlePlus from "../../components/TitlePlus"
import FooterComponent from "../../components/FooterComponent"
import styled from 'styled-components';

export default function Historic() {

    return (
        <>
            <Header />

            <TitlePlus title={"Histórico"} display={"none"} margin={"28px"} />

            <Container>
                <RegisterHistoric>Em breve você poderá ver o histórico dos seus hábitos aqui!</RegisterHistoric>
            </Container>

            <FooterComponent />
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height:74px;
    display:flex;
    justify-content: center;
    align-items: center;
`
const RegisterHistoric = styled.div`
    width: calc(100vw - 32px);
    height:74px;
    color:#666666;
    background-color:#F2F2F2;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`