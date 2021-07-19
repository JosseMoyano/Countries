import React from 'react';
import PaisDetail from '../components/pais_detail';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCountryDetail, clearCountryDetail } from '../redux/action';

export default function DetailCountry () {

    const { id } = useParams()
    const dispatch = useDispatch();
    const countriesDetail = useSelector( state => state.countriesDetail)

    useEffect( ()=>{
        dispatch(getCountryDetail(id))
        return () => dispatch(clearCountryDetail())
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

