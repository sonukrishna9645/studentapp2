import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Navbar from './components/Navbar';
import Add from './components/Add';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/add' element={<Add data={{id:'',name:'',grade:''}}
                    method="post"/>}/>

      </Routes>
    </div>
  );
}

export default App;
