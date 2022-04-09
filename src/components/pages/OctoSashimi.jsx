import 'bootstrap/dist/css/bootstrap.css';

import salmonSashimi from '../../img/salmon_sashimi.jpg';
import tunaSashimi from '../../img/tuna_sashimi.jpg';
import octopusSashimi from '../../img/tako_sashimi.jpg';

export default function OctoSashimi() {
    return (
        <div className="App">
            <div className='menu'>
                <div className='item'>
                    <img src={octopusSashimi} className="food" alt="octopus-sashimi" />
                    <p>Octopus Sashimi</p>
                </div>
            </div>
        </div>
    )
}