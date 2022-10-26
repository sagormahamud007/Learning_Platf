import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../../../About/About';
import Blog from '../../../../Blog/Blog';
import Main from '../../../../Layout/Main';
import Terms from '../../../../Terms/Terms';
import Category from '../../../Courses/Category';
import CourseInfo from '../../../Courses/CourseInfo';
import Courses from '../../../Courses/Courses';
import CoursesSummery from '../../../Courses/CoursesSummery';
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
                path: '/courses/:id',
                element: <CoursesSummery></CoursesSummery>,
                loader: ({ params }) => fetch(`http://localhost:5000/singleCourse/${params.id}`)
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


