import React from "react";
import { useNavigate } from "react-router";
import spotifyLogo from "../img/Spotify_Full_Logo_RGB_Green.png";

function Header() {
    const navigate = useNavigate();

    const goToFavorites = () => {
        navigate("/favorites");
    };

    return (
        <div className="container flex justify-center items-center my-4 bg-black p-2">
            <a href="/">
                <img src={spotifyLogo} alt="Spotify Logo" width="280" />
            </a>
            <button
                onClick={goToFavorites}
                className="flex items-center m-6 text-white hover:text-red-400 transition duration-200 p-3 rounded-full hover:bg-zinc-800 bg-green-400"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            </button>
        </div>
    );
}

export default Header;