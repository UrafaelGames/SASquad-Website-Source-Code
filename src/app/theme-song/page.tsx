/**
 * © 2022-2025 SASquad Team
 * 
 * This code is the property of SASquad Team and the developer Urafael Games.
 * All rights reserved.
 * 
 * This code is published solely for reading, analysis,
 * and to demonstrate the transparency of SASquad Team across its platforms.
 * 
 * It is strictly forbidden to use it for personal gain
 * or to publish it on a website as your own.
 */
"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, AlertCircle, Volume2, VolumeX, FastForward, Rewind } from "lucide-react";

const ThemeSong = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(135);
  const [volume, setVolume] = useState(0.7);
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
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-lg mx-auto border border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <img
          src="https://sasquad-team.com/images/SAS.png"
          alt="Theme Cover"
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div>
          <h2 className="font-medium text-gray-800 text-sm">Theme Song</h2>
          <p className="text-xs text-gray-500">Grand Theft Auto: San Andreas Stories</p>
        </div>
      </div>

      {error ? (
        <div className="flex items-center gap-2 text-red-500 bg-red-50 p-1.5 rounded-lg text-xs">
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      ) : (
        <>
          {/* Progress Bar */}
          <div className="mb-1.5">
            <input
              type="range"
              min={0}
              max={duration}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 rounded-full appearance-none bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
            />
            <div className="flex justify-between text-[0.65rem] text-gray-500 mt-0.5">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <button 
                onClick={() => skip(-10)} 
                className="p-1 rounded-full hover:bg-gray-100 text-gray-600"
              >
                <Rewind size={16} />
              </button>
              <button
                onClick={togglePlay}
                className={`p-1.5 rounded-full flex items-center justify-center ${
                  isPlaying ? "bg-blue-100 text-blue-600" : "bg-blue-500 text-white"
                }`}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
              </button>
              <button 
                onClick={() => skip(10)} 
                className="p-1 rounded-full hover:bg-gray-100 text-gray-600"
              >
                <FastForward size={16} />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-1.5 w-20">
              <button 
                onClick={() => changeVolume(volume === 0 ? 0.7 : 0)} 
                className="text-gray-600"
              >
                {volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => changeVolume(parseFloat(e.target.value))}
                className="w-full h-1 rounded-full appearance-none bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
              />
            </div>
          </div>

          {/* Speed Control */}
          <div className="flex items-center justify-between text-[0.65rem] text-gray-600">
            <span>Speed: {playbackRate.toFixed(1)}x</span>
            <input
              type="range"
              min={0.5}
              max={2}
              step={0.1}
              value={playbackRate}
              onChange={(e) => changeRate(parseFloat(e.target.value))}
              className="w-20 h-1 rounded-full appearance-none bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
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
  );
};

export default ThemeSong;