import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledPaisDetalle } from '../views/Pais Detalle/pais_detalle';
import { IoArrowBackCircle } from "react-icons/io5";

export default function PaisDetail({countriesDetail}){

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <>
        <StyledPaisDetalle> 
            <div className='div_bienvenida'>
                <h1 className='h1_titulo'>Bienvenidos a:</h1>
                <h2 className='h2_titulo'>{countriesDetail.name}</h2>
                <IoArrowBackCircle className='button' onClick={goBack} size={80}/>
            </div>
            <div className='div_detalle'>
                <img className='img' src={countriesDetail.bandera} alt={countriesDetail.name} />
                <div className='div_detalle_texto'>
                    <h2 className='h2'>{`${countriesDetail.name} ${countriesDetail.id}`}</h2>
                    <h2 className='h2'>Continente: {countriesDetail.continente}</h2>
                    <h2 className='h2'>Capital: {countriesDetail.capital}</h2>
                    <h2 className='h2'>Subregión: {countriesDetail.subregion}</h2>
                    <h2 className='h2'>Área: {countriesDetail.area}</h2>
                    <h2 className='h2'>Población: {countriesDetail.poblacion}</h2>
                    {   
                        countriesDetail.activities?.length > 0 ? (
                            <h2 className='h2'>Actividades: 
                            {
                                countriesDetail.activities.map(a => (
                                    <span key={a.id}> {a.name} - </span>
                                ))
                            }
                            </h2>
                        ) : (null)
                    }
                </div>
            </div>
        </StyledPaisDetalle>
        </>
    )
}

/*
Le pondria un link al name para que me lleve al detalle de la actividad
*/