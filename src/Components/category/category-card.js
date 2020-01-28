import React from 'react'

const CategoryCard = ({ title }) => {
    return (
        <div className="card">
            <div className="card-body">
                {title}
            </div>
        </div>
    );
}

export default CategoryCard;