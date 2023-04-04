import Navi from './layouts/Navi';
import './App.css';
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
import Footer from './layouts/Footer';
function App() {
  return (
    <div className="App">
      
      <Navi/>
     <Container className='main'><Dashboard/></Container>
     <Footer></Footer>
    </div>
  );
}

export default App;
