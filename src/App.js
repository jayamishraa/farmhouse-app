import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header'
import Notification from "./pages/Notification";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="notification" element={<Notification />} />
          <Route path="login" element={<Login />} />
          
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
