import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      // hasTrunfo,
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
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            <textarea
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            >
              Algum texto em uma área de texto
            </textarea>
          </label>

          <label htmlFor="attr1-input">
            <input
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2-input">
            <input
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3-input">
            <input
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image-input">
            <input
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option selected value="normal">
              normal
            </option>
            <option value="raro">raro</option>
            <option value="muito raro">muito-raro</option>
          </select>

          <label htmlFor="trunfo-input">
            <input
              id="super-trunfo"
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            type="submit"
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
