import React from 'react';
import '../style/CardStyle.css';
import { Card} from 'react-bootstrap';

const Cards = ({card_img, title, text}) => {
    return (
        <>
            <Card className='card_container' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card_img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Cards;