import styled from "styled-components"
import Header from "../../components/Header";
import FooterComponent from "../../components/FooterComponent";
import CadastrarNovoHabito from "../../components/RegisterNewHabit";
import DontHvHabits from "../../components/DontHvHabits";
import TitlePlus from "../../components/TitlePlus";

export default function Habits(props) {

    const { screen1, 
        setScreen1, 
        screen2, 
        setScreen2 } = props

    return (
        <>

            <Header />

            <TitlePlus title={"Meus hábitos"} display={"block"} onClick={() => {
                setScreen1(false);
                setScreen2(true);}}
            />


            <HabitsConteiner>

                {screen1 && (<DontHvHabits />)}

                {screen2 && (
                    <>
                        <CadastrarNovoHabito setScreen1={setScreen1} screen2={screen2} setScreen2={setScreen2} />
                        <DontHvHabits />
                    </>)}

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