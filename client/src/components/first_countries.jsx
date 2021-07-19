import Pais from './pais';
import FiltroContinente from './filtro_continente';
import FiltroActividad from './filtro_actividad';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { order } from '../redux/action';
import { orderByAZ, orderByZA, orderMayorMenor, orderMenorMayor } from '../utils';

export default function FirstCountries (props) {

    const { ABC, AZ, ZA, menorMayor, mayorMenor, poblacion, continente, firstCountries, actividad } = props;
    
    const dispatch = useDispatch()

    useEffect(() => {
        if(ABC === true) {
            if(AZ === true) return dispatch(order(orderByAZ))
            if(ZA === true) return dispatch(order(orderByZA))}         
        if(poblacion === true){
            if(menorMayor === true) return dispatch(order(orderMenorMayor))
            if(mayorMenor === true) return dispatch(order(orderMayorMenor))}        
    }, [dispatch, ABC, AZ, ZA, mayorMenor, menorMayor, poblacion, continente])

    return (
        <>
            {
                firstCountries ? (
                    continente ? (
                            <FiltroContinente continente={continente} array='firstCountries' countries={firstCountries} poblacion={poblacion} ABC={ABC}/>  
                    ) : actividad.length > 0 ? (
                            <FiltroActividad actividad={parseInt(actividad.toString())} />
                    ) : firstCountries?.map(
                            country => <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                    )                    
                ) : (<h1>Cargando</h1>)
            }
        </>
    )

    // if (props.firstCountries) {   
    //     if(props.continente) return <FiltroContinente continente={props.continente} array='firstCountries' countries={props.firstCountries} poblacion={props.poblacion} ABC={props.ABC}/>
    //     if(props.actividad.length > 0)  return <FiltroActividad actividad={parseInt(props.actividad.toString())} />
    //     return props.firstCountries?.map(country => <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />)}
    // return (<h1>Cargando</h1>)
    
}
