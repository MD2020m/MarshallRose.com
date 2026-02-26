import FilterSelectBtn from "./FilterSelectBtn";

function FilterSelector({ categories, addFilter, removeFilter, filter }) {
    return (
        <div className='FilterSelector'>
            <h3>Filter by category</h3>
            {categories.map(category => (
                <FilterSelectBtn key={category}
                    category={category} 
                    addFilter={addFilter}
                    removeFilter={removeFilter}
                    filter={filter} /> 
            ))}
        </div>
    )
}

export default FilterSelector;