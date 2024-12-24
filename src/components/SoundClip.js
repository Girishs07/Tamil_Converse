import { useState, useRef, useEffect } from "react";
import audioFiles from "../data/audioFiles"; // Ensure this contains Tamil-specific audio
import "./SoundClip.css";

function SoundClip() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (currentAudio === null) {
        // Select a random Tamil audio file to play
        const randomIndex = Math.floor(Math.random() * audioFiles.length);
        const randomFile = audioFiles[randomIndex];
        setCurrentAudio(randomFile);

        audioRef.current.src = randomFile.path;
        audioRef.current.play();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleAudioEnd = () => {
      setIsPlaying(false);
      setCurrentAudio(null); // Reset the audio to allow a new random one to play
    };

    audioRef.current.addEventListener("ended", handleAudioEnd);

    return () => {
      audioRef.current.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  return (
    <div className="soundclip-container">
      <audio ref={audioRef} />
      <button className="music-play" onClick={togglePlay}>
        {isPlaying ? "இடை" : "ஒலி"}
      </button>
      {currentAudio && (
        <p className="audio-label">நடப்பது: {currentAudio.label}</p>
      )}
    </div>
  );
}

export default SoundClip;
