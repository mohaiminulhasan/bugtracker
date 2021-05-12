import './App.css';

import { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Login, Home, NewProject, MyProjects, Project, UserMgt, RoleMgt } from './pages';

import { AuthContext } from './context/AuthContext';

export const AuthenticatedRoute = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext);

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
      <AuthenticatedRoute path="/home">
        <Home />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/new/project">
        <NewProject />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/myprojects/:projectSlug">
        <Project />
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
  return (
    <>
    <AppRoutes />
    </>
  );
}

export default App;
