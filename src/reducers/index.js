 import { combineReducers } from 'redux';
 
 const songsReducer = () => {
     return [
       { title: "Hello", duration: "5:05" },
       { title: "Dancing with a Stranger", duration: "4:23" },
       { title: "Grenade", duration: "5:01" },
       { title: "With you", duration: "3.48" }
     ];
 }

 const selectingSongReducer = (selectedSong = null, action) => {
     if (action.type === 'SONG_SELECTED') {
         return action.payload;
     }
     return selectedSong;
 }

 export default combineReducers({
     songs: songsReducer,
     selectedSong: selectingSongReducer
 });