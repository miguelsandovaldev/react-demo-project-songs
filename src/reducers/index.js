import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Zetsubou Billy", duration: "3:52" },
    { title: "Libera Me from Hell", duration: "4:50" },
    { title: "Swordland", duration: "3:17" },
    { title: "Brave Shine", duration: "3:53" },
    { title: "Gravity Wall", duration: "3:47" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
