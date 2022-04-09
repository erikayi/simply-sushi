import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
=======
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link }  from "react-router-dom";
>>>>>>> 9a15d206c98ed05b0bfdc5b7c164f3ed7b893548

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 9a15d206c98ed05b0bfdc5b7c164f3ed7b893548
      </Routes>
    </Router>
  );
}

export default App;

<<<<<<< HEAD
=======
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
>>>>>>> 9a15d206c98ed05b0bfdc5b7c164f3ed7b893548
