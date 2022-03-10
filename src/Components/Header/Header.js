import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container,NavDropdown, Image } from 'react-bootstrap'
import Home from '../Pages/Home';
import Distribution from '../Pages/Distribution';
import TradeContract from '../Pages/TradeContract';
import './Header.css'
import Products from '../Pages/Products';

function Header() {
    //navbar color change on scroll

    const [color, setcolor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }
    window.addEventListener("scroll", changeColor)
  return (
<Router >
 <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" className={color ? "navbar navbar-bg ": "navbar"}>
        <Container>
        <Navbar.Brand href="/"><img src='/images/logo1.png' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href='/'>HOME</Nav.Link>
            <Nav.Link href="#brand" >OUR BRAND</Nav.Link>
            <Nav.Link href="/Products">OUR PRODUCTS</Nav.Link>
            <NavDropdown title="OUR SERVICES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/import_and_distribution">IMPORTER AND DISTRIBUTER</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/trading_and_contracting"> TRADING AND CONTRACTING</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link}>ABOUT US</Nav.Link>
            <Nav.Link  as={Link}>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div>
    <Switch>
          <Route path='/' exact component={Home} >
            <Home />
           </Route>

          <Route path='/import_and_distribution' exact component={Distribution} > 
          <Distribution />
          </Route>
          <Route path='/trading_and_contracting' exact component={TradeContract} > 
          <TradeContract />
          </Route>
          <Route path='/Products' exact component={Products}>
            <Products />
            </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default Header