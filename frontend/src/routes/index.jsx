import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassowrd'
import Signup from '../pages/Signup'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProudcts from '../pages/Allproducts'
const router= createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'forgot-password',
                element: <ForgotPassowrd/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/adminpage',
                element: <AdminPanel/>,
                children: [
                    {
                        path : "all-users",
                        element: <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element: <AllProudcts/>
                    },
                ]
            },
        ]
    }
])
export default router