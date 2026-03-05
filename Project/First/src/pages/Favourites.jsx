import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourites(){
    const {Favourites} = useMovieContext();
    
    if (Favourites){
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
            <div className="movies-gird">
                {Favourites.map((movie) =>(             //imp
                <MovieCard movie={movie} key={movie.id}/>))}
            
            </div>
            </div>
        )
    }

    return <div className="favourites-empty">
        <h2>No Favourites Movies Yet</h2>
        <p>Start adding movies to your favourites</p>
    </div>
}

export default Favourites