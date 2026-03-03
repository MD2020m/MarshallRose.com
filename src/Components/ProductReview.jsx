import { useState } from 'react';
import RoseBtn from './RoseBtn';
import { postReview } from '../../api-service';

function ProductReview({ product, reviews, productReviews }) {
    const [newReview, setNewReview] = useState({
        roses: 5,
        productId: product.id,
        userId: 1 // Change this to get the userId from a logged in user
    });

    const selectRoses = (roses) => {
        let newNewReview = JSON.parse(JSON.stringify(newReview));
        newNewReview.roses = roses;
        setNewReview(newNewReview);
    }

    const submitReview = () => {
        postReview(newReview.userId, newReview.productId, newReview.roses);
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
            <p>Average Rating: {productReviews.length > 0 ? productReviews.reduce((total, review) => total + review.roses, 0) / productReviews.length : 'No reviews yet'}</p>
        </div>
    )
}

export default ProductReview;