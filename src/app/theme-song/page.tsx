"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, AlertCircle, Volume2, VolumeX, FastForward, Rewind } from "lucide-react";

const ThemeSong = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(135);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => !isNaN(audio.duration) && setDuration(audio.duration);
    const handleError = () => setError("Unable to load the theme song. Please reload the page or try again later.");

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("error", handleError);

    audio.load();

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          setError("Playback failed: " + e.message);
          setIsPlaying(false);
        });
    }
  };

  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(Math.max(0, audioRef.current.currentTime + seconds), duration);
    }
  };

  const changeVolume = (v: number) => {
    if (audioRef.current) {
      audioRef.current.volume = v;
      setVolume(v);
    }
  };

  const changeRate = (r: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = r;
      setPlaybackRate(r);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-xl shadow-xl max-w-3xl mx-auto overflow-hidden">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://sasquad-team.co/images/SAS.jpg"
          alt="Theme Cover"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Controls Section */}
      <div className="w-full md:w-1/2 p-6 space-y-4 flex flex-col justify-between">
        <h2 className="text-2xl font-bold">Official Theme Song</h2>

        {error ? (
          <div className="flex items-center gap-2 text-red-500 bg-red-100 dark:bg-red-900 p-3 rounded-lg shadow-inner">
            <AlertCircle size={20} className="animate-pulse" />
            <span>{error}</span>
          </div>
        ) : (
          <>
            {/* Progress Bar */}
            <input
              type="range"
              min={0}
              max={duration}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-4">
              <button onClick={() => skip(-10)}><Rewind size={24} /></button>
              <button
                onClick={togglePlay}
                disabled={!!error}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition ${
                  error ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
              </button>
              <button onClick={() => skip(10)}><FastForward size={24} /></button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              {volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => changeVolume(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Speed Control */}
            <div className="flex items-center justify-between text-sm">
              <span>Speed: {playbackRate.toFixed(1)}x</span>
              <input
                type="range"
                min={0.5}
                max={2}
                step={0.1}
                value={playbackRate}
                onChange={(e) => changeRate(parseFloat(e.target.value))}
                className="w-full ml-4"
              />
            </div>
          </>
        )}

        <audio
          ref={audioRef}
          src="https://sasquad-team.com/theme-song.mp3"
          preload="metadata"
        />
      </div>
    </div>
  );
};

export default ThemeSong;
