import React from 'react';
import './citat.css'

const Citat = ({citats, deleteCitat}) => {

    const citatList = citats.map(c => {

        if (c.forfatter !== 'Frank'){

            return (
                <div className="citat col s6" key={c.id}>
                   
                    <div className="box">
                        
                        <div>Overskrift: { c.Overskrift }</div>
                        <div>Citattekst: { c.Citattekst }</div>
                        <div>Forfatter:  { c.Forfatter }</div>
                        <button className="center waves-effect orange waves-light btn" onClick={() => {deleteCitat (c.id)}}><i class="material-icons right">delete_forever</i>Slet Citat</button>
                    </div>
                    
                </div>
            )

        } else {
            return null
        }
})




return [
    <div className="citat-list row">
       
        { citatList }
               
    </div>
]
}
export default Citat
