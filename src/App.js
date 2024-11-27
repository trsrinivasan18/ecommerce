import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Aboutus } from "./Pages/Aboutus";
import { Nopage } from "./Pages/Nopage";
import { Layout } from "./Components/Layout/Layout";
import { Home } from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import Testcomponent from "./Testcomponent";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/product/:name/:id" element={<Testcomponent />} />
          <Route path="/product/:name" element={<Testcomponent />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
