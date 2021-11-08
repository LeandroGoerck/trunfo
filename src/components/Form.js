import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            Nome:
            <input
              id="name-input"
              data-testid="name-input"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              placeholder="Nome"
            />
          </label>

          <label htmlFor="description-input">
            Descrição
            <textarea
              data-testid="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            >
              Algum texto em uma área de texto
            </textarea>
          </label>

          <label htmlFor="attr1-input">
            Atributo 1
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2-input">
            Atributo 2
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3-input">
            Atributo 3
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image-input">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito-raro</option>
            </select>
          </label>

          {hasTrunfo ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="trunfo-input">
              <input
                id="super-trunfo"
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super tryunfo
            </label>
          )}

          <button
            className="form-button"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
