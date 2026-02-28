import { useState } from 'react';
import RoseBtn from './RoseBtn';

function ProductReview({ product, reviews, productReviews }) {
    const [newReview, setNewReview] = useState({
        id: reviews.length + 1, // TODO: remove this line since the database will autoincrement an id property
        productId: product.id,
        roses: 5,
        description: null
    });

    const selectRoses = (roses) => {
        let newNewReview = JSON.parse(JSON.stringify(newReview));
        newNewReview.roses = roses;
        setNewReview(newNewReview);
    }

    const setDescription = (description) => {
        let newNewReview = JSON.parse(JSON.stringify(newReview));
        newNewReview.description = description;
        setNewReview(newNewReview);
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
            <input className='body-inpt-box' vlaue={null}></input>
            <button className='review-submit-btn'>Submit</button>
            <h3>See what other customers think</h3>
            <p>{productReviews[0] ? productReviews[0].description : 'No reviews yet'}</p>
        </div>
    )
}

export default ProductReview;