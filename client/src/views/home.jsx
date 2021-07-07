import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Pais from '../components/pais';
import { getCountry, searchCountries } from '../redux/action';


export default function Home (){

    const [ country, setCountry ] = useState("");
    const dispatch = useDispatch();
    const countries = useSelector( state => state.countries);
    const countriesLoaded = useSelector( state => state.countriesLoades); 

    useEffect(() => {
        dispatch(getCountry());
    },[dispatch])

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
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to='/perfil'>Mi Perfil</NavLink>
                            <NavLink exact to='/activities'>Actividades</NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    {/* hay que agregar la funcionalidad que me vaya mostrando los paises  que coinciden con lo que se va escribiendo en el imput (Diego lo hizo     en una HW) */}
                    <input type='text' placeholder='Escribi aqui el País que deseas encontrar' onChange={hanldeOnChange} value={country} />
                    <button onClick={handleOnSubmit}>Buscar</button>
                </div>
                <div>
                    {/* cada button tiene una funcionalidad de filtro diferente que hay     que aplicar */}
                    <button>CONTINENTE</button>
                    <button>ACTIVIDAD</button>
                    <button>A-Z</button>
                    <button>Z-A</button>
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