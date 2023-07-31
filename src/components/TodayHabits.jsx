import styled from 'styled-components';
import { useContext, useState } from 'react';
import { LoginContext } from '../context/LoginContext';
import check from '../assets/check.svg'
import axios from 'axios';
import { useEffect } from 'react';

export default function TodayHabit() {

    const { login, todayHabits, setTodayHabits, percent, setPercent } = useContext(LoginContext);
    const token = login.token;
    const [markedHabits, setMarkedHabits] = useState([]);
    



    useEffect(() => {
        const markedHabits = todayHabits.reduce(
            (i, habit) => (habit.done ? i + 1 : i),
            0
        );
        setMarkedHabits(markedHabits);
    }, [todayHabits]);



    useEffect(() => {
        const progress = (markedHabits / todayHabits.length) * 100;
        const roundedProgress = Math.round(progress);

        const timer = setTimeout(() => {
          setPercent(roundedProgress);
        }, 0);

        return () => clearTimeout(timer);
      }, [markedHabits, todayHabits.length]);



    function markHabit(id, marked) {

        const habitId = id;

        const body = {};

        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        };

        if (marked === false) {


           axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`, body, config)
            .then(() => {
                const updatedHabits = todayHabits.map(habit => {
                    if (habit.id === habitId) {
                        return {
                            ...habit,
                            done: true
                        };
                    }
                    return habit;
                });
                setTodayHabits(updatedHabits);
                console.log("Hábito marcado com sucesso!");
            })
            .catch(() => {
                console.error("Ocorreu um erro ao marcar o hábito:");
            });



        } else {


            axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`,
                body,
                config
            )
            .then(() => {
                const updatedHabits = todayHabits.map(habit => {
                    if (habit.id === habitId) {
                        return {
                            ...habit,
                            done: false
                        };
                    }
                    return habit;
                });
                setTodayHabits(updatedHabits);
                console.log("Hábito desmarcado com sucesso!");
            })
            .catch(() => {
                console.error("Ocorreu um erro ao desmarcar o hábito:");
            });
        }
    }
    

    const eachHabit = todayHabits.map(habit => {
        
        return (
        <HabitContainer data-test="today-habit-container" key={habit.id}>
            <Title>

                <h1 data-test="today-habit-name">{habit.name}</h1>
                <p>
                    <span data-test="today-habit-sequence">Sequência atual: <Span1 isSelect={habit.done === true} isTrue={habit.currentSequence === habit.highestSequence && habit.currentSequence > 0}> {habit.currentSequence} dias </Span1></span>
                    <span data-test="today-habit-record">Seu recorde: <Span2 isSelect={habit.done === true} isTrue={habit.currentSequence === habit.highestSequence && habit.currentSequence > 0}>{habit.highestSequence} dias</Span2></span>
                </p>
            </Title>

            <Check data-test="today-habit-check-btn" done={habit.done} onClick={() => markHabit(habit.id, habit.done)}>
                <Image src={check}></Image>
            </Check>

        </HabitContainer>

        )})

    return (

        <ListContainer>

            {eachHabit}

        </ListContainer>

    )
}

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width:100%;
    height: auto;
    margin-bottom:100px;
    background-color:#F2F2F2;
    margin-top:28px;
`
const HabitContainer = styled.div`
    height: 94px;
    width: calc(100vw - 34px);
    border-radius: 5px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 10px;
    padding-right:15px;
`
const Title = styled.div`
    height: 64px;
    width: 300px;
    border-radius: 5px;
    margin-top:13px;
    margin-bottom:8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;
    h1{
    height: 25px;
    width: 300px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color:#666666;
    }
    p{
    display: flex;
    flex-direction: column;
    width: auto;
    height:32px;
    font-family: Lexend Deca;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
    margin-top: 7px;
    }
`
const Check = styled.button`
    height: 69px;
    width: 69px;
    border-radius: 5px;
    border: 1px solid ${({ done }) => (done ? '#8FC549' : '#E7E7E7')};
    background-color: ${({ done }) => (done ? '#8FC549' : '#EBEBEB')};
    display: flex;
    justify-content:center;
    align-items: center;
`
const Image = styled.img`
    height: 28px;
    width: 35.09px;
`
const Span1 = styled.span`
    color: ${({ isSelect, isTrue }) => (isSelect || isTrue ? '#8FC549' : '#666666')};
`
const Span2 = styled.span`
    color: ${({ isTrue }) => (isTrue ? '#8FC549' : '#666666')};
`