import styled from "styled-components"
import Header from "../../components/Header";
import FooterComponent from "../../components/FooterComponent";
import RegisterNewHabit from "../../components/RegisterNewHabit";
import DontHvHabits from "../../components/DontHvHabits";
import TitlePlus from "../../components/TitlePlus";
import { useEffect } from "react";
import { useContext } from 'react';
import { LoginContext } from "../../context/LoginContext";
import RenderingHabits from "../../components/RenderingHabits";
import axios from "axios";

export default function Habits(props) {

    const { screen1, 
        setScreen1, 
        screen2, 
        setScreen2 } = props

        const { login, habitList, setHabitList } = useContext(LoginContext);
        const token = login.token;
    
        useEffect(() => {
    
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
    
            const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    
            axios.get(url, config)
            .then((response) => {
                setHabitList(response.data);
                setScreen1(true);
            })
            .catch((erro) => {
                console.log(erro.response.data);
            })
    
        }, []);

    return (
        <>

            <Header />

            <TitlePlus title={"Meus hábitos"} display={"block"} margin={"28px"} onClick={() => {
                setScreen1(false);
                setScreen2(true);}}
            />


            <HabitsConteiner>

                {screen1 && habitList.length == 0 && (<DontHvHabits />)}
                
                {screen1 && habitList.length > 0 && (<RenderingHabits />)}

                {screen2 && habitList.length === 0 && (
                    <>
                        <RegisterNewHabit setScreen1={setScreen1} screen2={screen2} setScreen2={setScreen2} />
                        <DontHvHabits />
                    </>
                )}

                {screen2 && habitList.length > 0 && (
                    <>
                        <RegisterNewHabit setScreen1={setScreen1} screen2={screen2} setScreen2={setScreen2} />
                        <RenderingHabits />
                    </>
                )}

            </HabitsConteiner>

            <FooterComponent />

        </>
    )
}

const HabitsConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width:100%;
    height: auto;
    background-color:#F2F2F2;
`