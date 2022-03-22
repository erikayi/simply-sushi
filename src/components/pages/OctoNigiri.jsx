import 'bootstrap/dist/css/bootstrap.css';

import salmon from '../../img/salmon-nigiri.jpg';
import tuna from '../../img/tuna-nigiri.jpg';
import octopus from '../../img/octopus+nigiri.jpg';

export default function OctoNigiri() {
    return (
        <div className="App">
            <div className='menu'>
                <div className='item'>
                    <img src={octopus} className="food" alt="octopus-nigiri" />
                    <p>Octopus</p>
                </div>
            </div>
        </div>
    )
}