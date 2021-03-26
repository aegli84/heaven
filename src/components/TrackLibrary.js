


const TrackLibrary = ({track, tracks, setCurrentSong}) => {
    const trackSelectHandler = () => {
            setCurrentSong(track);
    }
    return (
        <div onClick = {trackSelectHandler} className = "track-library">
            <img src= {track.cover} alt = {track.name}></img>
            <div className="track-description">
                <h3>{track.name}</h3>
                <h4>{track.artist}</h4>
            </div>
        </div>
    )
}

export default TrackLibrary;