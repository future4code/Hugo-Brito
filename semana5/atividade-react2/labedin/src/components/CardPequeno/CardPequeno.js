import React from 'react';
import SmallCardContainer from './styleCardPequeno';

function CardPequeno(props) {
    return (

        <SmallCardContainer>

            <img src={ props.imagem } />
            <div>
                <p>{ props.descricao }</p>
            </div>

        </ SmallCardContainer>
    )
}

export default CardPequeno;