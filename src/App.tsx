import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
