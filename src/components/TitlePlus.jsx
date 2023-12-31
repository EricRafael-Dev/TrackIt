import styled from 'styled-components';

export default function TitlePlus(props) {

    const { title, 
        onClick, 
        display, 
        margin } = props;
    
    

    return (
        <Body display={display} margin={margin}>

            <h1>{title}</h1>

            <button data-test="habit-create-btn" onClick={onClick}>+</button>

        </Body>
    )
}

const Body = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    text-align: center;
    margin-top:98px;
    padding-left:17px;
    padding-right:17px;
    margin-bottom: ${props => props.margin};
    background-color:#F2F2F2;
    
    h1{
        color:#126BA5;
        height: 29px;
        width: auto;
        font-family: Lexend Deca;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }
    button{
        height: 35px;
        width: 40px;
        border-radius: 4.64px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-family: Lexend Deca;
        font-size: 27px;
        font-weight: 400;
        letter-spacing: 0em;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        display: ${props => props.display};
        border: none
    }
`