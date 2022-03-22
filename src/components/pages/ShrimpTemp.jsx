import 'bootstrap/dist/css/bootstrap.css';

import shrimpTempura from '../../img/shrimp_tempura.jpg';
import VeggieTempura from '../../img/VegetableTempura.jpg';
import jumboTempura from '../../img/jumbo_shrimp_tempura.jpg';

export default function ShrimpTempura() {
    return (
        <div className="App">
            <div className='menu'>
                <div className='item'>
                    <img src={shrimpTempura} className="food" alt="shrimp-tempura" />
                    <p>Shrimp Tempura</p>
                </div>
            </div>
        </div>
    )
}