import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bulma/css/bulma.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Team from './components/Team';
import Imprint from './components/Imprint';
import CodeOfConduct from './components/CodeOfConduct';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/team" component={Team}/>
            <Route path="/code-of-conduct" component={CodeOfConduct}/>
            <Route path="/imprint" component={Imprint}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
