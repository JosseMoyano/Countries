// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// import Nav from '../views/nav'

// Enzyme.configure({adapter: new Adapter()});

// describe('<Nav />', () => {
//     let wrapper
//     beforeEach(() => {
//       wrapper = shallow(<Nav />)
//     })
  
//     it('Deberia renderizar 3 <Link />', () => {
//       expect(wrapper.find(NavLink)).toHaveLength(3);
//     });
//     it('El primer Link debe cambiar la ruta hacia /home debe tener el texto "Home"', () => {
//       expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/home');
//       expect(wrapper.find(NavLink).at(0).text()).toEqual('Home');
//     });
//     it('El segundo Link debe tener el texto "Activites" y cambiar la ruta hacia "/activities"', () => {
//       expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/activities');
//       expect(wrapper.find(NavLink).at(1).text()).toEqual('Activites');
//     });
//     it('El tercer Link debe tener el texto "Mi Perfil" y cambiar la ruta hacia "/perfil"', () => {
//       expect(wrapper.find(NavLink).at(2).prop('to')).toEqual('/perfil');
//       expect(wrapper.find(NavLink).at(2).text()).toEqual('Mi Perfil');
//     });
//   })