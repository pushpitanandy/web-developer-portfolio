import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import ContactMe from './Pages/ContactMe/ContactMe';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import ProjectDetail from './Pages/Projects/ProjectDetail';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/projects/:projectId' element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contactMe' element={<ContactMe></ContactMe>}></Route>
      </Routes>
    </div>
  );
}

export default App;
