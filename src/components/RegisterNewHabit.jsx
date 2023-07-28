import styled from 'styled-components';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";
import { useEffect } from "react";

export default function CadastrarNovoHabito(props) {

    const navigate = useNavigate();

    const { screen1, 
        setScreen1, 
        screen2, 
        setScreen2 } = props

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [selectDays, setSelectDays] = useState([]);
    const [send, setSend] = useState(false);

    function sendInfos() {
        setSend(true);
    }


    function selectDay(index) {

        let available = true;

        selectDays.forEach(i => {
            if (i === index) {
                available = false;
            }
        });

        if (available === true) {

            setSelectDays([...selectDays, index]);

            console.log([...selectDays, index])

        } else {
            let newDays = [];
            let nowDays = [...selectDays];

            nowDays.forEach(i => {
                if (i != index) {

                    newDays.push(i);
                }
            })

            setSelectDays(newDays);

        }

    }

    return (

            <ContainerAddHabits disabled={send}>

                <input disabled={send} type="text" placeholder="Nome do hábito" />

                <Containerdays>

                    {days.map((day, index) => (

                        <Each disabled={send}
                            key={index}
                            id={index}
                            array={selectDays}
                            onClick={() => selectDay(index)}>

                            {day}
                        </Each>
                    )
                    )}

                </Containerdays>

                <ContainerButtons>

                    <Button1 disabled={send} onClick={() => {
                        setScreen1(true);
                        setScreen2(false);
                        }}>
                        Cancelar
                    </Button1>

                    <Button2 disabled={send} onClick={sendInfos}>
                        {send ? (<ThreeDots color="#FFFFFF" height={20} width={20} />) : ("Salvar")}
                    </Button2>

                </ContainerButtons>
            </ContainerAddHabits>
    )
}

const ContainerAddHabits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: calc(100vw - 34px);
    height: 180px;
    border-radius:5px;
    background-color:#FFFFFF;
    margin-bottom:29px;
    input {
        width: calc(100vw - 72px);
        height:45px;
        border-radius:5px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        border: 1px solid #D4D4D4;
        margin-top:18px;
        padding-left: 11px;
        color: ${({ disabled }) => (disabled ? '#B3B3B3' : '#666666')};
    }
    input::placeholder {
    color: #DBDBDB;
    }
`
const Containerdays = styled.div`
    width: calc(100vw - 72px);
    height: 38px;
    margin-bottom:29px;
    display:flex;
    justify-content: flex-start;
    align-items:flex-end;
`
const ContainerButtons = styled.div`
    width: calc(100vw - 68px);
    height: 35px;
    display:flex;
    justify-content: flex-end;
    align-items:center;
`
const Button1 = styled.button`
    height: 20px;
    width: 69px;
    font-family: Lexend Deca;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color:#52B6FF;
    margin-right: 23px;
    border: none;
    background-color: #FFFFFF;
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
`

const Button2 = styled.button`
    height: 35px;
    width: 84px;
    border-radius: 4.64px;
    background-color:#52B6FF;
    color: #FFFFFF;
    text-align: center;
    font-family: Lexend Deca;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    border:none;
    display:flex;
    justify-content:center;
    align-items: center;
    cursor:pointer;
    opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
`

const Each = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 5px;
    margin-right:4px;
    background-color: ${({ array, id }) =>
        array.includes(id) ? '#CFCFCF' : '#FFFFFF'};
    color: ${({ array, id }) =>
        array.includes(id) ? '#FFFFFF' : '#D4D4D4'};
    border: 1px solid #D4D4D4;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    cursor: pointer;
`