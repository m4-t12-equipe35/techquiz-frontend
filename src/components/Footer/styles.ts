import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-light);
    color: var(--grey-text);

    width: 100%;
    height: 60px;

    p{
        font-size: 10px;
        font-weight: 300;
    }

    @media (min-width: 768px) {
      
        height: 40px;
        
        p{
            font-size: 14px;
        }
    }
`