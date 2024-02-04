
import './App.css';
import {Routes,Route} from 'react-router-dom'



import Characters from './components/Characters';
import InfoPage from './components/InfoPage';
import Header from './components/Header';

function App() {
 
 
  return (
    <div className="App">
      <Header/>
      <Routes>
        
        <Route path='/' element={<Characters/>} />
        <Route path='/:id' element={<InfoPage/>} />
      </Routes>
      

    </div>
  );
}

export default App;
