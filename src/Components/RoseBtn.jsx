function RoseBtn({ newReview, selectRoses, roses }) {
    const handleSelectRoses = () => {
        selectRoses(roses)
    }

    return(
        <button className={`rose-btn ${newReview.roses >= roses ? 'selected' : ''}`}
            onClick={handleSelectRoses}></button>
    )
}

export default RoseBtn;