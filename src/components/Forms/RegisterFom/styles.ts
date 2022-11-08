import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  gap: 0.813rem;

  .formHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28.125rem;
    height: 3.188em;

    border-bottom: 2px solid #117cb9;
    border-radius: 10px 10px 0px 0px;
  }
  .login,
  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.375rem;
    height: 3.188rem;
  }

  .login {
    border-radius: 10px 0px 0px 0px;
  }

  .register {
    border-radius: 0px 10px 0px 0px;
  }

  .formHeaderButton {
    display: flex;
    border: none;
    background: none;

    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  .formContainer {
    display: column;
    align-self: center;
    margin: 2.5rem 6.25rem;
  }

  @media screen and (max-width: 520px) {
    width: 100%;

    .formHeader {
      width: 100%;
    }

    .formContainer {
      width: 80%;
    }
  }

  @media screen and (max-width: 1105px) {
    flex-direction: column;

    .formHeader {
      display: flex;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Form = styled.form`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400&family=Inter:wght@300;400;500;700&family=Montserrat:wght@400;700&family=Nunito:wght@700&family=Poppins:ital,wght@0,200;0,500;1,300&family=Righteous&family=Roboto+Slab&family=Roboto:wght@100;400&family=Sarala&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 22.813rem;

  width: 28.125rem;

  gap: 0.5rem;
  padding: 2.188rem;

  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  label {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    width: 21.563rem;
  }

  input,
  select {
    width: 21.563rem;
    height: 2.813rem;
    padding-left: 0.813rem;
    border: none;

    background: var(--grey-lighter);
    border-radius: 20px;
  }

  .formButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15.313rem;
    height: 3.188rem;
    border: none;
    margin-top: 2.188rem;

    color: var(--white);
    background: var(--grey-dark);
    border-radius: 30px;
    cursor: pointer;

    &:hover {
      background-color: var(--blue);
    }
  }

  @media screen and (max-width: 520px) {
    width: 100%;

    label,
    input,
    select {
      width: 100%;
    }
  }

  @media screen and (max-width: 1105px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MsgErro = styled.div`
  width: 21.563rem;
  display: flex;

  font-family: "Inter", sans-serif;
  font-size: x-small;
  font-weight: bold;
  color: var(--blue-darker);
`;

export const FormImg = styled.img`
  display: flex;
  align-self: center;
  width: 540px;
  height: 401px;

  @media screen and (max-width: 520px) {
    display: none;
  }

  @media screen and (max-width: 1105px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
  }

  @media screen and (max-width: 1278px) {
    width: 40%;
    height: 50%;
  }
`;
