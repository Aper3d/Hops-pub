import { Routes, Route } from "react-router-dom";
import './App.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Promo from "../Promo/Promo";

import Beer from "../Beer/Beer"
import Burger from "../Burger/Burger"
import Snack from "../Snack/Snack"
// import NotFound from "../NotFound/NotFound";

function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route
          path="*"
          element={<Promo />}
        />
        <Route
          path="/beer"
          element={<Beer />}
        />
        <Route
          path="/burger"
          element={<Burger />}
        />
        <Route
          path="/snack"
          element={<Snack />}
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  )

}

export default App
