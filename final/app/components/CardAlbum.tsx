import React from "react";
import type { TrackAlbum } from "../types/interfaces";

interface CardAlbumProps {
  track: TrackAlbum;
  index: number;
  addToFavorites: (index: number) => void;
  removeFromFavorites: (index: number) => void;
  isFavorite: boolean;
  showArtist: (artistId: number) => void;
}

const CardAlbum: React.FC<CardAlbumProps> = ({ track, index, addToFavorites, removeFromFavorites, isFavorite, showArtist }) => {
  return (
    <div className="flex items-center justify-between bg-gray-900 text-white p-4 rounded-lg shadow-md w-full border-b border-gray-700">
      <div className="flex items-center space-x-4 flex-grow">
        <span className="font-bold text-lg w-40">{track.title}</span>
        <span className="text-gray-400 flex-grow">{track.artist.name}</span>
      </div>
      <button
        className="bg-green-500 text-white px-3 py-1 rounded-md ml-4"
        onClick={() => showArtist(track.artist.id)}
      >
        Artist
      </button>
      <audio controls className="w-48 ml-4">
        <source src={track.preview} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default CardAlbum;
