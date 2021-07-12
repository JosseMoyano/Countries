import Pais from './pais';
import PaisConFiltro from './pais_con_filtro';

export default function FirstCountries (props) {

    if (props.firstCountries) {         
        if(props.continente) {
            return (
                <PaisConFiltro continente={props.continente} array='firstCountries'/>
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