import styled from 'styled-components';

export default function DontHvHabits() {

    return (
        <Habitsregistro>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Habitsregistro>
    )
}

const Habitsregistro = styled.div`
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