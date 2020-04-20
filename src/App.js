import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import HtmlDefinition from './HtmlDefinition'
import CssDefinition from './CssDefinition'
import JsDefinition from './JsDefinition'

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/HtmlDefinition">HTML</Link></li>
        <li><Link to="/CssDefinition">CSS</Link></li>
        <li><Link to="/JsDefinition">JS</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/HtmlDefinition" component={HtmlDefinition} />
        <Route exact path="/CssDefinition" component={CssDefinition} />
        <Route exact path="/JsDefinition" component={JsDefinition} />
      </Switch>
    </div>
  );
}

export default App;
