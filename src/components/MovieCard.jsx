import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="movie-card group">
      <div className="relative overflow-hidden rounded-t-2xl bg-gray-100">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "/no-movie.png"
          }
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        <div className="content flex items-center gap-2 mt-3 text-xs flex-wrap">
          <div className="rating flex items-center gap-1">
            <img src="star.svg" alt="Star Icon" className="w-4 h-4" />
            <p className="font-semibold text-blue-600">
              {vote_average ? vote_average.toFixed(1) : "N/A"}
            </p>
          </div>

          <span className="text-gray-300">•</span>
          <p className="lang text-gray-600 capitalize">{original_language}</p>

          <span className="text-gray-300">•</span>
          <p className="year text-gray-600">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
