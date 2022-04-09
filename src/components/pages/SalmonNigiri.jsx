import 'bootstrap/dist/css/bootstrap.css';

import salmon from '../../img/salmon-nigiri.jpg';
import tuna from '../../img/tuna-nigiri.jpg';
import octopus from '../../img/octopus+nigiri.jpg';

export default function SalmonNigiri() {
    return (
        <div className="App">
            <div className='menu'>
                <div className='item'>
                    <img src={salmon} className="food" alt="salmon-nigiri" />
                    <p>Salmon</p>
                </div>
            </div>
        </div>
    )
}