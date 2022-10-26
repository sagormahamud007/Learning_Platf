import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';
import './Category.css'

const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='Category-container'>
            {
                categories.map(category => <SingleCategory key={category.id}
                    category={category}
                ></SingleCategory>)
            }
        </div>
    );
};

export default Category;