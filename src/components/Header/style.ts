import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

interface IButtonStyles {
    login: string
}

export const HeaderStyled = styled.header`

    width: 100%;
    height: ${convertToRem(60)};
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${convertToRem(10)};
    margin-bottom: ${convertToRem(60)};

    nav {
        width: 90%;
        max-width: ${convertToRem(1600)};
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span{
        cursor: pointer;
        font-size: ${convertToRem(20)};
        font-weight: 600;
        color: var(--white);
    }

`

export const ButtonStyled = styled.button<IButtonStyles>`

    background-color: ${({ login }) => login === 'login' ? "var(--green)" : "var(--soft-pink)"};
    cursor: pointer;
    border-color: ${({ login }) => login === 'login' ? "var(--green)" : "var(--soft-pink)"};
    border: none;
    width: ${convertToRem(80)};
    height: ${convertToRem(35)};
    display: flex;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    color: var(--black);

`
