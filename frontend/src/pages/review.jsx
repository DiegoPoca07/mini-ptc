import React from 'react';
import Review from "../components/reviewComponents";
import "./review.css"; 

function ReviewPage() {
    return (
        <div className="review-page">
            <header className="review-page__header">
                <div className="review-page__title-group">
                    <h1 className="review-page__title">All Reviews</h1>
                    <span className="review-page__count">(451)</span>
                </div>
                
                <div className="review-page__actions">
                    <div className="review-page__filter">
                        <select className="review-page__select">
                            <option value="recent">Most Recent</option>
                            <option value="highest">Highest Rated</option>
                            <option value="lowest">Lowest Rated</option>
                        </select>
                    </div>
                    <button className="review-page__write-btn">Write Review</button>
                </div>
            </header>

            <main className="review-page__content">
                <div className="review-page__grid">
                    <Review rating={5} />
                    <Review rating={4} />
                    <Review rating={3} />
                    <Review rating={2} />
                    <Review rating={1} />
                    <Review rating={1} />
                </div>
                
                <button className="review-page__load-more">
                    Load More Reviews
                </button>
            </main>
        </div>
    );
}

export default ReviewPage;