import React from 'react';
import PaisDetail from '../components/pais_detalle';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCountryDetail, clearCountryDetail } from '../redux/action';
import {StyledPaisDetalle} from './StyledComponents/detalle_pais'

export default function DetallePais () {

    const { id } = useParams()
    const dispatch = useDispatch();
    const countriesDetail = useSelector( state => state.countriesDetail)

    useEffect( ()=>{
        dispatch(getCountryDetail(id))
        return () => dispatch(clearCountryDetail())
    },[id, dispatch])

    return (
        <StyledPaisDetalle>
            { 
                countriesDetail ? (
                    <PaisDetail countriesDetail={countriesDetail} /> 
                ) : countriesDetail === undefined  ? (
                   null
                ) : (
                    <h1>País no encontrado</h1>
                )
            }
        </StyledPaisDetalle>
    )
}

