import './App.css';

import { useContext } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';

import { Login, Dashboard, MyProjects, UserMgt, RoleMgt } from './pages';

import { AuthContext } from './context/AuthContext';

export const AuthenticatedRoute = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext);

  // console.log(children);

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
      <Route exact path="/">
        <Login />
      </Route>
      <AuthenticatedRoute path="/dashboard">
        <Dashboard />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/myprojects">
        <MyProjects />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/usermgt">
        <UserMgt />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/rolemgt">
        <RoleMgt />
      </AuthenticatedRoute>
    </Switch>
  );
}

function App() {
  return <AppRoutes />;
}

export default App;
