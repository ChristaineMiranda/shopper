import styled from "styled-components";


export const Title = styled.div`
color: #FFFFFF;
margin-bottom: 20px;
`;
export const Choice = styled.div`
width:100%;
height: 25%;
background-color: #55e955;
display: flex;
justify-content: center;
align-items: center;
`;
export const BoxFileName = styled.div`
color:green;
background-color: aliceblue;
height: 39%;
width: 50%;
overflow: hidden;
border-radius: 3px;
font-weight: 100;
font-size: 14px;
border-width: 1px;
padding-left: 10px;
display: flex;
align-items: center;

`;
export const Principal = styled.div`
width: 50%;
background-color: #1E2044;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center; 
@media (max-width: 768px){
    width: 100vw;
    height: 100vh;
} 
`;
export const ButtonChoiceFile = styled.button`
width: 30%;
height: 40%;
background-color: aliceblue;
border-color: #008000;
border-radius: 5px;
border-width: 1px;
background-color: #FFFFFF;
`;
export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
export const ButtonValidation = styled.button`
width: 50%;
height: 32px;
border-radius: 5px;
margin-top: 20px;
background-color: #FFFFFF;
font-weight: 600;
`;

