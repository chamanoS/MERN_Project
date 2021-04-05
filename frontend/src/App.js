import React from 'react';
import { Container} from 'react-bootstrap'
import Header from './Components/Header'
import HomeScreen from './Screens/HomeScreen'
import Footer from './Components/Footer'

const App = ()=> {
  return (
    <div>
      <Header></Header>
      <main className="py-3">
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
