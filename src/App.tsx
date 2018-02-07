import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import NoMath from './containers/NoMath';
import DynamicPage from './containers/DynamicPage';

import './sass/main.scss';

const App: React.StatelessComponent<{}> = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/dynamic" component={DynamicPage} exact={true} />
      <Route component={NoMath} />
    </Switch>
  </Router>
);

export default App;