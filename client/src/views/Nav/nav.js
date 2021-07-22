import styled from "styled-components";

export const StyledNav = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    background-color: #03045E;
    height: 55px;
    position: fixed;
    align-items: center;
    margin-bottom: 0.5rem;
    box-shadow: rgba(0,0,0,0.4) 0px 20px 35px;

    .navlink {
        margin-left: 0.5rem;
        min-width: 57px;
        padding: 0.5rem;
        text-align: center;
        border-radius: 10px;
        text-decoration: none;
        color: white;
        background: linear-gradient(to right, #0077B6, #00B4D8);
        
        &:hover {
            background: linear-gradient(to right, #00B4D8, #0077B6);
        }
    }

`