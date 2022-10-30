import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #FF577F;
        padding: 20px
    }

   #divLogin {
    width: 296px;
    height: 403px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;


    form {
        width: 85%;
        height: 60%;
        margin-top: -10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    label {
        width: 90%;
        text-align: left;
        font-size: 10px;
        color: #F8F9FA;
    }

    span{
        width: 90%;
        text-align: left;
        margin-top: -10px;
        padding-bottom: 10px;
        font-size: 10px;
        color: #868E96;
    }
    
    .errors{
        color: #E83F5B;
    }
   }

   #divRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;

    span{
        padding-bottom: 10px;
        font-size: 10px;
        color: #868E96;
    }

    button {
        background-color: #868E96;
        border: 1px solid #868E96;
    }
   }

`;