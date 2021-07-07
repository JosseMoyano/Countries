import React from 'react';

export default function PaisDetail({countriesDetail}){

    return (
        <div> 
            <img src={countriesDetail.bandera} alt={countriesDetail.name} />
            <h1>{`${countriesDetail.name} ${countriesDetail.id}`}</h1>
            <h1>{countriesDetail.continente}</h1>
            <h1>{countriesDetail.capital}</h1>
            <h1>{countriesDetail.subregion}</h1>
            <h1>{countriesDetail.area}</h1>
            <h1>{countriesDetail.poblacion}</h1>
            <h1>{countriesDetail.actividades}</h1>
        </div>
    )
}