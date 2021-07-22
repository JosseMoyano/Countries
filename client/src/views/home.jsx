import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FirstCountries from '../components/first_countries';
import SearchedCountries from '../components/searched_countries';
import { getCountry, searchCountries,  clearCountriesSearched, getActivities } from '../redux/action';
import { StyledHome } from './Home/home';
import Nav from './nav'

export default function Home () {
    
    const dispatch = useDispatch();

    const firstCountries = useSelector( state => state.firstCountries); 
    const searchedCountries = useSelector( state => state.searchedCountries); 
    // const prevCountries = useSelector( state => state.prevCountries); 
    const activities = useSelector( state => state.activities.todo); 

    const [ country, setCountry ] = useState(''); 
    const continents = ['Americas', 'Europe', 'Africa', 'Asia', 'Oceania', 'Polar'];
    
    //Ordenamiento por Poblacion
    const [ poblacion, setpoblacion ] = useState(false); 
    const [ menorMayor, setMenorMayor ] = useState(false); 
    const [ mayorMenor, setMayorMenor ] = useState(false); 
    
    //Ordenamiento por ABC
    const [ ABC, setABC ] = useState(false); 
    const [ az, setAz] = useState(false); 
    const [ za, setZa] = useState(false); 

    //filtros de Continente
   const [ continentes, setContinentes ] = useState(false);
   const [ continente, setcontinente ] = useState(undefined); 

    //filtros de actividad
    const [ actividades, setActividades ] = useState(false); 
    const [ actividad, setActividad ] = useState([]); 

    useEffect(() => {
        dispatch(getCountry());
        dispatch(getActivities());
        return () => dispatch(clearCountriesSearched());       
    },[dispatch]);

    useEffect(() => {
       if(country !== '')dispatch(searchCountries(country))
    },[country, dispatch])

    // Efectos para los filtros de Continente y Actividad
    useEffect(()=>{
        if(actividades === false) setActividad([]);
        if(actividades === true) setContinentes(false);
    },[actividades]);

    useEffect(()=>{
        if(continentes === false) setcontinente(undefined);
        if(continentes === true) setActividades(false);
    },[continentes]);

    // Efectos para los ordenamientos ABC
    useEffect(()=>{
        if(ABC === false) {
            setAz(false);  
            setZa(false)};
        if(ABC === true) setpoblacion(false);
    },[ABC]);

    // Efectos para los ordenamientos Poblacion
    useEffect(()=>{
        if(poblacion === false) {
            setMenorMayor(false);  
            setMayorMenor(false)};
        if(poblacion === true) setABC(false);
    },[poblacion]);

    // Funciones para los inputs y botones
    const onChange = (e) => {
        if(e.target.name === 'Buscar') setCountry(e.target.value)
        if(e.target.name === 'Continente') continentes ? setcontinente(e.target.value) : e.target.checked = false ;
        if(e.target.name === 'actividad') e.target.checked ? setActividad([e.target.value]) : setActividad(actividad.filter(a => a !== e.target.value));
        if(e.target.name === 'ABC'){ 
            if(e.target.id === "AZ"){
                setAz(true);  
                setZa(false)};
            if(e.target.id === "ZA"){
                setAz(false);  
                setZa(true)}};
        if(e.target.name === 'poblacion'){
            if(e.target.id === 'MenorMayor'){
                setMenorMayor(true);
                setMayorMenor(false)};
            if(e.target.id === 'MayorMenor'){
                setMenorMayor(false);
                setMayorMenor(true)}};
    };

    const onClick = (e) => {
        e.preventDefault();
        if(e.target.name === 'Buscar'){
            dispatch(searchCountries(country))
             setCountry('') };
        if(e.target.name === 'Actividad') setActividades(!actividades);           
        if(e.target.name === 'Continente') setContinentes(!continentes);
        if(e.target.name === 'ABC') setABC(!ABC);
        if(e.target.name === 'poblacion') setpoblacion(!poblacion);
    };

    return (
        <>
        <Nav />
        <StyledHome>
            <div className='header'>                
                <div className='div_busqueda'>
                    <input className='input_busqueda' type='text' name='Buscar' placeholder='Escribi aqui el País que deseas encontrar' onChange={onChange} value={country} />
                    <button className='button_busqueda' name='Buscar' onClick={(e) => onClick(e)}>Buscar</button>
                </div>
                <div className='div_filtros'>
                    <div className='div_button '>
                        <button className='button_filtros button_inicio' onClick={onClick} name='Continente' value={continentes} >CONTINENTE</button >
                    </div>
                    <div className='div_button'>
                        <button className='button_filtros' onClick={onClick} value={actividades} name='Actividad'>ACTIVIDADES</button>                
                    </div>
                    <div className='div_button'>
                        <button className='button_filtros' onClick={onClick} value={ABC} name='ABC'>ABC</button> 
                    </div>
                    <div className='div_button'>
                        <button className='button_filtros button_fin' onClick={onClick} value={poblacion} name='poblacion'>POBLACIÓN</button>
                    </div>
                </div>
            </div>
        {
            continentes || actividades || ABC || poblacion ? (
                <div className='div_filtros2'>
                    {
                        continentes === true ? (
                        <div className='div_filtro_continente'>
                            {
                                continents.map(c => (
                                    <div onChange={onChange} key={c}>
                                        <input type="radio" id={c} name="Continente" value={c}/>                           
                                        <label  htmlFor={c}>{c}</label>
                                    </div>
                                ))
                            }
                        </div>
                        ) : (null)
                    }
                    {                    
                        actividades === true ? (
                        <div className='div_filtro_continente'>
                            { 
                                activities.length > 0 ? (
                                activities?.map(a => (
                                    <div key={a.id} onChange={onChange}  >
                                        <input type='radio' id={a.name} value={a.id} name='actividad' />
                                        <label>{a.name}</label>
                                    </div>
                                ))
                                ) : (<p className='p_filtro_actividades'>No hay actividades para Mostrar, primero crealas aqui: <NavLink className='link' to='/activities/add'>{` Add Activities`}</NavLink></p>)
                            }
                        </div>
                        ) : (null)                    
                    }   
                    {
                        ABC === true ? (
                        <div className={continentes || actividades ? 'div_filtro_ABC' : 'div_filtro_continente' } onChange={onChange}>
                            {/* <div onChange={onChange} className='div_ABC'> */}
                            <div className='container_ABC'>
                                <div>
                                    <input  type="radio" id="AZ" name="ABC" value={az}/>                           
                                    <label className='input_ABC' htmlFor="AZ">A-Z</label>
                                </div>
                                <div>
                                    <input  type="radio" id="ZA" name="ABC" value={za}/>                           
                                    <label className='input_ABC' htmlFor="ZA">Z-A</label>
                                </div>
                            </div>
                            {/* </div>    */}
                        </div>
                        ) : (null)
                    }   
                    {
                        poblacion === true ? (
                        <div className={continentes || actividades ? 'div_filtro_ABC' : 'div_filtro_ABC2' } onChange={onChange}>
                            {/* <div onChange={onChange}> */}
                            <div className='container_ABC'>
                            <div>
                                <input type="radio" id="MenorMayor" name="poblacion" value={menorMayor} />                           
                                <label htmlFor="MenorMayor">Menor a Mayor</label>
                            </div>
                            <div>
                                <input type="radio" id="MayorMenor" name="poblacion" value={mayorMenor}/>                           
                                <label htmlFor="MayorMenor">Mayor a Menor</label>
                            </div>
                            </div>
                            {/* </div> */}
                        </div>
                        ) : (null)
                    }
                </div>
        ) : (null)
    }
        <div className='div_renderizado'>
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
                        ) : searchedCountries.actual?.length === 0 ? (
                            <h1>Cargando</h1>
                        ) : (<h1>No se encontró el pais</h1>)
                    ) : (<h1>No se encontró el pais</h1>) 
                }
        </div>
        </StyledHome>
        </>
    )
}

/*
Por alguna razon, el activityDetail no funca... pero primero hace los estilos!! 
*/

