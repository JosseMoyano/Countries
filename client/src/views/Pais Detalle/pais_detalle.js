import styled from 'styled-components';

export const StyledPaisDetalle = styled.div`

    display: flex;
    width: 90%;
    margin: 2rem;
    margin-left: 5rem;
    border-radius: 10px;

    .div_bienvenida {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: black;
        color: white;
        width: 50%;
        height: 690px;
        padding: 2rem;
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 25px 0px 0px 25px;

        .h1_titulo{
            font-size: 4rem;
            margin: 0;
            padding: 0.5rem;
            padding-top: 3rem;
            text-align: center;
        }
        .h2_titulo{
            font-size: 4rem;
            padding: 0.5rem;
            text-align: center;
        }

        .button{
            cursor: pointer;
            border: none;
        }
    }
    
    .div_detalle{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: darkgray;
        color: black;
        width: 90%;
        height: 690px;
        padding: 2rem;
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 0px 25px 25px 0px;

        .img{
            width: 70%;
            border-radius: 15px 15px 0px 0px;
            margin-bottom: 0rem;
            /* margin-top: 3rem; */
        }

        .div_detalle_texto{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 70%;
            background-color: white;
            padding-bottom: 1rem;
            border-radius: 0px 0px 15px 15px;

            .h2{
                margin: 0;
                padding-left: 0.75rem;
            }
        }
    }

`