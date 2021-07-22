import styled from 'styled-components'

export const StyledPerfil = styled.div`
    margin-top: 0;
    padding: 0;
    width: 100%;
    background-color: #cff5ff;
    display: flex;
    height: 100%;
    min-height: 756px;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;

    
    .div_container1{
        background-color: gray;
        display: flex;
        margin: 0;
        padding: 0;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 6rem;
        margin-bottom: 6rem;
        width: 90%;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        border-radius: 25px 25px 25px 25px;
    .h2{
        text-align: center;
        color: white;
        margin: 0;
        padding: 0;
        background-color: gray;
        padding-top: 1rem;
        padding-bottom: 1rem;
        
    }

    .h2_1{
        color: white;
        text-align: center;
    }
    .div_actividades{
        background-color: black;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        justify-content: space-evenly;
        width: 92%;
        border-radius: 25px 25px 25px 25px;


    }

    .div_sin_actividades{
        margin-top: 3rem;
        min-height: 250px;
        background-color: black;
        width: 92%;
        border-radius: 25px 25px 25px 25px;

    }

    .div_paises{
        background-color: black;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        margin-bottom: 3rem;
        padding: 0;
        justify-content: space-evenly;
        width: 92%;
        border-radius: 25px 25px 25px 25px;
    }

    .div_sin_paises{
        margin-top:3rem;
        min-height: 250px;
        background-color: black;
        width: 92%;
        margin-bottom: 3rem;
        border-radius: 25px 25px 25px 25px;

    }
}

`