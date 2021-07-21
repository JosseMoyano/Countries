import styled from "styled-components";

export const StyledPais = styled.div`
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, 
                    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        /* box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px; */
        margin: 3rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 25%;
        height: 365px;
        border-radius: 10px;
        box-sizing: content-box;

    .img_pais{
        width: 100%;
        max-height: 260px;
        /* height: 258px; */
        border-radius: 10px;
    }

    .nombre_pais{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .navlink{
            text-decoration: none;
            color: black;

            &:hover {
                color: #6001AA;
            }
        }

        .h2_paisycontinente{
            text-align: center;
            margin: 1rem;
        }
    }

    .button_pais {
        margin-top: -0.5rem;
        margin-bottom: 0.5rem;
        display: flex;
	    justify-content: flex-end;

        .button_corazon{
            width: 30px;
            height: 30px;
            border: none;
            background-color: transparent;

            &:hover{
                cursor: pointer;
            }
            
            .corazon{
                color: red;
            }
        }
    }
    

`