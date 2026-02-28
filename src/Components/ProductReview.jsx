import { useState } from 'react';
import RoseBtn from './RoseBtn';

function ProductReview({ product, reviews, productReviews }) {
    const [newReview, setNewReview] = useState({
        id: reviews.length + 1, // TODO: remove this line since the database will autoincrement an id property
        productId: product.id,
        roses: 5
    });

    const selectRoses = (roses) => {
        let newNewReview = JSON.parse(JSON.stringify(newReview));
        newNewReview.roses = roses;
        setNewReview(newNewReview);
    }

    const submitReview = () => {
        reviews.push(newReview);
        console.log(reviews);
    }

    return (
        <div className='product-review'>
            <h3>Leave a Review</h3>
            <p className='input-review-label'>Roses:</p>
            <div className='roses-inpt-div'>
                <RoseBtn newReview={newReview} selectRoses={selectRoses} roses={1}/>
                <RoseBtn newReview={newReview} selectRoses={selectRoses} roses={2}/>
                <RoseBtn newReview={newReview} selectRoses={selectRoses} roses={3}/>
                <RoseBtn newReview={newReview} selectRoses={selectRoses} roses={4}/>
                <RoseBtn newReview={newReview} selectRoses={selectRoses} roses={5}/>
            </div>
            <button className='review-submit-btn' onClick={submitReview}>Submit</button>
            <h3>See what other customers think</h3>
            <p>placeholder for rendering reviews</p>
        </div>
    )
}

export default ProductReview;