import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../../../About/About';
import Blog from '../../../../Blog/Blog';
import Main from '../../../../Layout/Main';
import Terms from '../../../../Terms/Terms';
import Courses from '../../../Courses/Courses';
import Login from '../../../Login/Login';
import Profile from '../../../Profile/Profile';
import Register from '../../../Register/Register';
import Home from '../../Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/*',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }

        ]
    }
])


