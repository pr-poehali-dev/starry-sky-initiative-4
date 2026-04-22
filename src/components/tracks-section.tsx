import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { usePlayer } from "@/context/PlayerContext"
import { tracks } from "@/data/tracks"
import type { Track } from "@/data/tracks"

const ALL_GENRES = ["Все", ...Array.from(new Set(tracks.map(t => t.genre)))]

function TrackCard({ track }: { track: Track }) {
  const { currentTrack, isPlaying, play, pause, resume } = usePlayer()
  const isActive = currentTrack?.id === track.id
  const isThisPlaying = isActive && isPlaying

  const handlePlay = () => {
    if (isActive) {
      if (isThisPlaying) {
        pause()
      } else {
        resume()
      }
    } else {
      play(track)
    }
  }

  return (
    <div
      className={`group relative flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer
        ${isActive
          ? "border-red-500/60 bg-red-500/5"
          : "border-white/10 bg-white/5 hover:border-red-500/40 hover:bg-white/8"
        }`}
    >
      {/* Play button */}
      <button
        onClick={handlePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200
          ${isActive
            ? "bg-red-500 text-white"
            : "bg-white/10 text-white group-hover:bg-red-500"
          }`}
      >
        {isThisPlaying ? (
          <Icon name="Pause" size={20} />
        ) : (
          <Icon name="Play" size={20} />
        )}
      </button>

      {/* Waveform animation when playing */}
      {isThisPlaying && (
        <div className="flex items-center gap-0.5 flex-shrink-0">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="w-0.5 bg-red-500 rounded-full animate-bounce"
              style={{
                height: `${8 + (i % 3) * 6}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: "0.6s"
              }}
            />
          ))}
        </div>
      )}

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className={`font-orbitron font-bold text-sm truncate ${isActive ? "text-red-400" : "text-white"}`}>
          {track.title}
        </p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="text-gray-400 text-xs">{track.genre}</span>
          <span className="text-gray-600 text-xs">•</span>
          <span className="text-gray-400 text-xs">{track.bpm} BPM</span>
          {track.tags.slice(0, 2).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0 bg-white/10 text-gray-300 border-0">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Price + Buy */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="font-orbitron text-white font-bold text-sm hidden sm:block">
          {track.price.toLocaleString()} ₽
        </span>
        <Button
          size="sm"
          className="bg-red-500 hover:bg-red-600 text-white border-0 font-orbitron text-xs px-3"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          Купить
        </Button>
      </div>
    </div>
  )
}

export function TracksSection() {
  const [activeGenre, setActiveGenre] = useState("Все")

  const filtered = activeGenre === "Все"
    ? tracks
    : tracks.filter(t => t.genre === activeGenre)

  return (
    <section id="tracks" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Каталог битов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Нажми Play — послушай. Нравится — купи лицензию мгновенно.
          </p>
        </div>

        {/* Genre filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {ALL_GENRES.map(genre => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-4 py-1.5 rounded-full text-sm font-orbitron transition-all duration-200
                ${activeGenre === genre
                  ? "bg-red-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Tracks list */}
        <div className="flex flex-col gap-3">
          {filtered.map(track => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  )
}