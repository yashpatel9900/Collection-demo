import React from 'react'
import Custominput from '../../Components/common/custom-input';
import CategoryCard from '../../Components/category/category-card';
import { list } from '../collection/collection-container'

class Category extends React.Component {
    render() {
        return (
            <div className="p-8 align">
                <Custominput />
                {
                    list.map(item => <CategoryCard key={item.title} {...item}/>)
                }
            </div>
        );
    }
}
export default Category;