import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Osa from "./pages/Osa";
import Information from "./pages/Information";

function App() {
  return (
    <div className="mx-auto max-w-[1400px]">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/osa" element={<Osa />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
