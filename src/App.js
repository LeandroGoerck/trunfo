import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.saveButtonValidation = this.saveButtonValidation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    if (name === 'cardTrunfo') {
      this.setState(() => ({
        cardTrunfo: target.checked,
      }));
    } else {
      this.setState({ [name]: value }, () => this.saveButtonValidation());
    }

    console.log(name, value);
  }

  handleSaveButton() {
    console.log('Clicou em Salvar');
  }

  saveButtonValidation() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const areEmptyFields = !cardName
      || !cardDescription
      || !cardImage
      || !cardRare;

    const TOTAL_MAX_ATT = 210;
    const atr1Int = parseInt(cardAttr1, 10);
    const atr2Int = parseInt(cardAttr2, 10);
    const atr3Int = parseInt(cardAttr3, 10);
    const attSumIsOK = (atr1Int + atr2Int + atr3Int) <= TOTAL_MAX_ATT;

    const MAX_ATTRIBUTES = 90;
    const eachAttIsLessMax = ((atr1Int <= MAX_ATTRIBUTES)
    && (atr2Int <= MAX_ATTRIBUTES)
    && (atr3Int <= MAX_ATTRIBUTES));

    const attAreNotNegative = ((atr1Int >= 0)
    && (atr2Int >= 0)
    && (atr3Int >= 0));

    if (areEmptyFields === false
      && attSumIsOK
      && eachAttIsLessMax
      && attAreNotNegative
    ) {
      this.setState(() => ({
        isSaveButtonDisabled: false,
      }));
    } else {
      this.setState(() => ({
        isSaveButtonDisabled: true,
      }));
    }
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div className="app">
        <h1>Tryunfo</h1>
        <section className="container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.handleSaveButton }
            onKeyUp={ this.saveButtonValidation }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
      </div>
    );
  }
}

export default App;
