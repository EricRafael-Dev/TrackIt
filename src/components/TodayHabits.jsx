import styled from 'styled-components';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import check from '../assets/check.svg'

export default function TodayHabit() {

    const { login, todayHabits, setTodayHabits } = useContext(LoginContext);
    const token = login.token;

    return (

        <ListContainer>

            {todayHabits.map((habit) => (

                <HabitContainer key={habit.id}>
                    <Titulo>

                        <h1>{habit.name}</h1>
                        <p>
                            Sequência atual: {habit.currentSequence} dias <br />
                            Seu recorde: {habit.highestSequence} dias
                        </p>
                    </Titulo>

                    <Check>
                        <Image src={check}></Image>
                    </Check>

                </HabitContainer>

            )
            )}

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
const Titulo = styled.div`
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
const Check = styled.div`
    height: 69px;
    width: 69px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    background-color: #EBEBEB;
    display: flex;
    justify-content:center;
    align-items: center;
`
const Image = styled.img`
    height: 28px;
    width: 35.09px;
`