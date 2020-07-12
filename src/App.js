import React,{Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import * as reactstrap from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <reactstrap.Navbar dark color="primary">
          <div className="container">
            <reactstrap.NavbarBrand href="/">Ristorante Con Fusion</reactstrap.NavbarBrand>
          </div>
        </reactstrap.Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;