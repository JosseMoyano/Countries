import Pais from './pais';
import Filtro from './filtro';
import FiltroActividad from './filtro_actividad';

export default function FirstCountries (props) {

    if (props.firstCountries) {   
            if(props.continente) {
                return (
                    <Filtro continente={props.continente} array='firstCountries' countries={props.firstCountries}/>
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
            <h1>Cargando</h1>)
    }
}

/*
Yo pondria en este componente los efectos de ABC y Poblacion y haria lo mismo en searched_countries
*/