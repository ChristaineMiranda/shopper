import styled from "styled-components";
import Modal from 'react-modal';

export const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
 `;

export const ModalStyle = {
    content: {        
        width: '80%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: '#e4ffc3'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: '0',
        bottom: '0',
        rigth:'0',
        left:'0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',     
    }
};

export const ContentModal = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
&>:nth-child(1){
    background-color: #1E2044;
    color: #FFFFFF;
    font-size: 14px;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-bottom: 8px;
    @media(max-width:768px){
        font-size: 11px;
        overflow-wrap: break-word;

    }
}
`;

export const LineTable = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    border-bottom: 1px solid #000000;
    height: 45px;

    div{
        width: 16%;
        max-height:80px;
        display: flex;
        align-items: center;
        justify-content: center;  
        @media(max-width: 768px){
            overflow-y: hidden;
        }      
    }

    @media(max-width: 768px){
        font-size: 10px;
        height: 80px;
    }
`;

export const Button = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: ${props => props.disabled ? "#97ce92" : "#036b03"};
    color: #FFFFFF;
`;

