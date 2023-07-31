import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
}
body{
    background-color: #ffffff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,;
}
a{
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}
input, button{
    background-color: transparent;
    border: none;
    outline: none;
}
ol,ul,li{
    list-style: none;
}
img{
    display: block;
    width: 100%;
    height: 100%;
}
`;

export default GlobalStyle;
