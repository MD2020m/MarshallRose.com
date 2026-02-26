function FilterSelectBtn({ category, addFilter, removeFilter, filter }) {
    const handleAddFilter = () => {
        addFilter(category);
    }
    
    return (
        <button className={`filter-select-btn ${filter === category ? 'selected' : ''}`}
            onClick={filter === category ? removeFilter : handleAddFilter}>
            {category}
        </button>
    )
}

export default FilterSelectBtn;