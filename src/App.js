import Navi from './layouts/Navi';
import './App.css';
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
function App() {
  return (
    <div className="App">
      
      <Navi/>
     <Container className='main'><Dashboard/></Container>
    </div>
  );
}

export default App;
