import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-light);
  color: var(--grey-text);
  margin-top: ${convertToRem(60)};

  width: 100%;
  height: ${convertToRem(60)};

  p {
    font-size: 10px;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    position: fixed;
    bottom: 0;
    height: 40px;

    p {
      font-size: 14px;
    }
  }
`;
