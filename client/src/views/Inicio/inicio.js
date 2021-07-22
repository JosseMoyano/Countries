import styled from 'styled-components';
import img from '../../img/1.jpg'

export const Container = styled.div`
    height: 757px;
    display: flex;
    background-image: url(${img});
    align-items: center;
    align-content: center;
    justify-content: center;
    
    .navlink{
        text-decoration: none;
        
        .div_titulo {
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: white;
            
            width: 400px;
            height: 160px;
            left: 375px;
            top: 388px;

            /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0,0,0,0.3) 0px 30px 60px -30px,
                        rgba(10,37,64,0.35)0px -2px 6px 0px inset; */

            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
                        rgba(0, 0, 0, 0.23) 0px 6px 6px;
            border-radius: 40px;

            &:hover{
                box-shadow: 0px 0px 6px rgba(255,255,255,0.7);
            }
        
            .h1_titulo {
                font-size: 2rem;
                color: black;
            }
        }
    }
    `

    // Tengo que degradar la imagen 