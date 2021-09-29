import './App.css';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
import EditUser from './components/EditUser';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path='/' component={Home}/>
            <ProtectedRoute exact path='/products' component={Products}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <ProtectedRoute exact path='/edit_user' component={EditUser}/>
            <Route component={()=><p>react 404 path not found</p>} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
