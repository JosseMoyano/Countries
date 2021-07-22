import styled from "styled-components";

export const StyledHome = styled.div`

    .header {
        width: 100%;
        background-color: #480080;
        padding-bottom: 15px;
        padding-top: 70px;

        .div_busqueda {
            display: flex;
            justify-content: center;

            .input_busqueda{
                width: 50%;
                height: 25px;
            }

            .button_busqueda{
                width: 7%;
                background-color: #6001AA;
                color:white;
                padding: 0.25rem;
                border-color: #bd00ff;
            }
        }

        .div_filtros{
            background-color: blueviolet;
            display: flex;
            justify-content: space-evenly;
            margin-top: 1rem;
            margin-left: 21%;
            margin-right: 21%;
            margin-bottom: 1rem;
            padding: 0.5rem;
            align-items: center;

            .div_button{
                display: flex;
                align-content: center;
                justify-content: center;
                border: 1px solid black;
                width: 100%;
                margin: 0;
                padding: 0;

                .button_filtros{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.5rem;
                    width: 100%;
                    height: auto;
                    background-color: #6001AA;
                    border-color: #bd00ff;
                    color:white;
                }
            }
        }
    }

    .div_filtro_continente{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: aqua;
        margin-top: 20px;
        margin-left: 21%;
        margin-right: 21%;
        padding: 1rem;
        height: 16px;
    }

    .div_ABC{
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: aqua;
        margin-top: 20px;
        margin-left: 21%;
        margin-right: 21%;
        padding: 1rem;
        height: 16px;
    }

    .div_renderizado {
        background-color: white;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
            
`