import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountries, clearCountriesLoaded } from '../redux/action';

export default function AddActivities (){

    const [actividad, setactividad] = useState({
        name:'',
        dificultad:'',
        duracion: '',
        temporada:'',
        idPais:[]
    })

    const [country, setCountry] = useState('')

    const [name, setName] = useState([])

    const dispatch = useDispatch()

    const countriesLoaded = useSelector(state => state.countriesLoades)

    let countries;    
    if(Array.isArray(countriesLoaded)){        
        countries = countriesLoaded.slice(0,11)
    } else {
        countries = []
    }

    const handleOnChange = (e) => {
        setactividad({...actividad,
        [e.target.name] : e.target.value})
    }

    const handleOnSearch = (e) => {
        e.preventDefault();
        dispatch(searchCountries(country))
        setCountry("");
    }  
    
    const onChange = (e) => {
        setCountry(e.target.value)
    }
    
    const onClick = (e, id, nombre) => { 
        e.preventDefault()       
        setactividad({
            ...actividad,
            idPais:[...actividad.idPais, id]
        })
        setName([
            ...name,
            {id , nombre}])
        // dispatch(clearCountriesLoaded())        
    }

    const eliminarPais = (e, nombre, id) => {
        e.preventDefault()
        setactividad({
            ...actividad,
            pais : actividad.idPais.filter(p => p !== id)
        })
        setName(
            name.filter(n => n.id !== id)
        )
    }
    
    const agregarTemporada = (e) => {
        e.preventDefault()         
        setactividad({
            ...actividad,
            temporada: e.target.value
        })
    }    
        
     
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/activities/add', {
            method: 'post',
            body:    JSON.stringify(actividad),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(() => alert('Actividad Creada Con exito'))
        .catch((e) => alert('Faltan cargar Datos'));
        setCountry('')
        setactividad({
        name:'',
        duracion: '',
        dificultad:'',
        temporada:'',
        idPais:[]
        })
        setName([])
        dispatch(clearCountriesLoaded())
    }

    return (
        <>
        <div>
        <h1>Añadir actividades</h1>
        <p>Llena este formulario para añadir las distintas actividades que puedan ser realizadas en los diferentes países del mundo</p>
        <p>IMPORTANTE: Todos son campos obligatorios, es decir que para poder crear una nueva actividad debes llenar todos los campos provistos, en donde:</p>
        <ul>
            <li>Nombre: El nombre por el cual se conoce la actividad</li>
            <li>Duración: Cuanto dura la culminación de la actividad en si. Debes colocar este dato en MINUTOS, y solo el número.</li>
            <li>Dificultad: Este campo solo aceptara valores enteros del 1 al 5, donde 1 es la dificultad minima (Facil) y 5 es la dificultad maxima (dificil)</li>
            <li>Temporada: Verano, Otoño, Invierno o Primavera ¿En qué temporada se realiza con mas frecuencia dicha actividad?</li>
            <li>País: Elegí los paises en donde se puede realizar la actividad. Podés elegir mas de uno</li>
        </ul>
        <p>Podrás ver las actividades agregadas en la seccion de Show y buscar, además, alguna en particular!</p>
        </div>

        <form onSubmit={handleOnSubmit}>
            <h1>NUEVAS ACTIVIDADES</h1>
            <label>Nombre:</label>
            <input type='text' name='name' value={actividad.name} placeholder='Nombre de la actividad' onChange={handleOnChange} pattern="[a-zA-Z- ]*" required />
            <label>Duración:</label>
            <input type='number' name='duracion' value={actividad.duracion} placeholder='Duración de la actividad' onChange={handleOnChange} required />
            <label>Dificultad:</label>
            <input type='number' name='dificultad' value={actividad.dificultad} max='5' min='1' placeholder='Dificultad de la actividad' onChange={handleOnChange} required />  
            <label>Temporada:</label>
            
            <div>
                <button value={'Otoño'} onClick={(e) => (agregarTemporada(e))} >Otoño</button>
                <button value={'Primavera'} onClick={(e) => (agregarTemporada(e))} >Primavera</button>
                <button value={'Invierno'} onClick={(e) => (agregarTemporada(e))} >Invierno</button>
                <button value={'Verano'} onClick={(e) => (agregarTemporada(e))} >Verano</button>
            </div>
            {
                actividad.temporada ? (
                    <p>{actividad.temporada}</p>
                ) : (<p>Elegi una temporada</p>)
            }
            <label>Paises</label>
            <input type='text' placeholder='Escribi aqui el País que deseas encontrar' onChange={onChange} value={country} />
            <button onClick={handleOnSearch}>Buscar</button>
            {
                (name.length > 0) ? (
                    name.map(c => (
                        <div key={c.id}>
                        <p>{c.nombre}</p>
                        <button onClick={(e) => eliminarPais(e, c.nombre, c.id)}>x</button>
                        </div>
                    ))
                ) : (<p>Aca se colacaran los paises que seleccionaste, si te arrepientes toca en la x y se eliminaran</p>)
            }
            {!actividad.idPais && (<p>Selecciona un Pais...</p>)}
            {
                (typeof countriesLoaded === 'string') ? (
                    <h1>No hay coincidencias</h1>
                ) : countries ?  countries.map(c => (
                    <div key={c.id}>
                    <label>{c.name}</label>
                    <button onClick={(e) => onClick(e, c.id, c.name)}>+</button>                    
                    </div>
                )) : (<p>Cargando Paises</p>)
            }
            <button onSubmit={handleOnSubmit} >Enviar</button>
        </form>
        </>
    )
}