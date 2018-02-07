import * as React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.StatelessComponent<{}> = props => (
  <div className="main-container">
    <header>
      <Link to="/">На главную</Link>  
    </header>
    {props.children}
    <hr/>
    <p className="footer">Текст футера</p>
  </div>
);

export default Layout;