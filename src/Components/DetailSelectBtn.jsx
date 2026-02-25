function DetailSelectBtn({ detail, selectDetail, removeDetail, customOptions }) {
    
    const handleRemoveDetail = () => {
        removeDetail(detail);
    };

    const handleSelectDetail = () => {
        selectDetail(detail);
    };
    
    return (
        <button className={`custom-select-btn ${customOptions.details.includes(detail) ? 'selected' : ''}`}
            onClick={customOptions.details.includes(detail) ? handleRemoveDetail : handleSelectDetail}>
            {detail}
        </button>
    )
}

export default DetailSelectBtn;