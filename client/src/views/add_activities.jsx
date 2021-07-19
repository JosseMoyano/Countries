import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { postActivity, clearPrevCountries, searchPrevCountries } from '../redux/action';

export default function AddActivities (){

    const dispatch = useDispatch()

    const prevCountries = useSelector(state => state.prevCountries)

    const [actividad, setactividad] = useState({
        name:'',
        dificultad:'',
        duracion: '',
        temporada:'',
        idPais:[]
    })
    const [country, setCountry] = useState('')
    const [paises, setPaises] = useState([])
    const [error, setError] = useState(null)
    const [ok, setOk] = useState(null)

    useEffect(() => {
        if(country !== '') dispatch(searchPrevCountries(country))
        if(country === '') dispatch(clearPrevCountries())
    },[country, dispatch])

    const onChange = (e) => {
        if (e.target.name === 'Buscar') setCountry(e.target.value)
        if (e.target.name === 'name') setactividad({...actividad, name: e.target.value})
        if (e.target.name === 'duracion') setactividad({...actividad, duracion: e.target.value})
        if (e.target.name === 'dificultad') setactividad({...actividad, dificultad: e.target.value})
        if (e.target.name === 'temporada') {
            setactividad({...actividad, temporada: e.target.value})
        }}
            

    const agregar = (e, id, name) => { 
        e.preventDefault()
        setPaises([...paises,{id , name}])
        setactividad({...actividad, idPais:[...actividad.idPais, id]})
    }

    const eliminar = (e, id) => {
        e.preventDefault()
        setactividad({...actividad, pais: actividad.idPais.filter(pais => pais !== id)})
        setPaises(paises.filter(n => n.id !== id))
    }

    const OnSubmit = (e) => {
        e.preventDefault()
        if(actividad.name && actividad.duracion && actividad.temporada && actividad.idPais?.length > 0 ){
            dispatch(postActivity(actividad))        
            setCountry('')
            setactividad({name:'', duracion: '', dificultad:'', temporada:'', idPais:[] })
            setPaises([])
            dispatch(clearPrevCountries())
            setCountry('')
            setOk(true)
            setError(false)
        } else {
            setError(true)
            setOk(false)
        }
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

            <form onSubmit={OnSubmit}>
                <h1>NUEVAS ACTIVIDADES</h1>
                <div onChange={onChange}>
                    <label>Nombre:</label>
                        <input type='text' name='name' value={actividad.name} placeholder='Nombre de la actividad'  pattern="[a-zA-Z- ]*" onChange={onChange} required />
                    <label>Duración:</label>
                        <input type='number' name='duracion' value={actividad.duracion} placeholder='Duración de la actividad'  onChange={onChange} required />
                    <label>Dificultad:</label>
                        <input type='number' name='dificultad' value={actividad.dificultad} max='5' min='1' placeholder='Dificultad de la actividad' onChange={onChange} required />  
                    
                    <label>Temporada:</label>
                        <input type="radio" id='Otoño' name="temporada" defaultValue='Otoño' checked={(actividad.temporada === 'Otoño') ? true : false} onChange={onChange}/>                           
                        <label htmlFor='Otoño'>Otoño</label>
                        <input type="radio" id='Primavera' name="temporada" defaultValue='Primavera' checked={(actividad.temporada === 'Primavera') ? true : false}  onChange={onChange}/>                           
                        <label htmlFor='Primavera'>Primavera</label>
                        <input type="radio" id='Invierno' name="temporada" defaultValue='Invierno' checked={(actividad.temporada === 'Invierno') ? true : false} onChange={onChange} />                           
                        <label htmlFor='Invierno'>Invierno</label>
                        <input type="radio" id='Verano' name="temporada" defaultValue='Verano' checked={(actividad.temporada === 'Verano') ? true : false} onChange={onChange} />                           
                        <label htmlFor='Verano'>Verano</label>                   
                    <label>Paises</label>
                        <input name='Buscar' type='text' placeholder='Escribi aqui el País que deseas encontrar' value={country} onChange={onChange} />
                        {
                            paises ? (
                                paises?.length > 0 ? (
                                    paises.map(pais => (
                                        <div key={pais.id}>
                                            <p>{pais.name}</p>
                                            <button value='eliminar' onClick={(e) => eliminar(e, pais.id)}>x</button>
                                        </div>
                                    ))
                                ) : (<p>Aca se colacaran los paises que seleccionaste, si te arrepientes toca en la x y se eliminaran</p>)
                                ) : (null)
                            }
                        {
                            prevCountries ? (
                                prevCountries?.length > 0 ? (
                                    prevCountries?.map(pais => (
                                        <ul key={pais.id}>
                                            <li>
                                                {pais.name}
                                                <button value='agregar' onClick={(e) => agregar(e, pais.id, pais.name)}>+</button>                    
                                            </li>
                                        </ul>
                                    ))
                                    ) : <h1>No hay coincidencias</h1>
                            ) : !actividad.idPais ? (
                                    <p>Selecciona un Pais...</p>
                                    ) : (null)
                                }
                <button onSubmit={OnSubmit} >Enviar</button>
                </div>
            </form>
            {
                error ? (
                    <h1>Hubo un error en la creacion de la actividad. Recuerda completar todos los requirimientos</h1>
                ) : ( null )
            }
            {
                ok ? (
                    <>
                    <h1>Actividad creada con exito</h1>
                    <p>¿ Quieres ver todas tus actividades creadas ? <NavLink to='/activities/show'>Mostrar Actividades</NavLink> </p>
                    </>
                ) : (null)
            }
        </>
    )
}
