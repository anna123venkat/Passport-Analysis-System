import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import PassportAnalysis from './pages/PassportAnalysis';
import Query1 from './pages/Query1';
import Query2 from './pages/Query2';
import Query3 from './pages/Query3';
import Query4 from './pages/Query4';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/passport-analysis' element={<PassportAnalysis />} />
          <Route path='/query1' element={<Query1 />} />
          <Route path='/query2' element={<Query2 />} />
          <Route path='/query3' element={<Query3 />} />
          <Route path='/query4' element={<Query4 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
