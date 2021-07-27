import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./StyledComponents/inicio"

export default function Inicio () {

    return (
        <Container>
            <NavLink className='navlink' to='/home'>
                <div className='div_titulo'>
                    <h1 className='h1_titulo'>HOME</h1>
                </div>
            </NavLink>
        </Container>
    )
}
