import React from 'react';

export default function PaisDetail({countriesDetail}){
    console.log('countriesDetail: ',countriesDetail)

    return (
        <div> 
            <img src={countriesDetail.bandera} alt={countriesDetail.name} />
            <h1>{`${countriesDetail.name} ${countriesDetail.id}`}</h1>
            <h1>continente: {countriesDetail.continente}</h1>
            <h1>capital: {countriesDetail.capital}</h1>
            <h1>subregion: {countriesDetail.subregion}</h1>
            <h1>area: {countriesDetail.area}</h1>
            <h1>poblacion: {countriesDetail.poblacion}</h1>
            <h1>Actividades: 
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
            </h1>
        </div>
    )
}

/*
Le pondria un link al name para que me lleve al detalle de la actividad
*/