import styled from "styled-components";
import img from '../../utils/img/actividad.jpg'

export const StyledActividades = styled.div`
    display: flex;
    background-image: url(${img});
    background-size: cover;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 757px;
    /* margin: -1rem; */
    padding: 0rem;
    width: 100%;

    .nav{
        background: transparent;
        position: fixed;
    }

    .div_container{
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 30%;
        height: 100px;
        border-radius: 20px;

        .div_link{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;

            
        }

        .div_link1{
            &:hover{
                background-color: azure;
                border-radius:20px 0px 0px 20px ;
            }
        }
        .div_link2{
            &:hover{
                background-color: azure;
                border-radius: 0px 20px 20px 0px ;
            }
        }

        .Navlink{
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            font-size: 1.2rem;
            height: 100%;
            width: 100%;
            color: #03045E;
            
        }
    }


`