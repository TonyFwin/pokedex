import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import PokemonDetail from './components/main/PokemonDetail';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className='App flex flex-col h-screen'>
        <Navbar />
        <div className='container m-0 ml-auto mr-auto'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route
              exact
              path='/pokemon/:pokemonIndex'
              component={PokemonDetail}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
