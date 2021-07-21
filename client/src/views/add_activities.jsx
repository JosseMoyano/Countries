import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postActivity, clearPrevCountries, searchPrevCountries } from '../redux/action';
import { StyledAñadirActividades } from './Añadir Acitivdades/añadir_actividades'
export default function AddActivities (){

    const dispatch = useDispatch()
    const history = useHistory();

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
            
    const aceptar = (e) => {
        if(e.target.value ==='error'){
        setError(false)}
        if(e.target.value === 'ok'){
        setOk(false)
        }
    }

    const agregar = (e, id, name, bandera) => { 
        e.preventDefault()
        setPaises([...paises,{id , name, bandera}])
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
        <StyledAñadirActividades>
            <div className='div_container1'>
                <h1 className='h1_titulo'>Añadir actividades</h1>
                <p className='p'>Llena este formulario para añadir distintas actividades que puedan ser realizadas en los diferentes países del mundo</p>
                <p className='p'>Todos los son campos obligatorios, es decir que para poder crear una nueva actividad debes llenar todos los campos, en donde:</p>
               
            </div>

            <div className='div_container2'>
                <form className='form' onSubmit={OnSubmit} onChange={onChange}>
               
                    <div className='div_container3'>
                        <div className='div_labels'>
                            <label className='label'>Nombre:</label>
                            <label className='label'>Duración:</label>
                            <label className='label'>Dificultad:</label>
                            <label className='label'>Temporada:</label>
                            <label className='label'>Paises</label>
                        </div>
                        <div className='div_inputs'>
                            <input className='input' type='text' name='name' value={actividad.name} placeholder='El nombre por el cual se conoce la actividad'  pattern="[a-zA-Z- ]*" onChange={onChange} required />
                            <input className='input' type='number' name='duracion' value={actividad.duracion} placeholder='Cuanto dura la culminación de la actividad en si. Debes colocar este dato en MINUTOS, y solo el número'  onChange={onChange} required />
                            <input className='input' type='number' name='dificultad' value={actividad.dificultad} max='5' min='1' placeholder='Este campo solo aceptara valores enteros del 1 al 5, donde 1 es la dificultad minima y 5 es la dificultad maxima' onChange={onChange} required />  
                            <div className='input'>
                                <input className='' type="radio" id='Verano' name="temporada" defaultValue='Verano' checked={(actividad.temporada === 'Verano') ? true : false} onChange={onChange} />                           
                                <label htmlFor='Verano'>Verano</label> 
                                <input className='' type="radio" id='Otoño' name="temporada" defaultValue='Otoño' checked={(actividad.temporada === 'Otoño') ? true : false} onChange={onChange}/>                           
                                <label htmlFor='Otoño'>Otoño</label>
                                <input className='' type="radio" id='Primavera' name="temporada" defaultValue='Primavera' checked={(actividad.temporada === 'Primavera') ? true : false}  onChange={onChange}/>                           
                                <label htmlFor='Primavera'>Primavera</label>
                                <input className='' type="radio" id='Invierno' name="temporada" defaultValue='Invierno' checked={(actividad.temporada === 'Invierno') ? true : false} onChange={onChange} />                           
                                <label htmlFor='Invierno'>Invierno</label>
                            </div>
                            <input className='input' name='Buscar' type='text' placeholder='Elegí los paises en donde se puede realizar la actividad. Podés elegir mas de uno' value={country} onChange={onChange} />
                        </div>
                    </div>
                    {
                        paises?.length > 0 ? (
                            <div className='div_paises div_paises_1' >
                                {
                                    paises.map(pais => (
                                        <div key={pais.id}>
                                            {/* <p>{pais.name}</p> */}
                                            <button value='eliminar' onClick={(e) => eliminar(e, pais.id)}><img  src={pais.bandera} alt='pais.bandera'/></button>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (<div className='div_texto div_paises_1'>Aca se colacaran los paises que seleccionaste, si te arrepientes toca en la bandera y se eliminará.</div>)
                    }
                    {
                        Array.isArray(prevCountries) ? (
                            <div className='div_paises' >
                                    {
                                        prevCountries?.map(pais => (
                                            <div key={pais.id} >
                                                <button value='agregar' onClick={(e) => agregar(e, pais.id, pais.name, pais.bandera)}><img  src={pais.bandera} alt='pais.bandera'/></button>                    
                                            </div>
                                        ))
                                    }
                            </div>
                        ) : (<div className='div_null' >{null}</div>)
                    }
                    <div className='div_buttons'>
                        <button className='button_form' onSubmit={OnSubmit} >Enviar</button>
                        <button className='button_form' onClick={() => history.goBack()} >Cancelar</button>
                    </div>
                </form>
            </div>

                {/* <div className='div_labelinput'> */}
                    {/* <label className='label'>Nombre:</label> */}
                    {/* <input className='input' type='text' name='name' value={actividad.name} placeholder='Nombre de la actividad'  pattern="[a-zA-Z- ]*" onChange={onChange} required /> */}
                {/* </div> */}

                {/* <div className='div_labelinput'> */}
                    {/* <label className='label'>Duración:</label> */}
                    {/* <input className='input' type='number' name='duracion' value={actividad.duracion} placeholder='Duración de la actividad'  onChange={onChange} required /> */}
                {/* </div> */}
                
                {/* <div className='div_labelinput'> */}
                    {/* <label className='label'>Dificultad:</label> */}
                    {/* <input className='input' type='number' name='dificultad' value={actividad.dificultad} max='5' min='1' placeholder='Dificultad de la actividad' onChange={onChange} required />   */}
                {/* </div> */}
                    
                {/* <div className='div_labelinput'> */}
                    {/* <label className='label'>Temporada:</label> */}
                        {/* <input className='' type="radio" id='Otoño' name="temporada" defaultValue='Otoño' checked={(actividad.temporada === 'Otoño') ? true : false} onChange={onChange}/>                           
                        <label htmlFor='Otoño'>Otoño</label>
                        <input className='' type="radio" id='Primavera' name="temporada" defaultValue='Primavera' checked={(actividad.temporada === 'Primavera') ? true : false}  onChange={onChange}/>                           
                        <label htmlFor='Primavera'>Primavera</label>
                        <input className='' type="radio" id='Invierno' name="temporada" defaultValue='Invierno' checked={(actividad.temporada === 'Invierno') ? true : false} onChange={onChange} />                           
                        <label htmlFor='Invierno'>Invierno</label>
                        <input className='' type="radio" id='Verano' name="temporada" defaultValue='Verano' checked={(actividad.temporada === 'Verano') ? true : false} onChange={onChange} />                           
                        <label htmlFor='Verano'>Verano</label>  */}
                {/* </div> */}
                {/* <div className='div_labelinput'> */}
                    {/* <label className='label'>Paises</label> */}
                    {/* <input className='input' name='Buscar' type='text' placeholder='Escribi aqui el País que deseas encontrar' value={country} onChange={onChange} /> */}
                {/* </div> */}
{/*                        
                        {
                            // paises ? (
                                paises?.length > 0 ? (
                                <div>
                                    {
                                        paises.map(pais => (
                                            <div key={pais.id}>
                                                <p>{pais.name}</p>
                                                <button value='eliminar' onClick={(e) => eliminar(e, pais.id)}>x</button>
                                            </div>
                                        ))
                                    }
                                </div>
                                ) : (<div>Aca se colacaran los paises que seleccionaste, si te arrepientes toca en la x y se eliminaran</div>)
                                // ) : (null)
                        }
                         */}
                        {/* {
                            prevCountries?.length > 0 ? (
                                    <div className='div_paises1'>
                                        {
                                            prevCountries?.map(pais => (
                                                <div key={pais.id} className='div_pais'>
                                                    <button value='agregar' onClick={(e) => agregar(e, pais.id, pais.name)}><img src={pais.bandera} alt='pais.bandera'/></button>                    
                                                </div>
                                            ))
                                        }
                                    </div>
                              
                            ) : (null)
                        } */}
                {/* <button onSubmit={OnSubmit} >Enviar</button> */}
                {/* </div> */}
            {/* </form> */}
            {/* </div> */}
            {
                error ? (
                    <div className='div_modal'>
                        <h2  className='h2_modal'>Hubo un error en la creacion de la actividad. Recuerda completar todos los requirimientos</h2>
                        <button value='error' className='button_modal' onClick={(e) => aceptar(e)}>Aceptar</button>
                    </div>
                ) : ( null )
            }
            {
                ok ? (
                    <div className='div_modal'>
                        <h2 className='h2_modal'>Actividad creada con exito</h2>
                        <div className='div_buttons_modals'>                            
                        <button value='ok' className='button_modal' onClick={(e) => aceptar(e)}>Aceptar</button>
                        <button type='button' className='button_modal' onClick={() => history.push('/activities/show')}>Mostrar Actividades</button>
                        </div>                    
                    </div>
                ) : (null)
            }
        </StyledAñadirActividades>
    )
}
