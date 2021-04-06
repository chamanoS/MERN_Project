import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container} from 'react-bootstrap'
import Header from './Components/Header'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import Footer from './Components/Footer'

const App = ()=> {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductScreen}/>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
