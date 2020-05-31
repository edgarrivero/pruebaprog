import React from 'react';
import ReactDOM from 'react-dom';
import Usuarios from './Usuarios';
import Ejecucion from  './ejecucion';
import Productos from './Productos';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Example() {
    return (
        <Router>

    
            <div className="container">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/inicio" className="nav-item nav-link">Inicio        </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" className="nav-item nav-link">Inicio        </Link>
                    <Link to="/productos"  className="nav-item nav-link"> Productos        </Link>
                    <Link to="/usuarios"  className="nav-item nav-link"> Usuarios        </Link>
                </div>
            </div>
            </nav>

                    
                <Switch>
                <Route path='/' exact>
                    <Ejecucion></Ejecucion>
                </Route>
                
                <Route path='/productos' exact>
                    <Productos></Productos>
                </Route>
                <Route path='/Usuarios' exact>
                    <Usuarios></Usuarios>
                </Route>
                
                </Switch>
            

            
            </div>

    
      
    
    </Router>

    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
