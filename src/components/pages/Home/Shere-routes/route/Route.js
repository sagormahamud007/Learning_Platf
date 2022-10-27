import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../../../About/About';
import Blog from '../../../../Blog/Blog';
import Main from '../../../../Layout/Main';
import PrivateRoute from '../../../../PrivateRoute/PrivateRoute';
import Terms from '../../../../Terms/Terms';
import Category from '../../../Courses/Category';
import CourseDetails from '../../../Courses/CourseDetails';
import CourseInfo from '../../../Courses/CourseInfo';
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
                path: '/courses',
                element: <CourseInfo></CourseInfo>
            },
            {
                path: '/corseSummary/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-server-two.vercel.app/singleCourse/${params.id}`)
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
            },
            {
                path: '/category',
                element: <Category></Category>
            },



        ]
    }
])


