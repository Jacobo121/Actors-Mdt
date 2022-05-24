import React from 'react';
import '../style/CardStyle.css';
import { Card, Badge} from 'react-bootstrap';

const Cards = ({card_img, title, text, genders}) => {

    return (
        <>
            <Card className='card_container' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card_img} />
                <Card.Body>
                <Badge style={{color: "black"}} bg="warning">{genders}</Badge>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    <h6>StoryLine:</h6> {text.substr(0,400)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Cards;