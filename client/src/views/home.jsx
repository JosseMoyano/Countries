import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pais from '../components/pais';
import { getCountry, searchCountries, clearCountriesLoaded, } from '../redux/action';


export default function Home (){

    const [ country, setCountry ] = useState("");
    const dispatch = useDispatch();
    let countries = useSelector( state => state.countries);
    let countriesLoaded = useSelector( state => state.countriesLoades); 

    useEffect(() => {
        dispatch(getCountry());
        return dispatch(clearCountriesLoaded())
    },[dispatch,])

    const hanldeOnChange = (e) => {
        setCountry(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(searchCountries(country))
        setCountry("");
    }         

    return (
        <>
            <header>                
                <div>
                    {/* hay que agregar la funcionalidad que me vaya mostrando los paises  que coinciden con lo que se va escribiendo en el imput (Diego lo hizo     en una HW) */}
                    <input type='text' placeholder='Escribi aqui el País que deseas encontrar' onChange={hanldeOnChange} value={country} />
                    <button onClick={handleOnSubmit}>Buscar</button>
                </div>
                <div>
                    {/* cada button tiene una funcionalidad de filtro diferente que hay     que aplicar */}
                    <button >CONTINENTE</button>
                    <button>ACTIVIDAD</button>
                    <button >A-Z</button>
                    <button >Z-A</button>
                    <button>POBLACIÓN</button>
                </div>
            </header>
            <div>
                { countriesLoaded && countries && (
                    countriesLoaded.map(country => (
                        <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                    )))
                } 
                {countries && !countriesLoaded && (countries.map(country => (
                    <Pais key={country.id} name={country.name} bandera={country.bandera} continente= {country.continente} id={country.id} />
                )))
                }
                {!countries && !countriesLoaded && (<h1>Cargando...</h1>)}                    
            </div>
        </>
    )
}

/*
1. falta implementar el tip de Diego
2. Falta dar funcionalidad a los botones de filtros
3. Cuando vuelvo al Home deberia cargar los countries y limpiar countriesLoades
*/