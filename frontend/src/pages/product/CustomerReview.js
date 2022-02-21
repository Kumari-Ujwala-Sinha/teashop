import React from 'react';

function CustomerReview() {
  return <div class="creview">
            <div className='creview__container'>
                <h2>Customer Reviews</h2>
                <p>No Reviews Yet</p>

                <div className='review__btn'>
                    <a href="/review">Write Review</a>
                </div>
            </div>
        </div>
}

export default CustomerReview;
