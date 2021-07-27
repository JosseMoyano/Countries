import styled from "styled-components";

export const StyledPais = styled.div`
        box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
        margin: 3rem 3rem 1rem 3rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 25%;
        height: 300px;
        border-radius: 25px;
        box-sizing: content-box;
        background-color: #ecf0f3;

        .div_image{
            width: auto;
            height: 230px;
            display: flex;
            justify-content: center;
            align-content: center;
            .img_pais{
                width: 90%;
                max-height: 220px;
                border-radius: 25px;
            }
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

                .corazon_red{
                    color: red;
                }
                .corazon_gray{
                    color: gray;
                }

            }
        }
}

    

`