import './App.css';

import React from 'react';
import { Route } from 'react-router-dom';

import Inicio from './views/incio.jsx';
import Home from './views/home.jsx';
import DetailCountry from './views/detail_country.jsx';
import MiPerfil from './views/mi_perfil';
import Activities from './views/activities';
import AddActivities from './views/add_activities';
import Nav from './views/nav';
import ShowActivities from './views/show_activities';
import DetailActivity from './views/detail_activity';

function App() {
  return (
    <>
    <Route path='/' component={Nav} />
    <Route path='/inicio' component={Inicio} />
    <Route exact path='/' component={Home} />
    <Route path='/perfil' component={MiPerfil} />
    <Route exact path='/activities' component={Activities} />
    <Route path='/activities/add' component={AddActivities} />
    <Route path='/activities/show' component={ShowActivities} />
    <Route exact path='/countries/:id' component={DetailCountry} />
    <Route exact path='/activity/:id' component={DetailActivity} />
    </>
  );
}

export default App;

/*
1. Inicio: Primero hay que hacer el back
2. Estaria bueno que la ruta de MIPerfil sea /:name
*/
