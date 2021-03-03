import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { lastCall } from 'fetch-mock';

const NYT_API_KEY = 'R96GGGDSjuP3nDWKmNv3TT4GXxFp6zRY';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        this.fetchReviews()
    }

    fetchReviews = () => {
        fetch(`${URL}`)
        .then(res => res.json())
        .then(json => {
            this.setState({reviews: json.results})
        })
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer