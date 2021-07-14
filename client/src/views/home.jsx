import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FirstCountries from '../components/first_countries';
import SearchedCountries from '../components/searched_countries';
import { getCountry, searchCountries, clearCountriesSearched, getActivities, } from '../redux/action';
// import { orderByAZ, orderByZA, } from '../utils';

export default function Home () {
    
    const dispatch = useDispatch()

    const firstCountries = useSelector( state => state.firstCountries); // => Los primeros 10 paises
    const searchedCountries = useSelector( state => state.searchedCountries); // => Los paises de Busqueda
    const activities = useSelector( state => state.activities.todo); // => actividades

    const [ country, setCountry ] = useState(""); 
    
    const [ poblacion, setpoblacion ] = useState(false); 
    const [ ABC, setABC ] = useState(false); 
    
    //filtros de Continente
   const [ continentes, setContinentes ] = useState(false)
   const [ continente, setcontinente ] = useState(undefined); 

    //filtros de actividad
    const [ actividades, setActividades ] = useState(false); // => activa y desactiva el boton
    const [ actividad, setActividad ] = useState([]); // => guardo las id. actividades

    useEffect(() => {
        dispatch(getCountry());
        dispatch(getActivities())
        return dispatch(clearCountriesSearched())
    },[dispatch])    

    const onChange = (e) => {
        if(e.target.name === 'Buscar') setCountry(e.target.value);
        if(e.target.name === 'Continente') setcontinente(e.target.value);
        if(e.target.name === 'Poblacion') setpoblacion(!poblacion);
        if(e.target.name === 'ABC') setABC(!ABC);
        if(e.target.name === 'actividad'){
            if(e.target.checked === true) setActividad([e.target.value]) 
            if(e.target.checked === false) setActividad(actividad.filter(actividad => actividad !== e.target.value))
        }        
    }

    const onClick = (e) => {
        e.preventDefault();
        if(e.target.name === 'Buscar') {
            dispatch(searchCountries(country))
            setCountry("")
        }
        if(e.target.name === 'Actividad'){
            setActividades(!actividades)            
        }
        if(e.target.name === 'Continente'){
            setContinentes(!continentes)
            if(!continentes) setcontinente(undefined)
        }
    }

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
                <button onClick={onClick} name='Continente' value={continentes} >CONTINENTE</button >
                {
                    continentes === true ? (
                        <div onChange={onChange}> 
                            <input type="radio" id="Americas" name="Continente" value='Americas'/>                           
                            <label htmlFor="Americas">America</label>
                            <input type="radio" id="Europe" name="Continente" value='Europe' />
                            <label htmlFor="Europe">Europa</label>
                            <input type="radio" id="Africa" name="Continente" value='Africa'   />
                            <label htmlFor="Africa">Africa</label>
                            <input type="radio" id="Asia" name="Continente" value='Asia'  />
                            <label htmlFor="Asia">Asia</label>
                            <input type="radio" id="Oceania" name="Continente" value='Oceania'   />
                            <label htmlFor="Oceania">Oceania</label>
                            <input type="radio" id="Polar" name="Continente" value='Polar'   />
                            <label htmlFor="Polar">Antartida</label>
                        </div>
                    ) : (null)
                }
                <button onClick={onClick} value={actividades} name='Actividad'>ACTIVIDADES</button>                
                {                    
                    actividades === true ? (
                        activities?.map(a => (
                            <div key={a.id} onChange={onChange}  >
                            <input type='checkbox' value={a.id} name='actividad' />
                            <label>{a.name}</label>
                            </div>
                        ))
                    ) : (null)                    
                }                
                <div onChange={onChange}>
                    <input type="radio" id="AZ" name="ABC" value={ABC}/>                           
                    <label htmlFor="AZ">AZ</label>
                    <input type="radio" id="ZA" name="ABC" value={!ABC}/>                           
                    <label htmlFor="ZA">ZA</label>
                </div>
                <button value='Poblacion' name='Poblacion'>POBLACIÓN</button>
            </div>
            {
                searchedCountries.actual   ? (
                    <SearchedCountries searchedCountries={searchedCountries.actual} actividad={actividad} continente={continente} array='searchedCountries'  />
                ) : firstCountries.actual  ? (
                    <FirstCountries firstCountries={firstCountries.actual} continente={continente} array='firstCountries' actividad={actividad} />
                ) : (<h1>No hay paises</h1>)
            }
        </>
    )
}

/*
1. falta implementar el tip de Diego
2. Falta dar funcionalidad a los botones de filtros
3. boton de quitar filtros

Puedo usar dispatchs para los ordenamientos AZ ZA Poblacion, 
y un dispatch para cuando las opciones de ordenamiento esten en false vuelvan a cargar desde la base de datos 
*/
