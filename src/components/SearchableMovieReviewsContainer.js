import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'R96GGGDSjuP3nDWKmNv3TT4GXxFp6zRY';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: "",
        reviews: []
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(reviewData => {
            this.setState({
                reviews: reviewData.results
            })
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" value={this.state.searchTearm} onChange={this.handleChange}></input>
                    <input type="submit" value="Search"></input>
                </form>
                <h2>Searched Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer