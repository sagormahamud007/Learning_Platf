import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseInfo.css'

const CourseInfo = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://learning-server-two.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='container  summaryDetails'>
            {
                categories.map(category => <p
                    key={category.id}
                >
                    <Link to={`/corseSummary/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>

    );
};

export default CourseInfo;