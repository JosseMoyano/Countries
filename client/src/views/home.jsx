import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FirstCountries from '../components/first_countries';
import SearchedCountries from '../components/searched_countries';
import { getCountry, searchCountries, clearCountriesSearched, getActivities/* , order,  */} from '../redux/action';
// import { orderByAZ, orderByZA, orderMayorMenor, orderMenorMayor } from '../utils';

export default function Home () {
    
    const dispatch = useDispatch()

    const firstCountries = useSelector( state => state.firstCountries); // => Los primeros 10 paises
    const searchedCountries = useSelector( state => state.searchedCountries); // => Los paises de Busqueda
    const activities = useSelector( state => state.activities.todo); // => actividades

    const [ country, setCountry ] = useState(""); 
    
    //Ordenamiento por Poblacion
    const [ poblacion, setpoblacion ] = useState(false); 
    const [ menorMayor, setMenorMayor ] = useState(false); 
    const [ mayorMenor, setMayorMenor ] = useState(false); 
    
    //Ordenamiento por ABC
    const [ ABC, setABC ] = useState(false); 
    const [ az, setAz] = useState(false); 
    const [ za, setZa] = useState(false); 
    
    //filtros de Continente
   const [ continentes, setContinentes ] = useState(false)
   const [ continente, setcontinente ] = useState(undefined); 

    //filtros de actividad
    const [ actividades, setActividades ] = useState(false); // => activa y desactiva el boton
    const [ actividad, setActividad ] = useState([]); // => guardo las id. actividades

    useEffect(() => {
        dispatch(getCountry());
        dispatch(getActivities())
        return () => dispatch(clearCountriesSearched())          
    },[dispatch]) 

    // Efectos para los filtros de Continente y Actividad
    useEffect(()=>{
        if(actividades === false) setActividad([])
        if(actividades === true) setContinentes(false)
    },[actividades])

    useEffect(()=>{
        if(continentes === false) setcontinente(undefined)
        if(continentes === true) setActividades(false)
    },[continentes])

    // Efectos para los ordenamientos ABC
    useEffect(()=>{
        if(ABC === false) {
            setAz(false)  
            setZa(false)
        }
        if(ABC === true) setpoblacion(false)
    },[ABC])

    // Efectos para los ordenamientos Poblacion
    useEffect(()=>{
        if(poblacion === false) {
            setMenorMayor(false)  
            setMayorMenor(false)
        }
        if(poblacion === true) setABC(false)
    },[poblacion])

    const onChange = (e) => {
        if(e.target.name === 'Buscar') setCountry(e.target.value);
        if(e.target.name === 'Continente'){ 
            if(continentes === true) setcontinente(e.target.value);
            if(continentes === false) e.target.checked = false }
        if(e.target.name === 'actividad'){
            if(e.target.checked === true) setActividad([e.target.value]) 
            if(e.target.checked === false) setActividad(actividad.filter(actividad => actividad !== e.target.value)) } 
        if(e.target.name === 'ABC'){ 
            if(e.target.id === "AZ"){
                setAz(true)  
                setZa(false)}
            if(e.target.id === "ZA"){
                setAz(false)  
                setZa(true)}}
        if(e.target.name === 'poblacion'){
            if(e.target.id === 'MenorMayor'){
                setMenorMayor(true)
                setMayorMenor(false)
            }
            if(e.target.id === 'MayorMenor'){
                setMenorMayor(false)
                setMayorMenor(true)
            }
        }
    }

    const onClick = (e) => {
        e.preventDefault();
        if(e.target.name === 'Buscar') {
            dispatch(searchCountries(country))
            setCountry("")}
        if(e.target.name === 'Actividad') setActividades(!actividades)            
        if(e.target.name === 'Continente') setContinentes(!continentes)
        if(e.target.name === 'ABC') setABC(!ABC)
        if(e.target.name === 'poblacion') setpoblacion(!poblacion)
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
                        activities.length > 0 ? (
                            activities?.map(a => (
                                <div key={a.id} onChange={onChange}  >
                                    <input type='radio' id={a.name} value={a.id} name='actividad' />
                                    <label>{a.name}</label>
                                </div>
                            ))
                        ) : (<h1>No hay actividades para Mostrar, primero crealas aqui: <NavLink to='/activities/add'>Add Activities</NavLink></h1>)
                    ) : (null)                    
                }       
                <button onClick={onClick} value={ABC} name='ABC'>ABC</button> 
                {
                    ABC === true ? (
                        <div onChange={onChange}>
                            <input type="radio" id="AZ" name="ABC" value={az} />                           
                            <label htmlFor="AZ">A-Z</label>
                            <input type="radio" id="ZA" name="ABC" value={za}/>                           
                            <label htmlFor="ZA">Z-A</label>
                        </div>                        
                    ) : (null)
                }        
                <button onClick={onClick} value={poblacion} name='poblacion'>POBLACIÓN</button>
                {
                    poblacion === true ? (
                        <div onChange={onChange}>
                            <input type="radio" id="MenorMayor" name="poblacion" value={menorMayor} />                           
                            <label htmlFor="MenorMayor">Menor a Mayor</label>
                            <input type="radio" id="MayorMenor" name="poblacion" value={mayorMenor}/>                           
                            <label htmlFor="MayorMenor">Mayor a Menor</label>
                        </div>
                    ) : (null)
                }
            </div>
            {
                (ABC === true || poblacion === true ) ? (
                    searchedCountries.todo?.length > 0   ? (
                        <SearchedCountries searchedCountries={searchedCountries.todo} poblacion={poblacion} menorMayor={menorMayor} mayorMenor={mayorMenor} ABC={ABC} AZ={az} ZA={za} actividad={actividad} continente={continente} array='searchedCountries'  />
                    ) : firstCountries.todo?.length > 0   ? (
                        <FirstCountries  firstCountries={firstCountries.todo} poblacion={poblacion} menorMayor={menorMayor} mayorMenor={mayorMenor} ABC={ABC} AZ={az} ZA={za} actividad={actividad} continente={continente} array='firstCountries'  />
                    ) : (<h1>Cargando</h1>)

                ) : (!ABC && !poblacion) ? (
                    searchedCountries.actual?.length > 0 ? (
                        <SearchedCountries  searchedCountries={searchedCountries.actual} actividad={actividad} continente={continente} array='searchedCountries'  />
                    ) : firstCountries.actual?.length > 0   ? (
                        <FirstCountries  firstCountries={firstCountries.actual} continente={continente} array='firstCountries' actividad={actividad} />
                    ) : (<h1>Cargando</h1>)
                ) : (null) 
            }
        </>
    )
}

/*
1. falta implementar el tip de Diego
Se podria arreglar para que cuando cambie de continente teniendo activos los ordenamientos, los repeste.
*/
