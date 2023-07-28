import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
}
`;
