import React from 'react';

export default function PaisDetail({countriesDetail}){

    return (
        <div> 
            <img src={countriesDetail.bandera} alt={countriesDetail.name} />
            <h1>{`${countriesDetail.name} ${countriesDetail.id}`}</h1>
            <h1>Continente: {countriesDetail.continente}</h1>
            <h1>Capital: {countriesDetail.capital}</h1>
            <h1>Subregión: {countriesDetail.subregion}</h1>
            <h1>Área: {countriesDetail.area}</h1>
            <h1>Población: {countriesDetail.poblacion}</h1>
            {   countriesDetail.activities.length > 0 ? (<h1>Actividades: 
                    {
                        countriesDetail.activities?.length > 0 ? (
                            countriesDetail.activities.map(a => (
                                <div key={a.id}>
                                    <ul>
                                        <li>{a.name}</li>
                                    </ul>
                                </div>
                            ))
                        ) : ('sin actividades')
                    }
            </h1>) : (null)
            }
        </div>
    )
}

/*
Le pondria un link al name para que me lleve al detalle de la actividad
*/