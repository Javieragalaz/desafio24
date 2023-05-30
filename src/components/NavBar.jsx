//LIBRERIAS
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

//CONTEXTO
import { PizzaContext } from '../Context';

export default function NavbBar() {

  const { totalPrice } = useContext(PizzaContext);

  return (

    <div>

      <Navbar bg="danger">

        <Container>

          <NavLink to="/" className={({ isActive }) => isActive ? "active" : "not-active"}> The Real Pizza</NavLink>

          <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : "not-active"}> $ {totalPrice}🛒</NavLink>

        </Container>

      </Navbar>

    </div>
  )
}