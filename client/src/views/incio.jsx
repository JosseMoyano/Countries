import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./Inicio/inicio";

export default function Inicio () {

    return (
        <Container>
            <NavLink className='navlink' to='/home'>
                <div className='div_titulo'>
                    <h1 className='h1_titulo'>COMENCEMOS EL VIAJE!</h1>
                </div>
            </NavLink>
        </Container>
    )
}

/*
1. Hay que hacer la vista con el form de Iniciar Sesion y el back
2. Hay que hacer la vista con el form de registrarse y el back 
*/