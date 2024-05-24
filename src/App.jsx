import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseHome from './Component/allcourses/CourseHome'
import HomePage from './Component/home/HomePage';
import AboutPage from './Component/about/AboutPage';
import BlogPage from './Component/blog/BlogPage';
import ContactPage from './Component/contact/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/service' element={<CourseHome />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/blog' element={<BlogPage />} />
          <Route exact path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App;