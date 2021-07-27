import styled from "styled-components";

export const StyledHome = styled.div`

    .header {
        width: 100%;
        background-color: #0077B6;
        padding-bottom: 15px;
        padding-top: 80px;
        border-radius: 0px 0px 35px 35px;
        box-shadow: rgba(0,0,0,0.4) 0px 20px 35px;
        margin-bottom: 3rem;

        .div_busqueda {
            display: flex;
            justify-content: center;

            .input_busqueda{
                width: 50%;
                height: 35px;
                border: none;
                outline: none;
                border-radius: 15px 0px 0px 15px;
                padding-left: 1rem;
            }

            .button_busqueda{
                width: 7%;
                background-color: #03045E;
                color:white;
                padding: 0.25rem;
                border: none;
                border-radius: 0px 15px 15px 0px;

                &:hover{
                    cursor: pointer;
                }
            }
        }

        .div_filtros{
            background-color: #00B4D8;
            display: flex;
            justify-content: space-evenly;
            margin-top: 1rem;
            margin-left: 21%;
            margin-right: 21%;
            margin-bottom: 0.2rem;
            padding: 0.2rem;
            align-items: center;
            border-radius: 25px;

            .div_button{
                display: flex;
                align-content: center;
                justify-content: center;
                /* border: 1px solid black; */
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
                    background-color: #0077B6;
                    color:white;
                    border: none;

                    &:hover{
                        cursor: pointer;
                        border-bottom-color: white;
                        border-bottom-style: solid;
                        border-bottom-width: 1px;
                        padding-bottom: 7px;
                    }
                }
                    .button_inicio{
                        border-radius: 15px 0px 0px 15px;
                    }
                    .button_fin{
                        border-radius: 0px 15px 15px 0px;
                    }

            }
        }
    }

    .div_filtros2 {
        margin: 0%;
        padding: 0;
        margin-left: 2%;
        width: 96%;
        background-color: #0096C7;
        min-height: 60px;
        border-radius: 0px 0px 25px 25px;
        box-shadow: rgba(0,0,0,0.4) 0px 20px 35px;

        .div_filtro_continente {
            background-color: #0096C7;
            display: flex;
            justify-content: space-evenly;
            margin-top: -3rem;
            margin-left: 21%;
            margin-right: 21%;
            margin-bottom: 3rem;
            padding: 0.2rem;
            align-items: center;
            color: white;


            div{
                text-align: center;
                border: 1px solid white;
                min-width: 100px;
                width: auto;
                height: 21px;
                padding: 0.5rem;
                margin: 0.5rem;
                border-radius: 25px;
                box-sizing: content-box;



                label{
                    cursor: pointer;
                    &:hover{
                    color: #03045E;

                    }
                }
            }

            .link2{
                color: white;
                &:hover{
                    text-decoration: none;
                    color: #03045E;
                }
            }

        }

        .button_div{
            &:hover{
                cursor: pointer;
            }
        }
        

        .div_filtro_ABC2{
            background-color: #0096C7;
            margin: 0%;
            padding: 0;
            margin-left: 2%;
            width: 96%;
            height: 60px;
            border-radius: 0px 0px 25px 25px;
            display: flex;
            justify-content: space-evenly;
            margin-top: -48px;
            margin-bottom: 4%;

            .container_ABC{
                display: flex;
                width: 35%;
                justify-content: space-evenly;

                div{
                    text-align: center;
                    border: 1px solid white;
                    min-width: 100px;
                    width: auto;
                    height: 21px;
                    padding: 0.5rem;
                    margin: 0.5rem;
                    border-radius: 25px;
                    box-sizing: content-box;
                    color: white;

                    .input_ABC{
                        &:hover{
                            cursor: pointer;
                        }
                    }
                
                    
                }
            }

        }
    

        .div_filtro_ABC{
            background-color: #0096C7;
            margin: 0%;
            padding: 0;
            margin-left: 2%;
            width: 96%;
            height: 60px;
            border-radius: 0px 0px 25px 25px;
            display: flex;
            justify-content: space-evenly;
            margin-top: -3%;
            margin-bottom: 4%;

            .container_ABC{
                display: flex;
                width: 35%;
                justify-content: space-evenly;

                div{
                    text-align: center;
                    border: 1px solid white;
                    min-width: 100px;
                    width: auto;
                    height: 21px;
                    padding: 0.5rem;
                    margin: 0.5rem;
                    border-radius: 25px;
                    box-sizing: content-box;
                    color: white;

                    label{
                    &:hover{
                        cursor: pointer;
                    }
                }
                }
            }

        }

    }
    .div_renderizado {
        background-color: transparent;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: -2rem;
        margin-bottom: 2rem;
    }
            
`