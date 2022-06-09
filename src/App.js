import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import ContactMe from './Pages/ContactMe/ContactMe';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/contactMe' element={<ContactMe></ContactMe>}></Route>
      </Routes>
    </div>
  );
}

export default App;
