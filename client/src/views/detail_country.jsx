import React from 'react';
// import { NavLink } from 'react-router-dom';
import PaisDetail from '../components/pais_detail';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCountryDetail, clearPage } from '../redux/action';

export default function DetailCountry (props) {

    const { id } = useParams()
    const dispatch = useDispatch();
    const countriesDetail = useSelector( state => state.countriesDetail)

    useEffect( ()=>{
        dispatch(getCountryDetail(id))
        return () => dispatch(clearPage())
    },[id, dispatch])

    return (
        <div>
            { countriesDetail ? (
                <>
                    <h1>BIENVENIDOS A {countriesDetail.name}</h1>
                    <PaisDetail countriesDetail={countriesDetail} /> 
                </>
            ) : countriesDetail === undefined  ? (
                <h1>Cargando...</h1>
            ) : (
                <h1>Pagina No encontrada </h1>
            )
            }
        </div>
    )
}

/*
1.Tengo que tener un estado global de los detalles de pais y traerlo
2. el dispatch se hace en el useeffect
3.
*/