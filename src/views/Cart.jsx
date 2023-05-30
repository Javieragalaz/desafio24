//LIBRERIAS
import { useContext } from "react"


//ESTILOS

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

//CONTEXTO

import { PizzaContext } from "../Context";

export default function ShoppingCart ()  {

  const { setCart, addToCart, removePizza, totalPrice, setTotalPrice, addedPizza, setPizzaArray } = useContext(PizzaContext)

  let list = []
  let count = 1

  const cartList = () => {
    for (let i = 0; i < addedPizza.length; i++) {
      let index = addedPizza[i];

      if (index  === addedPizza[i + 1]) {
        count++
      }
      else {
        const newCartList = {
          id: index.id,
          name: index.name,
          price: index.price,
          img: index.img,
          count: count,
          result: count * index.price
        }
        list.push(newCartList)
        count = 1
      }
    }
  }

  cartList();
  setCart(addedPizza);

  return (

    <div>

      <Container className="mt-3">
        <Card>

          <Card.Body>
          {list.map((pizza) => (
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
             
                <ListGroup.Item variant="primary">Products details</ListGroup.Item>
                <ListGroup.Item variant="primary"><img src="{pizza.img}" alt="" /></ListGroup.Item>
                <ListGroup.Item variant="primary">{pizza.name}</ListGroup.Item>
                <ListGroup.Item variant="primary">${pizza.result}</ListGroup.Item>

           

              <Button variant="primary" onClick = {() => {removePizza (pizza.id)}}> - </Button>
              <ListGroup.Item variant="primary">{pizza.count}</ListGroup.Item>
              <Button variant="primary" onClick = {() => {addToCart (pizza.id), setTotalPrice (setPizzaArray(pizza.id))}}> + </Button>


            </ListGroup.Item>))}
          </Card.Body>
          <ListGroup.Item variant="primary">Total: ${totalPrice}</ListGroup.Item>
          <button>ir a pagar</button>
        </Card>
      </Container>
    </div>
  )
}
