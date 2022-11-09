import styled from 'styled-components';
import convertToRem from '../../utils/convertToRem';

export const QuestionsMain = styled.main`
  width: 90%;
  max-width: ${convertToRem(1600)};
  height: 100%;
  margin: 0 auto;
  margin-bottom: ${convertToRem(100)};
  display: flex;
  justify-content: space-between;
  gap: ${convertToRem(65)};
`

export const QuestionsLeft = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: ${convertToRem(160)};

  img {
    width: 100%;
  }
`

export const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${convertToRem(8)};
  width: 100%;
  height: ${convertToRem(120)};
  padding: 0 10%;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--blue-light);
  color: var(--white);
  
  span {
    font-size: ${convertToRem(16)};
    color: var(--pearl);
  }

  h2 {
    font-size: ${convertToRem(24)};
    font-weight: 600;
    background-color: var(--blue);
    padding: 4px 8px;
    width: 100%;
    border-radius: 12px;
    text-align: center;
  }
`

export const QuestionsRight = styled.div`
  width: 75%;
`

export const QuestionsList = styled.ul`
  max-width: ${convertToRem(1200)};
  display: flex;
  flex-direction: column;
  gap: ${convertToRem(30)};
`

export const QuestionItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: ${convertToRem(120)};
  padding: 0 5%;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  color: var(--black);
  font-size: ${convertToRem(20)};
  transition: 0.3s;

  :hover{
  background-color: var(--blue-light);
  color: var(--white);
  padding: 0 7%;
  }
`