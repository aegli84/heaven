import {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentTrack, isPlaying, setIsPlaying}) => {

    const audioRef = useRef(null);
    const playTrackHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    };

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        // console.log(current);
        const duration = e.target.duration;
        setTrackInfo({...trackInfo, currentTime: current, duration})
    }

    const getTime = (time) => {
        return(
            //this formats a number into sec and minutes
            Math.floor(time / 60 ) + ":" + ("0" +Math.floor (time % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setTrackInfo({...trackInfo, currentTime: e.target.value})
    }

    const [trackInfo, setTrackInfo] = useState({
        currentTime: 0, //could be set to null as well
        duration: 0,
    })
    return (
        <div className = "player">
            <div className="time-control">
                <p>{getTime(trackInfo.currentTime)}</p>
                <input min = {0} max = {trackInfo.duration} value = {trackInfo.currentTime } onChange = {dragHandler} type = "range" />
                <p>{getTime(trackInfo.duration)}</p>
        </div>
            <div className="play-control">
            <FontAwesomeIcon className = "skip-right" size = "2x" icon ={faAngleLeft}/>
            <FontAwesomeIcon onClick = {playTrackHandler} className = "play" size = "2x" icon ={isPlaying ? faPause : faPlay }/>
            <FontAwesomeIcon className = "skip-left" size = "2x" icon ={faAngleRight}/>
            </div>
            <audio onLoadedMetadata = {timeUpdateHandler} onTimeUpdate = {timeUpdateHandler}ref = {audioRef} src= {currentTrack.audio}></audio>
        </div>
    )
}

export default Player;