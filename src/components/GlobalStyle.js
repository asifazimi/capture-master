import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1700px) {
            font-size: 67%;
        }

    }


    body {
        background-color: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.5s ease;

        &:hover {
            background: #23d997;
            color: #fff;
        }
    }

    a {
        font-size: 1.1rem;
    }
    
    span {
        font-weight: bold;
        color: #23d997;
    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }

    h3 {
        color: #fff;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
    }

    p {
        color: #ccc;
        padding: 3rem 0rem;
        font-size: 1.4rem;
        line-height: 150%;
    }

`;

export default GlobalStyle;
