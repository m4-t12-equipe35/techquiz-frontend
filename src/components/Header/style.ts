import styled from "styled-components";

interface IButtonStyles {
    login:  string
}

export const HeaderStyled = styled.header`

    width: 100%;
    height: 60px;
    background-color: var(--blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    span{
        font-size: 20px;
        font-weight: 600;
        color: var(--white);
    }

`

export const ButtonStyled = styled.button<IButtonStyles>`

    background-color: ${({login}) => login === 'login' ? "#C6FB9D" : "#F8C6C6"};
    cursor: pointer;
    border-color: ${({login}) => login === 'login' ? "#C6FB9D" : "#F8C6C6"};
    border: none;
    width: 80px;
    height: 35px;
    display: flex;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    color: var(--black);

`
