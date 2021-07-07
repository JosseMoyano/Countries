import React from "react";
import { NavLink } from "react-router-dom";

export default function Inicio () {

    return (
        <div>
            <h1>COMENCEMOS EL VIAJE!</h1>
            <div>
                <button>INICIAR SESIÓN</button>
                <button>REGISTRARSE</button>
                <NavLink to='/countries'>HOME</NavLink>
            </div>
        </div>
    )
}

/*
1. Hay que hacer la vista con el form de Iniciar Sesion y el back
2. Hay que hacer la vista con el form de registrarse y el back 
*/