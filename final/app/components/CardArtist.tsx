import React from "react";
import type { TrackArtist } from "../types/interfaces";
import Button from "./Button";

interface CardProps {
  track: TrackArtist;
  index: number;
  addToFavorites: (index: number) => void;
  removeFromFavorites: (index: number) => void;
  isFavorite: boolean;
  showArtist: (artistId: number) => void;
  showAlbum: (albumId: number) => void;
}

const CardArtist: React.FC<CardProps> = ({ track, index, addToFavorites, isFavorite, showAlbum, removeFromFavorites, showArtist }) => {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(index);
    } else {
      addToFavorites(index);
    }
  };

  return (
    <div className="flex items-center justify-between bg-zinc-900 text-white p-4 rounded-lg shadow-md w-full border-b border-gray-700">
      <div className="flex items-center space-x-4 flex-grow">
        <span className="font-bold text-lg w-40">{track.title}</span>
        <span
          className="text-gray-400 flex-grow cursor-pointer hover:text-white"
          onClick={() => showArtist(track.artist.id)}
        >
          {track.artist.name}
        </span>
      </div>

      <Button
        onClick={() => showAlbum(track.album.id)}
        text="Album"
        variant="album"
      />

      {track.preview && (
        <audio controls className="w-48 ml-4 rounded-md shadow-inner">
          <source src={track.preview} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default CardArtist;
