import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nav from "./components/Navbar";

const router = [{
    path: "/",
    element: <Home/>,
}, {
    path: "/login",
    element:<Login/>,
}, {
    path: "/admin",
    element: <Admin/>,
},{
    path: "*",
    element: <h1>404 Not Found</h1>,
}];

function App() {
    return (
        <>
            <Nav />
            <RouterProvider router={createBrowserRouter(router)}/>
        </>
    );
}

export default App;
