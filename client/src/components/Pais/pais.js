import styled from "styled-components";

export const StyledPais = styled.div`
        /* box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, 
                    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
        box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
        margin: 3rem;
        margin-bottom: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 25%;
        height: 300px;
        border-radius: 25px;
        box-sizing: content-box;
        align-items: center;
        /* justify-content: space-evenly; */
        justify-content: center;
        background-color: #ecf0f3;

    .img_pais{
        width: 80%;
        max-height: 220px;
        /* max-height: 260px; */
        border-radius: 25px;
        margin-top: -1rem;
    }

    .nombre_pais{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .navlink{
            text-decoration: none;
            color: black;
        }

        .h2_paisycontinente{
            text-align: center;
            margin: 1rem;
        }
    }

    .div_container_button{
        display: flex;
        margin-left: 90%;
        padding-top: 0rem;

        .button_pais {
            margin-top: -0.5rem;
            /* padding-bottom: -3rem; */
            display: flex;
	        justify-content: flex-end;
            margin-top: -1rem;
            /* position: absolute; */

            .button_corazon{
                width: 30px;
                height: 30px;
                border: none;
                background-color: transparent;
                margin-top: 2rem;
                /* position: relative;
                top: -125px;
                right: -180px; */

                &:hover{
                    cursor: pointer;
                }

                .corazon{
                    color: red;
                }
            }
        }
}

    

`