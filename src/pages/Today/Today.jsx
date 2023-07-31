import Header from "../../components/Header"
import TitlePlus from "../../components/TitlePlus"
import FooterComponent from "../../components/FooterComponent"
import TodayHabit from "../../components/TodayHabits";
import styled from 'styled-components';
import { useContext } from 'react';
import { LoginContext } from "../../context/LoginContext";
import { useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Today() {

    const { login, TodayHabits, setTodayHabits } = useContext(LoginContext);
    const token = login.token;

    dayjs.locale('pt-br');
    const weekDays = dayjs().format('dddd').replace('-feira', '');
    const firstChacter = weekDays.charAt(0).toUpperCase();
    const rest = weekDays.slice(1);
    const dailyWeek = firstChacter + rest;
    const date = dayjs().format('DD/MM');

    useEffect(() => {

        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        
        axios.get(url, config)
        .then((resposta) => {
            setTodayHabits(resposta.data);
            console.log(resposta.data, "lista");
            
        })
        .catch((erro) => {
            console.log(erro);
        })

    }, []);

    return (
        <>

            <Header />

            <TitlePlus titulo={
                dailyWeek + ", " + date} display={"none"} margin={"0px"} />

            <Central>

                <FinishedHabits>Nenhum hábito concluído ainda</FinishedHabits>

                <TodayHabit />

            </Central>

            <FooterComponent />

        </>

    )
}

const FinishedHabits = styled.div`
    width: calc(100vw - 34px);
    height: 22px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #BABABA;
`
const Central = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`