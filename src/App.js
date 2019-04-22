import React, { Component } from 'react';

import Footer from './components/Footer';

import caozinho1 from './assets/yorkshire-terrier.png';
import caozinho2 from './assets/caozinho1.jpg';
import caozinho3 from './assets/maltes.jpeg';
import caozinho4 from './assets/rottweiler.jpg';
import gatinho5 from './assets/scottishfold.jpeg';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      register: [
        { 
          id: 1,
          'name': 'Evelyn',
          'age': 25,
          'animal': {
            id: 123,
            'type': 'Dog',
            'breed': 'Yorkshire Terrier',
            'pic': <img src={caozinho1} className="App-imgNoticia" />,
            'whatsHappened': 'He is vomiting a lot.'
          }
        },
        {
          id: 2,
          'name': 'Cassio',
          'age': 21,
          'animal': {
            id: 456,
            'type': 'Dog',
            'breed': 'Lulu da Pomerânia',
            'pic': <img src={caozinho2} className="App-imgNoticia" />,
            'whatsHappened': 'He has a flea.'
          }
        },
        {
          id: 3,
          'name': 'Yasmin',
          'age': 18,
          'animal': {
            id: 789,
            'type': 'Dog',
            'breed': 'Maltês',
            'pic': <img src={caozinho3} className="App-imgNoticia" />,
            'whatsHappened': 'He is very isolated.'
          }
        },
        {
          id: 4,
          'name': 'Kelvin',
          'age': 23,
          'animal': {
            id: 101112,
            'type': 'Dog',
            'breed': 'Rottweiler',
            'pic': <img src={caozinho4} className="App-imgNoticia" />,
            'whatsHappened': 'He is vomiting a lot.'
          }
        },
        {
          id: 5,
          'name': 'Alice Cissa',
          'age': 24,
          'animal': {
            id: 131415,
            'type': 'Cat',
            'breed': 'Scottish Fold',
            'pic': <img src={gatinho5} className="App-imgNoticia" />,
            'whatsHappened': 'he broke the leg.'
          }
        }
      ]
    }
  }

  
  renderPeople = () => {
    return this.state.register.map(people => {
      return (
        <div className="App-register">
          <ul key={people.id} className="App_nameList">
            <li>{people.name}</li>
            <li>{people.age}</li>
          </ul>
          <button
            onClick={() => {
              this.renderDescritionEmployee(people);
            }}
          >
            <p>Animal</p>
          </button>
        </div>
      );
    });
  }

  renderDescritionEmployee = people => {
    this.setState({
      isShow: true,
      selectedRegister: people
    });
    console.log(this.state.isShow);
  };

  renderShowModalAnimal = () => {
    const { selectedRegister } = this.state;
      return (
        <div className="App-feed">
          <h3 className="App-feed-title">Pets</h3>
          <div className="App-feed-firstNews">
            <div className="App-feed-firstNews--content">
              <ul key={selectedRegister.animal.id} className="App_nameList">
                <li>{selectedRegister.animal.type}</li>
                <li>{selectedRegister.animal.breed}</li>
                <li>{selectedRegister.animal.whatsHappened}</li>
              </ul>
            </div> 
          </div>
          <button onClick={this.renderClose}>Close Modal</button>
        </div>
      )
    }

  renderClose = ev => {
    this.setState({ isShow: false });
  };
  
  render() {
    return (
      <div className="App">
        <h1>Bem na Web!</h1>
        <header className="App-header">
          {this.renderPeople()}
          {this.state.isShow && this.renderShowModalAnimal()}
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;

//{ this.state.show && this.renderShowModal }
// mesma coisa que
//{ this.state.show === true ? this.renderShowModal: null }

