import React, { Component } from 'react';
import Citat from './citat';
import Addcitat from './addcitat';

class App extends Component {

  state = {
    Citats : [
      { Overskrift: 'Her er jeg', Citattekst: 'Lorem ipsum dolor sit amet.', Forfatter: 'Frank', id: 1 },
      { Overskrift: 'Her er jeg', Citattekst: 'Lorem ipsum dolor sit amet.', Forfatter: 'Frank', id: 2 },
      { Overskrift: 'Her er jeg', Citattekst: 'Lorem ipsum dolor sit amet.', Forfatter: 'Frank', id: 3 },
      { Overskrift: 'Her er jeg', Citattekst: 'Lorem ipsum dolor sit amet.', Forfatter: 'Frank', id: 4 },
      { Overskrift: 'Her er jeg', Citattekst: 'Lorem ipsum dolor sit amet.', Forfatter: 'Frank', id: 5 }
    ]
  }

  addCitat = (citat) => {
    citat.id = Math.random();
    let citats = [...this.state.Citats, citat];
    this.setState({
      Citats: citats
    })
  }

  deleteCitat = (id) => {
    let skalslettes = window.confirm("Vil du virkelig slette dette Guld??");

    if(skalslettes === true){
      let citats= this.state.Citats.filter(citat => {
        return citat.id !== id
      });
      this.setState({
        Citats: citats
      })
    }
  }
  componentDidMount(){
    console.log('componenet mounted');
    
  }
  componentDidUpdate(prevProps, prevState){
    console.log('componenet updated');
    console.log(prevProps, prevState);
    
    
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center orange-text darken-2">Min citat side</h1>
        <p className="center ">Du skal bare tilføj dit Citat ;-)</p>

        <Citat deleteCitat={this.deleteCitat} citats={this.state.Citats} />
        <Addcitat addCitat={this.addCitat} />
      </div>
    );
  }
}

export default App
