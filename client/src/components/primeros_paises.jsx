import Pais from './pais';
import FiltroContinente from './filtro_continente';
import FiltroActividad from './filtro_actividad';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { order } from '../redux/action';
import { orderByAZ, orderByZA, orderMayorMenor, orderMenorMayor } from '../utils/funciones';

export default function PrimerosPaises (props) {

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

    
    
}
