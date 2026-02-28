import { useState } from 'react';
import ProductsGrid from '../Components/ProductsGrid';
import FilterSelector from '../Components/FilterSelector';
import './Products.css';

function  Products({ products, categories }) {

    const [filter, setFilter] = useState(null);

    const addFilter = (category) => {
        setFilter(category);
    }

    const removeFilter = () => {
        setFilter(null);
    }

    return (
        <main className='main-content'>
            <div className='content-header'>
                <h2>Shop Our Products</h2>
                <p>Discover the perfect new piece for your wardrobe</p>
            </div>
            <FilterSelector categories={categories} addFilter={addFilter} removeFilter={removeFilter} filter={filter} />
            <ProductsGrid products={filter !== null ? products.filter(product => product.category === filter) : products}/>
        </main>
    )
}

export default Products;