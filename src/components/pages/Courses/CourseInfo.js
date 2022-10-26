import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseInfo = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='container'>
            {
                categories.map(category => <p
                    key={category.id}
                >
                    <Link to={`/courses/:${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>

    );
};

export default CourseInfo;