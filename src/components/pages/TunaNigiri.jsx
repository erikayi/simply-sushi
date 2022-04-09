import 'bootstrap/dist/css/bootstrap.css';

import salmon from '../../img/salmon-nigiri.jpg';
import tuna from '../../img/tuna-nigiri.jpg';
import octopus from '../../img/octopus+nigiri.jpg';

export default function TunaNigiri() {
    return (
        <div className="App">
            <div className='menu'>
                <div className='item'>
                    <img src={tuna} className="food" alt="tuna-nigiri" />
                    <p>Tuna</p>
                </div>
            </div>
        </div>
    )
}