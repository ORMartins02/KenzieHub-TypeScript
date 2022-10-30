import styled from "styled-components";

export const DivHeader = styled.header`
    width: 100vh;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;

    h1 {
        color: #FF577F;
    }

    div {
        margin-top: 25px;
    }

    hr {
        margin-top: 50px;
        color: aliceblue;
        width: 100%;
    }

    #headerHome {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            width: 80px;
            background-color: #808080;
            border: #808080;
        }
    }

    #userHome {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        span {
            color: #868E96;
        }

    }

    @media screen and (max-width: 700px){
        #userHome {
        flex-direction: column;
        }
}

`;