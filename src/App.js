import React from 'react';
import './App.css'; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import OverView from './components/overview/OverView';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/:username' element={<OverView/>}/>
        <Route path='*' element={<OverView/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
