import './App.css';

import { useContext } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';

import { Login, Dashboard } from './pages';

import { AuthContext } from './context/AuthContext';

const AuthenticatedRoute = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext);

  console.log(children);

  return (
    <Route {...rest} render={() => 
      authContext.isAuthenticated() ? (
        children
      ) : (
        <Redirect to="/" />
      )
    } />
  );
}

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={Login} />
      <AuthenticatedRoute path="/dashboard">
        <Dashboard />
      </AuthenticatedRoute>
      {/* <Route path="/invite" render={Invite} /> */}
    </Switch>
  );
}

function App() {
  return <AppRoutes />;
}

export default App;
