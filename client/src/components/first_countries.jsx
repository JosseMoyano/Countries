import Pais from './pais';
import Filtro from './filtro';
import FiltroActividad from './filtro_actividad';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { order } from '../redux/action';
import { orderByAZ, orderByZA, orderMayorMenor, orderMenorMayor } from '../utils';

export default function FirstCountries (props) {

    const dispatch = useDispatch()

    useEffect(() => {
        if(props.ABC === true) {
            if(props.AZ === true) return dispatch(order(orderByAZ))
            if(props.ZA === true) return dispatch(order(orderByZA))
        }         
        if(props.poblacion === true){
            if(props.menorMayor === true) return dispatch(order(orderMenorMayor))
            if(props.mayorMenor === true) return dispatch(order(orderMayorMenor))
        }        
        
    }, [dispatch, props.ABC, props.AZ, props.ZA, props.mayorMenor, props.menorMayor, props.poblacion])

    if (props.firstCountries) {   
            if(props.continente) {
                return (
                    <Filtro continente={props.continente} array='firstCountries' countries={props.firstCountries} poblacion={props.poblacion} ABC={props.ABC}/>
                ) 
            }    
            if(props.actividad.length > 0) {
                return(
                    <FiltroActividad actividad={parseInt(props.actividad.toString())} />
                )
            }  
            return (
                props.firstCountries?.map(country => (
                    <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                    )))
    } else {
        return (
            <h1>Cargando</h1>
        )
    }
}
