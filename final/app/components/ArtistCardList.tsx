import type { Track, TrackAlbum, TrackArtist } from "../types/interfaces";
import CardArtist from "./CardArtist";
interface AlbumCardListProps {
  tracks: TrackArtist[];
  addToFavorites: (index: number) => void;
  removeFromFavorites: (index: number) => void;
  isFavorite: (index: number) => boolean;
  showArtist: (artistId: number) => void;
  showAlbum: (albumId: number) => void;
}

const ArtistCardList = ({ tracks, addToFavorites, showArtist, showAlbum, isFavorite, removeFromFavorites }: AlbumCardListProps) => {
  return (
    <div className="flex flex-col gap-4 p-6">
      {tracks.map((track, index) => (
        <CardArtist
          key={track.id}
          track={track}
          index={index}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isFavorite={isFavorite(index)}
          showArtist={showArtist}
          showAlbum={showAlbum}
        />
      ))}
    </div>
  );
};

export default ArtistCardList;


