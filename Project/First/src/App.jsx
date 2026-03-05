import './css/App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Favourites from './pages/Favourites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    <MovieProvider>
      {/* to go to other pages */}
      <NavBar />   

      <main className='main-content'>
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

// function Text({text}){      //props
//   return( 
//     <div>
//         <p>{text}</p>
//     </div>
//   )
// }

export default App

