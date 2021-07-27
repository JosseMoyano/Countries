import React from 'react';
import { Route } from 'react-router-dom';
import Inicio from './views/incio.jsx';
import Home from './views/home.jsx';
import DetallePais from './views/detalle_pais.jsx';
import Favoritos from './views/favoritos';
import Actividades from './views/actividades';
import AñadirActividad from './views/añadir_actividad';
import MostrarActividades from './views/mostrar_actividades';
import DetalleActividad from './views/detalle_actividad';

function App() {
  return (
    <>
      <Route exact path='/' component={Inicio} />
      <Route path='/home' component={Home} />
      <Route path='/favoritos' component={Favoritos} />
      <Route exact path='/actividades' component={Actividades} />
      <Route path='/actividades/añadir' component={AñadirActividad} />
      <Route path='/actividades/mostrar' component={MostrarActividades} />
      <Route exact path='/pais/:id' component={DetallePais} />
      <Route exact path='/activity/:id' component={DetalleActividad} />
      </>
  );
}

export default App;
