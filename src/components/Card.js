import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card-container">
        <p data-testid="name-card">{cardName}</p>
        <div className="image-card">
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>

        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{`Attr1: ${cardAttr1}`}</p>
        <p data-testid="attr2-card">{`Attr2: ${cardAttr2}`}</p>
        <p data-testid="attr3-card">{`Attr3: ${cardAttr3}`}</p>
        <p data-testid="rare-card">{cardRare}</p>
        <p>{cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
