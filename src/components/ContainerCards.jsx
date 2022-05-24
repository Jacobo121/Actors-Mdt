import React from 'react';

import '../style/ContainerCardsStyle.css';

const ContainerCards = ({children}) => {
    return (
        <div id='container_card'>
            {
                children
            }
        </div>
    );
}

export default ContainerCards;