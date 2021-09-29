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
import Charts from './pages/Charts';
import FindProducts from './pages/FindProducts';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path='/' component={Home}/>
            <ProtectedRoute exact path='/products' component={Products}/>
            <ProtectedRoute exact path='/categories' component={Categories}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/findproducts' component={FindProducts} />
            <Route exact path='/register' component={Register}/>
            <Route exact path='/charts' component={Charts}/>
            <ProtectedRoute exact path='/edit_user' component={EditUser}/>
            <Route component={()=><p>react 404 path not found</p>} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
