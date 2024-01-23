import styled from "styled-components";

const ButtonList = styled.ul`
display: flex;
gap: ${p => p.theme.space[4]}px;
`
const Button = styled.button`
border-radius:10%;
border: 1px solid ${p => p.theme.colors.accent};
background-color: ${p => p.theme.colors.white} ;
text-transform:capitalize;
`

export { ButtonList, Button }