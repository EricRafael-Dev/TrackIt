import styled from 'styled-components';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import axios from 'axios';


export default function RenderingHabits() {

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    const { login, habitList, setHabitList } = useContext(LoginContext);
    const token = login.token;

    function deletar(id) {
        const habitId = id;
        const authToken = token;

        const confirmDelete = window.confirm("Tem certeza de que deseja excluir este hábito?");

        if (confirmDelete) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                })
                .then(response => {
                    console.log('Hábito excluído com sucesso!');
                    const updatedHabits = habitList.filter(habit => habit.id !== habitId);
                    setHabitList(updatedHabits);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao excluir o hábito:', error);
                });
        }
    }


        return (
            <ListContainer>
                {habitList.map((habit) => (

                    <HabitContainer key={habit.id}>

                        <TituloeDelete>

                            <h1>{habit.name}</h1>

                            <ion-icon onClick={() => deletar(habit.id)} name="trash-outline"></ion-icon>

                        </TituloeDelete>

                        <Containerdays>

                            {days.map((day, index) => (

                                <EachDay

                                    key={index}

                                    id={index}

                                    array={habit.days}

                                >{day}</EachDay>
                            )
                            )}

                        </Containerdays>


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
`
    const HabitContainer = styled.div`
    height: 91px;
    width: calc(100vw - 34px);
    border-radius: 5px;
    background: #FFFFFF;
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-bottom: 10px;
`
    const TituloeDelete = styled.div`
    height: 25px;
    width: calc(100vw - 64px);
    border-radius: 5px;
    margin-top:13px;
    margin-bottom:8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
    height: 25px;
    width: auto;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color:#666666;
    }
`
    const Containerdays = styled.div`
    width: calc(100vw - 64px);
    height: 38px;
    margin-bottom:29px;
    display:flex;
    justify-content: flex-start;
    align-items:flex-end;
`
    const EachDay = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 5px;
    margin-right:4px;
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
    background-color: ${({ array, id }) =>
            array.includes(id) ? '#CFCFCF' : '#FFFFFF'};
`