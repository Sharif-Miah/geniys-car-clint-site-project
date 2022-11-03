import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Main from "../layout/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/checkout/:id',
                element: <CheckOut />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])