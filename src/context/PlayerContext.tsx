import { createContext, useContext, useRef, useState, useEffect, useCallback } from "react"
import type { Track } from "@/data/tracks"

interface PlayerContextType {
  currentTrack: Track | null
  isPlaying: boolean
  progress: number
  duration: number
  play: (track: Track) => void
  pause: () => void
  resume: () => void
  seek: (pct: number) => void
  next: (tracks: Track[]) => void
  prev: (tracks: Track[]) => void
}

const PlayerContext = createContext<PlayerContextType | null>(null)

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(new Audio())
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current

    const onTimeUpdate = () => setProgress(audio.currentTime)
    const onDurationChange = () => setDuration(audio.duration || 0)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("durationchange", onDurationChange)
    audio.addEventListener("ended", onEnded)

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("durationchange", onDurationChange)
      audio.removeEventListener("ended", onEnded)
    }
  }, [])

  const play = useCallback((track: Track) => {
    const audio = audioRef.current
    if (currentTrack?.id === track.id) {
      audio.play()
      setIsPlaying(true)
      return
    }
    audio.src = track.audioUrl
    audio.load()
    audio.play().then(() => {
      setCurrentTrack(track)
      setIsPlaying(true)
    })
  }, [currentTrack])

  const pause = useCallback(() => {
    audioRef.current.pause()
    setIsPlaying(false)
  }, [])

  const resume = useCallback(() => {
    audioRef.current.play().then(() => setIsPlaying(true))
  }, [])

  const seek = useCallback((pct: number) => {
    const audio = audioRef.current
    if (audio.duration) {
      audio.currentTime = pct * audio.duration
    }
  }, [])

  const next = useCallback((tracks: Track[]) => {
    if (!currentTrack) return
    const idx = tracks.findIndex(t => t.id === currentTrack.id)
    const nextTrack = tracks[(idx + 1) % tracks.length]
    play(nextTrack)
  }, [currentTrack, play])

  const prev = useCallback((tracks: Track[]) => {
    if (!currentTrack) return
    const idx = tracks.findIndex(t => t.id === currentTrack.id)
    const prevTrack = tracks[(idx - 1 + tracks.length) % tracks.length]
    play(prevTrack)
  }, [currentTrack, play])

  return (
    <PlayerContext.Provider value={{ currentTrack, isPlaying, progress, duration, play, pause, resume, seek, next, prev }}>
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const ctx = useContext(PlayerContext)
  if (!ctx) throw new Error("usePlayer must be used inside PlayerProvider")
  return ctx
}
