import NavBar from './components/NavBar';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Footer from './components/Footer';

import FormComponent from './components/FormComponent';

import {
  Route,
  Routes
} from "react-router-dom";
import PostDetails from './components/PostDetails';
import ForApi from './components/ForApi';
import PostList from './components/Screen2';



function App() {
  return (
    <div className="mainDiv">
      <NavBar />

      <div className='internalDiv'>
        <Routes>
          <Route path="/" />
          <Route path="/screen1" element={<Screen1 />} />
          <Route path="/screen2" element={<Screen2 />} />
          <Route path="/screen3" element={<Screen3 />} />
          <Route path="/postdetails" element={<PostDetails/>} />
        </Routes>
      </div>


      <Footer />

      

    </div>
  );
}

export default App;
