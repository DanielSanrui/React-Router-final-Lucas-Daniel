import React from "react";
import type { TrackAlbum } from "../types/interfaces";
import CardAlbum from "./CardAlbum";

interface AlbumCardListProps {
  tracks: TrackAlbum[];
  addToFavorites: (index: number) => void;
  removeFromFavorites: (index: number) => void;
  isFavorite: (index: number) => boolean;
  showArtist: (artistId: number) => void;
}

const AlbumCardList: React.FC<AlbumCardListProps> = ({ tracks, addToFavorites, removeFromFavorites, isFavorite, showArtist }) => {
  return (
    <div className="flex flex-col gap-4 p-6">
      {tracks.map((track, index) => (
        <CardAlbum
          key={track.id}
          track={track}
          index={index}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isFavorite={isFavorite(index)}
          showArtist={showArtist}
        />
      ))}
    </div>
  );
};

export default AlbumCardList;
