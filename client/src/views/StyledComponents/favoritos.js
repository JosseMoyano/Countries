import styled from 'styled-components'

export const StyledPerfil = styled.div`
    margin-top: 0;
    padding: 0;
    width: 100%;
    background-color: #ecf0f3;
    display: flex;
    height: 100%;
    min-height: 756px;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    
    .div_container1{
        background-color: #ecf0f3;
        display: flex;
        margin: 0;
        padding: 0;
        justify-content: space-evenly;
        width: 68%;
        margin-top: 6rem;
        margin-bottom: 6rem;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        border-radius: 25px 25px 25px 25px;
        box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;

    .h2{
        text-align: center;
        color: black;
        margin: 0;
        padding: 0;
        background-color: transparent;
        padding-top: 1rem;
        padding-bottom: 1rem;
        
    }

    .h2_1{
        color: black;
        text-align: center;
    }
    .div_actividades{
        background-color: #eefafa;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        padding-top: -1rem;
        justify-content: space-evenly;
        width: 97%;
        border-radius: 25px 25px 25px 25px;

        


    }

    .div_sin_actividades{
        margin-top: 1rem;
        min-height: 250px;
        background-color: #eefafa;
        width: 97%;
        border-radius: 25px 25px 25px 25px;

    }

    .div_paises{
        background-color: #eefafa;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        margin-bottom: 3rem;
        padding: 0;
        justify-content: space-evenly;
        width: 97%;
        border-radius: 25px 25px 25px 25px;
    }

    .div_sin_paises{
        margin-top:1rem;
        min-height: 250px;
        background-color: #eefafa;
        width: 97%;
        margin-bottom: 1rem;
        border-radius: 25px 25px 25px 25px;

    }
}

`