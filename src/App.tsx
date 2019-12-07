import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes, NoMatch } from './Routes';
import NavBar from './components/NavBar';
import './main.css'

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavBar />
        <Suspense fallback={<h2 className='page'>loading…</h2>}>
          <Switch>
            {routes.map(route => {
              return <Route key={route.name} exact path={route.path} component={route.component} />
            })}
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;