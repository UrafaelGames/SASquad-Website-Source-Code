"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Repeat, Volume2, VolumeX, X } from "lucide-react";

const ThemeSong = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [loop, setLoop] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !loop;
      setLoop(!loop);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      setPosition({
        x: e.clientX - containerRef.current.offsetWidth / 2,
        y: e.clientY - containerRef.current.offsetHeight / 2,
      });
    }
  }, [isDragging]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  return isVisible ? (
    <div
      ref={containerRef}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className="fixed flex items-center gap-2 p-3 bg-gray-900 text-white rounded-lg shadow-lg cursor-grab"
      onMouseDown={handleMouseDown}
    >
      <audio ref={audioRef} src="/audio/GTA-SAS-Theme-Song.mp3" />

      <button onClick={togglePlay} className="p-2 bg-gray-700 rounded-full">
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button onClick={toggleLoop} className="p-2 bg-gray-700 rounded-full">
        <Repeat size={24} className={loop ? "text-green-400" : ""} />
      </button>
      <button onClick={toggleMute} className="p-2 bg-gray-700 rounded-full">
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Control de volumen solo visible en PC */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={isMuted ? 0 : volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="hidden sm:block w-24"
      />

      {/* Botón para cerrar */}
      <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-red-400">
        <X size={20} />
      </button>
    </div>
  ) : null;
};

export default ThemeSong;
