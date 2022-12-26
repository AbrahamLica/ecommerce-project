import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/home/Home";
import NotFound from "./Components/NotFound/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
