
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Restaurant from './Restaurant';
import Restview from './Restview';
import Hiam from './Hiam';
import Formview from './Formview';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Restaurant />}>
        </Route>
        <Route path='/viewRest/:id' element={<Restview />}>
        </Route>
        <Route path='/view' element={<Hiam/>}>
        </Route>
        <Route path='/formview' element={<Formview/>}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
