import 'bootstrap/dist/css/bootstrap.css';

import salmonMaki from '../../img/salmon-maki.jpg';
import tunaMaki from '../../img/Tekkamaki.jpg';
import whiteMaki from '../../img/white_tuna_maki.jpg';

export default function Maki() {
    return (
        <div className="App">
            <div className='menu'>
                <div className='item'>
                    <img src={tunaMaki} className="food" alt="tuna-maki" />
                    <p>Tuna Maki</p>
                </div>
                <div className='item'>
                    <img src={salmonMaki} className="food" alt="salmon-maki" />
                    <p>Salmon Maki</p>
                </div>
                <div className='item'>
                    <img src={whiteMaki} className="food" alt="white-tuna-maki" />
                    <p>White Tuna Maki</p>
                </div>
            </div>
        </div>
    )
}