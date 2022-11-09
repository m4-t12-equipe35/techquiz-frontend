import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const AnswersStyled = styled.div`
    width: 90%;
    max-width: ${convertToRem(1600)};
    height: 100%;
    margin: 0 auto;
    display:flex;
    flex-direction: column;

    .main{

    display: flex;

    }
    .mainRight{

        display: flex;
        flex-direction: column;
        gap: ${convertToRem(50)};

        width: 50% ;
        height: ${convertToRem(400)}; 

       h1{
        font-size: ${convertToRem(30)};
        color: var(--black);
       }
       
       .buttonAnswers{
            cursor: pointer;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: ${convertToRem(15)};
            width: 100%;
            height: ${convertToRem(50)};
            padding: 0 5%;
            border: none;
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
        
        >div{

            display: flex;
            align-items: center;
            justify-content: center;

            width: ${convertToRem(35)};
            height: ${convertToRem(35)};


            background-color: var(--blue);
           
            border-radius: 50%;
           
            color: var(--white);
            font-weight: bold;
            font-size:  ${convertToRem(20)} ;

        }
        >h1{
            font-size:  ${convertToRem(20)}
        }
       }
    }
    .mainLeft{
        width: 50%;
        >img{
            width: 100%;
        }
    }

    .buttonIsCorrect{
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: ${convertToRem(15)};
        width: 100%;
        height: ${convertToRem(50)};
        padding: 0 10%;
        border: none;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: var(--green);
        color: var(--white);
        font-size: ${convertToRem(20)};
        transition: 0.3s;
        >div{

            display: flex;
            align-items: center;
            justify-content: center;

            width: ${convertToRem(35)};
            height: ${convertToRem(35)};


            background-color: var(--white);
            
           
            border-radius: 50%;
           
            color: var(--black);
            font-weight: bold;
            font-size:  ${convertToRem(20)} ;

        }
        >h1{
            font-size:  ${convertToRem(20)}
        }
       }


    .buttonIsIncorrect{
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: ${convertToRem(15)};
        width: 100%;
        height: ${convertToRem(50)};
        padding: 0 10%;
        border: none;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: var(--soft-pink);
        color: var(--white);
        font-size: ${convertToRem(20)};
        transition: 0.3s;
        >div{

            display: flex;
            align-items: center;
            justify-content: center;

            width: ${convertToRem(35)};
            height: ${convertToRem(35)};


            background-color: var(--white);
            
           
            border-radius: 50%;
           
            color: var(--black);
            font-weight: bold;
            font-size:  ${convertToRem(20)} ;

        }
        >h1{
            font-size:  ${convertToRem(20)}
        }
       }

    .answersDiv{
        display: flex;
        flex-direction: column;

        height: 80%;

        gap:${convertToRem(20)}
    }
    
    .bottonButtons{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        width: ${convertToRem(250)};
        height: ${convertToRem(50)};
        
        border-radius: 10px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: var(--white);

        color: var(--black);
        font-size: ${convertToRem(15)};

        transition: 0.3s;

        :hover{
        background-color: var(--blue-light);
        color: var(--white);
        }
    }
    .botton{
        display: flex;
        justify-content: center;
        margin-top: ${convertToRem(36)};
        gap: ${convertToRem(20)};
    }


`



