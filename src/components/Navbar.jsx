// import { Tabs } from 'react-bootstrap';
// import { Tab } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import { Dropdown } from 'react-bootstrap';

// import { ToggleButton } from 'react-bootstrap';
// import { ToggleButtonGroup } from 'react-bootstrap';

// import { useState } from 'react';

// import Maki from './components/pages/Maki';
// import Nigiri from './components/pages/Nigiri';
// import Sashimi from './components/pages/Sashimi';
// import Tempura from './components/pages/Tempura';
// import Home from './components/pages/Home';
// import NavigationBar from './components/Navbar';

import { Container } from 'react-bootstrap'

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

function NavigationBar() {
    // const [key, setKey] = useState('home');
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
     
    return (
      <div className="App">
        <h1>Japanese Sushi Vber Eats Menu</h1>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbar-dark" />
            <Navbar.Collapse id="navbar-dark">
              <Navbar.Brand id="homepage" href="/">Home</Navbar.Brand>
              <Nav>
                <NavDropdown
                  id="nigiri"
                  title="Nigiri"
                  menuVariant="dark"
                  align={{lg:'start'}}
                >
                  <NavDropdown.Item href="salmon-nigiri">Salmon Nigiri</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="tuna-nigiri">Tuna Nigiri</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="octopus-nigiri">Octopus Nigiri</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavDropdown
                  id="maki"
                  title="Maki"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="tuna-maki">Tuna Maki</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="salmon-maki">Salmon Maki</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="white-tuna-maki">White Tuna Maki</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavDropdown
                  id="sashimi"
                  title="Sashimi"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="salmon-sashimi">Salmon Sashimi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="tuna-sashimi">Tuna Sashimi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="octopus-sashimi">Octopus Sashimi</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavDropdown
                  id="tempura"
                  title="Tempura"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="shrimp-tempura">Shrimp Tempura</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="veggie-tempura">Vegetable Tempura</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="jumbo-tempura">Jumbo Shrimp Tempura</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
              {/* <Container className='navbar'> */}
                {/* <Col> */}
                  {/* <Tabs 
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                  >
                    <Tab eventKey="home" title="Home">
                      <Home />
                      <div className='menu'>
                        <h1 className='title'>Sushi, Sashimi, Maki, and More</h1>
                      </div>
                    </Tab>
                    <Tab eventKey="nigiri" title="Nigiri">
                      <Nigiri />
                    </Tab>
                    <Tab eventKey="maki" title="Maki">
                      <Maki/>
                    </Tab>
                    <Tab eventKey="sashimi" title="Sashimi">
                      <Sashimi />
                    </Tab>
                    <Tab eventKey="tempura" title="Tempura">
                      <Tempura />
                    </Tab>
                  </Tabs> */}
                {/* </Col> */}
              {/* </Container> */}
    </div>
  );
}

export default NavigationBar;