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

    const { login, todayHabits, setTodayHabits, percent } = useContext(LoginContext);
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
            
        })
        .catch((erro) => {
            console.log(erro);
        })

    }, []);

    return (
        <>

            <Header />

            <TitlePlus data-test="today" title={dailyWeek + ", " + date} display={"none"} margin={"0px"} />

            <Central>

                {percent === 0 && (

                    <FinishedHabits data-test="today-counter">Nenhum hábito concluído ainda</FinishedHabits>

                )}
                {percent > 0 && (

                    <FinishedHabits2 data-test="today-counter">{percent}% dos hábitos concluídos</FinishedHabits2>

                )}

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
const FinishedHabits2 = styled.div`
    width: calc(100vw - 34px);
    height: 22px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #8FC549;
`
const Central = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`