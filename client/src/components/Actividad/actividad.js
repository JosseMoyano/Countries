import styled from 'styled-components';

export const StyledActividad = styled.div`
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, 
                    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        margin: 3rem;
        /* margin-top:0; */
        padding: 1rem;
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 25%;
        height: 300px;
        border-radius: 25px;
        box-sizing: content-box;

        .button_corazon_x{
            display: flex;
            justify-content: flex-end;
        }

        h1{
            text-align: center;
            margin: 0.5rem;
        }

        .div_banderas{
            display: flex;
            justify-content: center;
            .div_bandera{
                width: 50px;
                height: 50px;
                background-color: black;
                margin: 0.5rem;
                border-radius: 100%;
                display: flex;
    
                button{
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: none;
                    margin: 0;
                    padding: 0;
                    .img{
                        width: 50px;
                                height: 50px;
                                border-radius: 100%
                    }
                }
            }
        }

        .div_texto{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0.5rem;
            margin-top: 1rem;
            p{
                margin: 8px;
            }
        }


`