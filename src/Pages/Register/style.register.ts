import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #divTitle {
        width: 296px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            margin-right: 15px;
            width: 30%;
            background-color: #868E96;
            border: 1px solid #868E96;
            
    }
    }

    h1 {
        color: #FF577F;
        padding: 20px
    }

   #divRegister {
    width: 296px;
    height: 650px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;

    span{
        margin-top: -2px;
        width: 90%;
        text-align: left;
        padding-bottom: 10px;
        font-size: 10px;
        color: #868E96;
    }
    
    .errors{
        color: #E83F5B;
    }

    button {
        background-color: #868E96;
        border: 1px solid #868E96;
    }


    form {
        width: 85%;
        height: 83%;
        margin-top: -10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    label {
        width: 95%;
        text-align: left;
        font-size: 10px;
        color: #F8F9FA;
    }

   }

`;