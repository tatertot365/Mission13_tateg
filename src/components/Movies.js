import React from 'react';
import MovieData from './MovieData.json';

{
    /* This is the movies page of the website. 
    It takes the Movies JSON data and outputs it into a table */
}
const Movies = () => {
    return (
        <div className="container">
            <h1>My Movies</h1>
            <p>This is where we will list all of Joel's movies.</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Rating</th>
                        <th>Genre</th>
                        <th>Director</th>
                        <th>Edited</th>
                    </tr>
                </thead>
                <tbody>
                    {MovieData.MovieData.map((movie) => (
                        <tr key={movie.Title}>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>{movie.Rating}</td>
                            <td>{movie.Category}</td>
                            <td>{movie.Director}</td>
                            <td>{movie.Edited}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Movies;
