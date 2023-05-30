//LIBRERIAS
import { useContext } from "react"
import { Link } from 'react-router-dom';


//CONTEXTO
import { PizzaContext } from "../Context";

//ESTILOS
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function Home() {

    const [pizzas, addToCart, setPizzaArray, setTotalPrice] = useContext(PizzaContext);


    return (

        <div>

            <header className="header">
                <h1>¡Pizzería The Real Pizza</h1>
                <h4>¡Aquí encontrarás LA PIZZA que buscas!</h4>
            </header>


            <Container className="mt-4"> {pizzas.map((pizza) => (

                <Card style={{ width: '18rem' }} key={pizza.id} >

                    <Card.Img variant="top" src={pizza.img} />

                    <Card.Body>
                        <Card.Title>{pizza.name}</Card.Title>

                        <ListGroup className="list-group-flush"> Ingredients </ListGroup>

                        {pizza.ingredients.map((ingredients) => (

                            <ListGroup.Item>{ingredients}</ListGroup.Item>))}

                        <ListGroup className="list-group-flush"><span>${pizza.price}</span></ListGroup>

                        <Card.Body>

                            <Link to={`/pizza/${pizza.id}`}>

                                <Button className='btn-see-more'>Ver más</Button>

                            </Link>

                            <Button className='btn-add' onClick={() => { addToCart(pizza.id); setTotalPrice(setPizzaArray(pizza.id)) }}>Añadir</Button>

                        </Card.Body>
                    </Card.Body>

                </Card>))}

            </Container >
        </div >
    )
}


