import styled from 'styled-components';
import img from '../../utils/img/actividad.jpg'


export const StyledAñadirActividades = styled.div`
    background-image: url(${img});
    /* background-image: url(${img}); */
    background-size: cover;
    height: 741px;
    margin: -1rem;
    padding: 1rem;
    width: 99%;

    .div_container{
        width: 62%;
        height: 692px;
        background-color: #ecf0f3;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        margin: 1rem;
        margin-left: 18%;
        padding: 1rem;
        align-items: center;
        border-radius: 25px;
        box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;

        
        .div_container1{
        display: flex;
        flex-wrap: wrap;
        width: 96%;
        height: 30%;
        background-color: black;
        color: white;
        padding: 1rem;
        border-radius: 25px 25px 0px 0px;

        .h1_titulo{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 0;
        }
        .p{
            padding-bottom: 0;
            margin-bottom: 0.1rem;
            margin-top: 0.1rem;
        }

        .ul{
            margin-bottom: 0.15rem;
        }
    }

    .div_container2{
        display: flex;
        height: 60%;
        width: 96%;
        padding: 1rem;
        background-color: #fefefe;
        /* background-color: black; */
        border-radius: 0px 0px 25px 25px;
        flex-direction: column;

        .form{
            width: 100%;
            height: 100%;
            background-color: #ecf0f3;
            display: flex;
            flex-direction: column;
            box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;
            border-radius: 25px;


            .div_container3{
                display: flex;

                .div_labels{
                    display: flex;
                    flex-direction: column;
                    width: 10%;
                    margin: 1rem;
                    /* margin-top: 1rem; */
    
                    .label{
                        margin-bottom: 1rem;
                    }
                }
    
                .div_inputs{
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    margin: 1rem;
                    
                    .input{
                        margin-bottom: 1rem;
                    }
                }
            }
            
            .div_paises{
                display: flex;
                margin-left: 10rem;
                div{
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
                        img{
                            width: 50px;
                            height: 50px;
                            border-radius: 100%
                        }
                    }
                }
                
            }
            .div_texto{
            display: flex;
            margin-left: 7.5rem;
            align-items: center;
            justify-content: center;
        }

        .div_paises_1{
                border: 1px solid black;
                width: 80%;
                height: 66px;
                margin-bottom: 1rem;
                margin-top: -1rem;
                margin-left: 9rem;
            }
            .div_null{
                width: 80%;
                height: 66px;
            }
            
            .div_buttons{
                display: flex;
                justify-content: center;

                .button_form{
                    width: 15%;
                    margin: 1rem;
                    background-color: black;
                    color: white;
                    border: none;
                    padding: 0.5rem;
                    border-radius: 25px;
                    /* margin: 1rem;
                    margin-top: 2rem;
                    margin-left: 42%; */

                    &:hover{
                        cursor: pointer;
                    }
                }
            }
        }
    }
    
    .div_modal{
        position: fixed;
        z-index: 1;
        overflow: auto;
        background-color: white; //#ffc107
        color: black;
        width: 35%;
        height: 35%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-radius: 31px;
        box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;
        justify-content: space-evenly;
        
        .h2_modal{
            text-align: center;
            padding: 2rem;
        }
        .div_buttons_modals{
            display: flex;
                flex-direction: row;
                width: 68%;
                height: 26%;
                .button_modal{
                    width: 100%;
                border: none;
                background-color: black;
                color: white;
                border-radius: 25px;
                margin: 1rem;

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
}
    `