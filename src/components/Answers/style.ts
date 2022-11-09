import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const AnswersStyled = styled.div`
    
    display:flex;
    flex-direction: column;

    .main{

    display: flex;

    }
    .mainRight{

        display: flex;
        flex-direction: column;

        width: 50% ;
        height: ${convertToRem(400)}; 

       h1{

        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: ${convertToRem(36)};
        color: var(--black);
       } 
       .buttonAnswers{
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
        background-color: var(--white);
        color: var(--black);
        font-size: ${convertToRem(20)};
        transition: 0.3s;

        :hover{
        background-color: var(--blue-light);
        color: var(--white);
        }
        
        >div{

            display: flex;
            align-items: center;
            justify-content: center;

            width: ${convertToRem(35)};
            height: ${convertToRem(35)};


            background-color: var(--blue-light);
           
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

        gap:${convertToRem(15)}
    }
    
    .bottonButtons{
        display: flex;
        align-items: center;

        width: ${convertToRem(150)};
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

        gap: ${convertToRem(20)};
    }


`

    
    
