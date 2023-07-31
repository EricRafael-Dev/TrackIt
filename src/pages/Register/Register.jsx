import { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useEffect } from "react";
import logo from '../../assets/logo.svg'

export default function Register() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [sended, setSended] = useState(false);

    useEffect(() => {
        if (sended) {
          const timer = setTimeout(() => {navigate("/");}, 1000);

          return () => clearTimeout(timer);
        }
      }, [sended, navigate]);


    function enviarInfos(e) {
        e.preventDefault();
        const obj = {
            email: email,
            name: name,
            image: url,
            password: password
        }

        const apiUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        axios.post(apiUrl, obj)
        .then(resposta => {setSended(true);
            alert('Você foi cadastrado com sucesso!');
            console.log(resposta.data);})
        .catch(erro => {
            setSended(false);
            console.log(erro.response.data);
            alert(erro.response.data.message);});
    }

    return (
        <PageContainer>

            <Image src={logo}></Image>

            <form onSubmit={enviarInfos}>

                <FormContainer isDisabled={sended}>

                    <input type="email" disabled={sended} placeholder="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" disabled={sended} placeholder="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input type="text" disabled={sended} placeholder="nome" id="nome" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="url" disabled={sended} placeholder="foto" id="foto" value={url} onChange={(e) => setUrl(e.target.value)} required />

                    <button type="submit" disabled={sended}>
                        {sended ? (<ThreeDots color="#FFFFFF" height={20} width={20} />) : ("Cadastrar")}
                    </button>

                </FormContainer>

            </form>

            <Link to='/'>
                <SignIn>Já tem uma conta? Faça login!</SignIn>
            </Link>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 68px;
`
const Image = styled.img`
    height: 180px;
    width: 180px;
    margin-bottom: 32.62px;
`

const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: center;
    
    input {
        width: calc(100vw - 72px);
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 6px;
        padding-left: 11px;
        background-color: ${({ isDisabled }) => (isDisabled ? '#F2F2F2' : '#FFFFFF')};
        color: ${({ isDisabled }) => (isDisabled ? '#AFAFAF' : '')};
        
    }
    button {
        height: 45px;
        width: calc(100vw - 57px);
        border-radius: 4.64px;
        font-family: Lexend Deca;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;
        background-color:#52B6FF;
        color: #FFFFFF;
        border: none;
        margin-bottom: 25px;
        cursor: pointer;
        display:flex;
        justify-content:center;
        align-items: center;
        opacity: ${({ isDisabled }) => (isDisabled ? '0.7' : '1')};
        cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
    }
`
const SignIn = styled.div`
    height: 17px;
    width: 260px;
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color:#52B6FF;
    text-align: center;
    text-decoration-line: underline;
    cursor: pointer;
`