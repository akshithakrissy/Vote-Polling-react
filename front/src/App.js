import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from './pages/vote'
import Result from './pages/result'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Player />} />
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
