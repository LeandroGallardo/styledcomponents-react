import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Detail from "./components/detail";
import Main from "./components/main";

const App = () => {
  // const url = import.meta.env.VITE_BASE_URL;
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main  /> } />
        <Route path="/detail/:id" element={<Detail /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
