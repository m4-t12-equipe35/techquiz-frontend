import styled, { css } from "styled-components";

interface IButtonProps {
  color: string;
}

export const ButtonColor = styled.button<IButtonProps>`
  display: flex;
  border: none;
  background: none;

  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 700;

  ${(props) => {
    switch (props.color) {
      case "blue":
        return css`
          color: #ffffff;
        `;
      case "white":
        return css`
          color: #a39f9f;
        `;

      default:
        return false;
    }
  }}
`;
