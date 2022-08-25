import styled from 'styled-components'

export const StyledButton = styled.button`
    text-decoration: none;
    font-weight: 600;
    font-size: normal;
    color: #ffffff;
    border-radius: 6px;
    border: 2px solid;
    cursor:pointer;
    transition: 0.2s ease-in-out;
    background-color:var(--backgroundColor);
    &:hover {
        color: black;
    } 
`;