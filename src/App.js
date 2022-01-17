
import { Route, Routes, } from 'react-router-dom';
import Footer from './Components/Footer';

import Header from './Components/Header';
import Home from './Components/Home';
import Hotels from './Components/Hotels';
import ProgressBar from "@badrap/bar-of-progress";
import BookNow from './Components/BookNow';
import 'mapbox-gl/dist/mapbox-gl.css';
import Login from './Components/Login';
import Register from './Components/Register';
import TripBook from './Components/TripBook';
import AuthProvider from './Context/AuthProvider';


const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: 'z-50',
  delay: 100,
});


// Routes.events.on('routeChangeComplete', progress.finish)
// Routes.events.on('routeChangeError', progress.finish)


progress.start();
setTimeout(() => {
  progress.finish();
}, 2000);



function App() {

  return (
    <div >
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/book/:id' element={<BookNow />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/booktrip' element={<TripBook />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
