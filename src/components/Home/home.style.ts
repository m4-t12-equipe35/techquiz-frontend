import styled from "styled-components";

export const Overflow = styled.div`
  @media (max-width: 700px) {
    overflow-x: scroll;
  }
`;

export const BoxInfo = styled.div`
  background: #52b4eb;
  height: 47vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 70%;
    font-size: 24px;
    background: white;
    padding: 6rem;
    border-radius: 15px;
  }
`;

export const ListTechs = styled.ul`
  position: absolute;
  top: 25rem;
  left: 31%;
  display: flex;
  gap: 4rem;
  list-style: none;
  li {
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7rem;
    width: 13rem;
  }

  @media (max-width: 1470px) {
    left: 20%;
  }
  @media (max-width: 950px) {
    left: 5%;
  }
  @media (max-width: 800px) {
    left: 2%;
    gap: 1rem;
  }
`;

export const ContainerInfo = styled.div`
  background-color: #f3f3f3;
  height: 24.5rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 32rem;
    height: 14rem;
  }
  .imgCatPc {
    width: 32rem;
    height: 10rem;
  }

  @media (max-width: 1470px) {
    img {
      display: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 33rem;
    input {
      outline: none;
      border-radius: 50px;
      border: none;
      height: 1.3rem;
      width: 100%;
      padding: 1rem;
    }
    input::placeholder {
      color: lightgrey;
    }
    p {
      padding: 1rem;
      font-size: 28px;
    }
    div {
      border-radius: 50px;
      background-color: white;
      gap: 0;
      display: flex;
      flex-direction: row;
      backdrop-filter: blur(3px);
      button {
        background: #117cb9;
        border: none;
        border-radius: 50px;
        margin-right: 0.6rem;
        height: 2.1rem;
        width: 7rem;
        color: white;
        cursor: pointer;
      }
    }
  }
`;
