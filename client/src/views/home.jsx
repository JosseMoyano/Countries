import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pais from '../components/pais';
import { getCountry, searchCountries, clearCountriesLoaded, } from '../redux/action';
import { orderByAZ, orderBycontinente, orderByZA, orderPopulation } from '../utils';

export default function Home () {
    
    const dispatch = useDispatch()

    const firstCountries = useSelector( state => state.countries); // => Los primeros 10 paises
    const searchedCountries = useSelector( state => state.countriesLoades); // => Los paises de Busqueda

    const [ country, setCountry ] = useState(""); 
    const [ continente, setcontinente ] = useState(undefined); 
    const [ poblacion, setpoblacion ] = useState(false); 
    const [ ABC, setABC ] = useState(false); 
    const [ filterContinente, setfilterContinente ] = useState(""); 

    useEffect(() => {
        dispatch(getCountry());
        return dispatch(clearCountriesLoaded())
    },[dispatch])    

    const onChange = (e) => {
        if(e.target.name === 'Buscar') setCountry(e.target.value);
        if(e.target.name === 'Continente') setcontinente(e.target.value);
        if(e.target.name === 'Poblacion') setpoblacion(!poblacion);
        if(e.target.name === 'ABC') setABC(!ABC);
    }

    const onClick = (e) => {
        e.preventDefault();
        if(e.target.name === 'Buscar') {
            dispatch(searchCountries(country))
            setCountry("")
        };
    }
    
    useEffect(() => {
        if(poblacion){
            searchedCountries?.sort(orderPopulation)
            firstCountries?.sort(orderPopulation)
            console.log('firstState por poblacion: ',firstCountries?.sort(orderPopulation))
        }
        if(ABC){
            searchedCountries?.sort(orderByZA)
            firstCountries?.sort(orderByZA)
            console.log('firstState por ZA: ',firstCountries?.sort(orderByZA))
        }        
        if(!ABC){
            searchedCountries?.sort(orderByAZ)
            firstCountries?.sort(orderByAZ)
            console.log('firstState por AZ: ',firstCountries?.sort(orderByAZ))
        }        
    }, [ABC, firstCountries, poblacion, searchedCountries])


    useEffect(()=> {
        if(typeof continente === 'string'){
            (orderBycontinente(setfilterContinente, searchedCountries, continente)); 
            (orderBycontinente(setfilterContinente, firstCountries, continente));                   
        }
        return () => setfilterContinente(undefined)
        },[continente, firstCountries, searchedCountries, setfilterContinente])

        console.log('firststate por continente: ',filterContinente);    
    


    return (
        <>
            <header>                
                <div>
                   {/* hay que agregar la funcionalidad que me vaya mostrando los paises  que coinciden con lo que se va escribiendo en el imput (Diego lo hizo     en una HW) */}
                    <input type='text' name='Buscar' placeholder='Escribi aqui el País que deseas encontrar' onChange={onChange} value={country} />
                    <button name='Buscar' onClick={(e) => onClick(e)}>Buscar</button>
                </div>
            </header>
            <div>
                {/* cada button tiene una funcionalidad de filtro diferente que hay que aplicar */}
                <legend>CONTINENTE</legend>
                    <div onChange={onChange}> 
                        <input type="radio" id="Americas" name="Continente" value="Americas"/>                           
                        <label htmlFor="Americas">America</label>
                        <input type="radio" id="Europe" name="Continente" value="Europe"/>
                        <label htmlFor="Europe">Europa</label>
                        <input type="radio" id="Africa" name="Continente" value="Africa"/>
                        <label htmlFor="Africa">Africa</label>
                        <input type="radio" id="Asia" name="Continente" value="Asia"/>
                        <label htmlFor="Asia">Asia</label>
                        <input type="radio" id="Oceanía" name="Continente" value="Oceania"/>
                        <label htmlFor="Oceanía">Oceania</label>
                        <input type="radio" id="Polar" name="Continente" value="Polar"/>
                        <label htmlFor="Polar">Antartida</label>
                    </div>
                <button>ACTIVIDAD</button>
                <div onChange={onChange}>
                    <input type="radio" id="AZ" name="ABC" value={ABC}/>                           
                    <label htmlFor="AZ">AZ</label>
                    <input type="radio" id="ZA" name="ABC" value={!ABC}/>                           
                    <label htmlFor="ZA">ZA</label>
                </div>
                <button value='Poblacion' name='Poblacion' onClick={onChange}>POBLACIÓN</button>
            </div>
        
            {
                filterContinente && searchedCountries && firstCountries && (
                    filterContinente.map(country => (
                        <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                )))
            }

            {
                searchedCountries && firstCountries && !filterContinente && (
                    searchedCountries?.map(country => (
                        <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                    )))
            }

            {
                firstCountries && !searchedCountries && !filterContinente && (
                    firstCountries?.map(country => (
                        <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                    )))
            }
            {
                !firstCountries && !searchedCountries && !filterContinente && (
                    <h1>Cargando...</h1>)
            }
        </>
    )
}

/*
1. falta implementar el tip de Diego
2. Falta dar funcionalidad a los botones de filtros
3. boton de quitar filtros
*/
