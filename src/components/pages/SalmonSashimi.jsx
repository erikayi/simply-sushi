import 'bootstrap/dist/css/bootstrap.css';

import salmonSashimi from '../../img/salmon_sashimi.jpg';
import tunaSashimi from '../../img/tuna_sashimi.jpg';
import octopusSashimi from '../../img/tako_sashimi.jpg';

export default function SalmonSashimi() {
    return (
        <div className="App">
            <div className='menu'>
                <div className='item'>
                    <img src={salmonSashimi} className="food" alt="salmon-sashimi" />
                    <p>Salmon Sashimi</p>
                </div>
            </div>
        </div>
    )
}