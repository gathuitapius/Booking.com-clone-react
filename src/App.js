import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom"

import Home from "./pages/home/Home";
import List from "./pages/list/List"
import SingleHotel from "./pages/hotel/SingleHotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotel/:id" element={<SingleHotel/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
