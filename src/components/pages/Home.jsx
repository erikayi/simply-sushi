import 'bootstrap/dist/css/bootstrap.css';

import sushi from '../../img/sushis.jpg';
import moreSushis from '../../img/moreSushis.jpg';
import moreMoreSushis from '../../img/japanese-sushis.jpg';

export default function Home() {
    return (
        <div className="App">
            <div className='menu'>
                <div className='item'>
                    <img src={sushi} className="food" alt="decoratedSushi" />
                </div>
                <div className='item'>
                    <img src={moreSushis} className="food" alt="sushi" />
                </div>
                <div className='item'>
                    <img src={moreMoreSushis} className="food" alt="sushi-and-rolls" />
                </div>
            </div>
        </div>
    )
}