import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Aboutus } from "./Pages/Aboutus";
import { Nopage } from "./Pages/Nopage";
import {Layout} from "./Components/Layout/Layout";
import { Home } from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="*" element={<Nopage />} />
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
