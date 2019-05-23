import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {

    return !song ? 
                (
                    <div>No song selected.</div>
                ) 
                :
                (
                    <div>
                        <h3>Details for:</h3>
                        <p>Song Title: {song.title}</p>
                        <p>Song Duration: {song.duration}</p>
                    </div>
                );

}

const mapStateToProps = state => {
    return {song:  state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);