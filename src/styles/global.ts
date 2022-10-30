import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        height: 100vh;
        background-color: #000000;
        color: #ffffff;
        text-align: center;
    }
    body, input,button{
        font-size: 1rem;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
    }

    a{
        text-decoration: none;
    }
    
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    
`