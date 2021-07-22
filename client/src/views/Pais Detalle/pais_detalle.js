import styled from 'styled-components';

export const StyledPaisDetalle = styled.div`

    background-color: #ecf0f3;
    width: 62%;
    max-height: 692px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    margin-left: 18%;
    padding: 1rem;
    border-radius: 25px;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;

    

    .div_bienvenida {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: black;
        color: white;
        width:92%;
        /* height: 690px; */
        padding: 2rem;
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 25px 25px 0px 0px;
        justify-content: center;

        .h1_titulo{
            font-size: 4rem;
            margin: 0;
            padding: 0.5rem;
            /* padding-top: 3rem; */
            text-align: center;
        }
        .h2_titulo{
            font-size: 4rem;
            padding: 0.5rem;
            text-align: center;
        }

        
    }
    
    .div_detalle{
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        justify-content: space-evenly;
        background-color: #fefefe;
        color: black;
        width: 92%;
        height: 690px;
        padding: 2rem;
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 0px 0px 25px 25px;
        /* box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff; */


        .button{
            cursor: pointer;
            border: none;
        }

        .container_detalle{
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 90%;
            margin: 0;
            padding: 0;
            border-radius: 25px;
            box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;
            background: transparent;
            .img{
                width: 60%;
                max-height: 307px;
                border-radius: 25px 0px 0px 25px;
                margin-bottom: 0rem;
                /* margin-top: 3rem; */
            }
    
            .div_detalle_texto{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: flex-start;
                width: 74%;
                height: 307px;
    
                background-color: #f1f3f5;
                /* padding-bottom: 1rem; */
                border-radius: 0px 25px 25px 0px;
    
                .h2{
                    margin: 0;
                    padding-left: 0.75rem;
                }
            }
        }

    }

`