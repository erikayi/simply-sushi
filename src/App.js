import './App.css';
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";

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
        <Route path='salmon-nigiri' component={<SalmonNigiri />} />
        <Route path='tuna-nigiri' component={<TunaNigiri />} />
        <Route path='octopus-nigiri' component={<OctoNigiri />} />

        <Route path='salmon-sashimi' component={<SalmonSashimi />} />
        <Route path='tuna-sashimi' component={<TunaSashimi />} />
        <Route path='octopus-sashimi' component={<OctoSashimi />} />

        <Route path='salmon-maki' component={<SalmonMaki />} />
        <Route path='tuna-maki' component={<TunaMaki />} />
        <Route path='white-tuna-maki' component={<WhiteTunaMaki />} />

        <Route path='shrimp-tempura' component={<ShrimpTempura />} />
        <Route path='veggie-tempura' component={<VeggieTemp />} />
        <Route path='jumbo-tempura' component={<JumboTempura />} />
      </Routes>
    </Router>
  );
}

export default App;

