import TrackLibrary from './TrackLibrary'

const Library = ({tracks, setCurrentTrack}) => {

    return (
        <div className= "library">
        <h2 >Library</h2>
        <div className="library-track">
            {tracks.map((track) => (
                <TrackLibrary 
                    setCurrentTrack = {setCurrentTrack} 
                    track = {track} 
                    tracks = {tracks} 
                    id = {track.id}
                    key = {track.id}
                />
            ))}
        </div>
    </div>
    )
}

export default Library