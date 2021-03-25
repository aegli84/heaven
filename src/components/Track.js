
const Track = ({currentTrack}) => {
    return (
        <div className = "track">
            <img src= {currentTrack.cover} alt = {currentTrack.name}></img>
            <h2>{currentTrack.name}</h2>
            <h3>{currentTrack.artist}</h3>
        </div>
    )
}

export default Track;