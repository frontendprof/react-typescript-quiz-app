
import styled, {createGlobalStyle} from "styled-components";

// <span>Photo by <a href="https://unsplash.com/@randomlies?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ashim D’Silva</a> on <a href="https://unsplash.com/t/architecture?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
import BGImage from "./img/ashim-d-silva-3Ijt7UkSBYE-unsplash.jpg";


export const GlobalStyle=createGlobalStyle`
    html{
        height:100%;
    }

    body{
        background-image:url(${BGImage});
        background-size:cover;
        margin:0;
        padding:5px 20px;
        display:flex;
        justify-content:center;
    }
  

    *{
        box-sizing:border-box;
        font-family:helvetica, sans-serif;
    }
`;

export const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    >p{
        color:orangered;
    }

    .score{
        color:orangered;
        font-size:2rem;
        margin:0;
    }

    h1{
        background-size:100%;
        color:gold;
        font-size:70px;
        text-align:center;
        background-clip:text;
        filter:drop-shadow(2px 2px #0085a3);
        font-weight:400;
        margin:20px;
    }

    .start, .next{
        cursor:pointer;
        background:linear-gradient(180deg,#fff,#ffcc91);
        border:2px solid #d38558;
        box-shadow:0 5px 10px rgba(0,0,0,.25);
        border-radius:10px;
        height:40px;
        margin:20px 0;
        padding:0 40px;
    }

    .start{
        max-width:200px;
    }
`;
