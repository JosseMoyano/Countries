import styled from "styled-components";

export const StyledNav = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: transparent;
    height: 55px;
    position: fixed;

    .navlink {
        margin-left: 1rem;
        margin-right: 1rem;
        text-decoration: none;
        /* background-color: #6001AA; */
        color: white;
        margin-top: 0.5rem;
        padding: 0.5rem;
        background: linear-gradient(to right, #732fdf, #bd00ff);
        
        &:hover {
            background: linear-gradient(to right, #bd00ff, #732fdf);
        }
    }

`