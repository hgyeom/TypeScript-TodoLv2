import { createGlobalStyle, DefaultTheme } from "styled-components";

// 타입스크립트에서 createGlbalStyle > < DefaultTheme >
export default createGlobalStyle<DefaultTheme>`
*{
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
}
`;
