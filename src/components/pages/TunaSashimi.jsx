import 'bootstrap/dist/css/bootstrap.css';

import salmonSashimi from '../../img/salmon_sashimi.jpg';
import tunaSashimi from '../../img/tuna_sashimi.jpg';
import octopusSashimi from '../../img/tako_sashimi.jpg';

export default function TunaSashimi() {
    return (
        <div className="App">
            <div className='menu'>
                <div className='item'>
                    <img src={tunaSashimi} className="food" alt="tuna-sashimi" />
                    <p>Tuna Sashimi</p>
                </div>
            </div>
        </div>
    )
}