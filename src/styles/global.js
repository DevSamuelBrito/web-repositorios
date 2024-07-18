import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html,body,#root{
    min-height: 100%;
}

body{
    background: #0D2336;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
}

body,input,button{
    colro:#222;
    font-size:14px;
    font-family:Arial, sans-serif;
}

button{
    cursor: pointer;
}
`;