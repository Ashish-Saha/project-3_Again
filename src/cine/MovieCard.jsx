import { useState } from "react";
import { getImageUrl } from "../utils/getImageUrl";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showMovieDetailsModal, setMovieDetailsModal] = useState(false);

  const handleMovieDetails = (event) => {
    event.preventDefault();
    setMovieDetailsModal((prev) => !prev);
  };

  const handleCloseModal = () => {
    setMovieDetailsModal((prev) => !prev);
  };

  return (
    <>
      {showMovieDetailsModal && (
        <MovieDetailsModal movieSelected={movie} onClose={handleCloseModal} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="" onClick={(e) => handleMovieDetails(e)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.description}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
