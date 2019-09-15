import React, { Component } from 'react'
import './citat.css'

class addcitat extends Component {

    state = {
        Overskrift: null,
        Citattekst: null,
        Forfatter: null
    }

    handleChanges = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCitat(this.state);
    }

    render() {
        return (
            <div>
                
                        <form className="center black-text"onSubmit={this.handleSubmit}>

                            <label className="center black-text"htmlFor="overskrift">Overskrift:</label>
                            <input className="center black-text"type="text" id="Overskrift" onChange={this.handleChanges}/>

                            <label className="center black-text"htmlFor="citattekt">Citattekt:</label>
                            <input className="center black-text"type="text" id="Citattekst" onChange={this.handleChanges}/>

                            <label className="center black-text"htmlFor="forfatter"> Forfatter: </label>
                            <input className="center black-text"type="text" id="Forfatter" onChange={this.handleChanges}/>

                            <button className="center waves-effect orange waves-light btn pulse"><i class="material-icons white-text right">add</i>Opret her</button>

                        </form>
                    
            </div>
        )
    }
}

export default addcitat
