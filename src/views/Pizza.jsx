//LIBRERIAS
import { useContext } from "react"
import { useParams } from "react-router-dom";

//CONTEXTO
import { PizzaContext } from "../Context"


// ESTILOS
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PizzaDescription() {
    const params = useParams();
    const { pizzas, addToCart, setPizzaArray, setTotalPrice } = useContext(PizzaContext)
    const getPizzaById = (id) => pizzas.find((pizza) => pizza.id === id);
    const pizza = getPizzaById (params.id);

    return (

        <div>
            {pizzas.map((pizza) => (
                <Card style={{ width: '18rem' }} key={pizza.id}>
                    <Card.Img variant="top" src={pizza.img} />


                    <Card.Title>{pizza.name}</Card.Title>

                    <Card.Text> {pizza.desc} </Card.Text>

                    <ListGroup className="list-group-flush"> Ingredients</ListGroup>

                    {pizza.ingredients.map((ingredients) => (
                        <ListGroup.Item>{ingredients}</ListGroup.Item>))}

                    <ListGroup className="list-group-flush"> <span>${pizza.price}</span></ListGroup>



                    <Card.Body>
                        <Button className="btn-add" onClick={() => { addToCart(pizza.id); setTotalPrice(setPizzaArray(pizza.id)) }}>Añadir</Button>
                    </Card.Body>
                </Card>))}
        </div>

    )
}
