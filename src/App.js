import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link }  from "react-router-dom";

import Maki from './components/pages/Maki';
import Nigiri from './components/pages/Nigiri';
import Sashimi from './components/pages/Sashimi';
import Tempura from './components/pages/Tempura';
import Home from './components/pages/Home';

import NavigationBar from './components/Navbar';

import SalmonNigiri from './components/pages/SalmonNigiri';
import TunaNigiri from './components/pages/TunaNigiri';
import OctoNigiri from './components/pages/OctoNigiri';

import SalmonSashimi from './components/pages/SalmonSashimi';
import OctoSashimi from './components/pages/OctoSashimi';
import TunaSashimi from './components/pages/TunaSashimi';

import TunaMaki from './components/pages/TunaMaki';
import SalmonMaki from './components/pages/SalmonMaki';
import WhiteTunaMaki from './components/pages/WhiteTunaMaki';

import JumboTempura from './components/pages/JumboTemp';
import ShrimpTempura from './components/pages/ShrimpTemp';
import VeggieTemp from './components/pages/VeggieTemp';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* <Route path='/' exact component={Home} /> */}

        <Route path='/salmon-nigiri' exact component={SalmonNigiri} />
        <Route path='/tuna-nigiri' exact component={TunaNigiri} />
        <Route path='/octopus-nigiri' exact component={OctoNigiri} />

        <Route path='/salmon-sashimi' exact component={SalmonSashimi} />
        <Route path='/tuna-sashimi' exact component={TunaSashimi} />
        <Route path='/octopus-sashimi' exact component={OctoSashimi} />

        <Route path='/salmon-maki' exact component={SalmonMaki} />
        <Route path='/tuna-maki' exact component={TunaMaki} />
        <Route path='/white-tuna-maki' exact component={WhiteTunaMaki} />

        <Route path='/shrimp-tempura' exact component={ShrimpTempura} />
        <Route path='/veggie-tempura' exact component={VeggieTemp} />
        <Route path='/jumbo-tempura' exact component={JumboTempura} />
      </Routes>
    </Router>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);