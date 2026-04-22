import { usePlayer } from "@/context/PlayerContext"
import { tracks } from "@/data/tracks"
import Icon from "@/components/ui/icon"

function formatTime(sec: number) {
  if (!isFinite(sec)) return "0:00"
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function GlobalPlayer() {
  const { currentTrack, isPlaying, progress, duration, pause, resume, seek, next, prev } = usePlayer()

  if (!currentTrack) return null

  const pct = duration > 0 ? (progress / duration) * 100 : 0

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-t border-red-500/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Track info */}
        <div className="flex-1 min-w-0">
          <p className="font-orbitron text-white text-sm font-bold truncate">{currentTrack.title}</p>
          <p className="text-red-400 text-xs truncate">{currentTrack.genre} • {currentTrack.bpm} BPM</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => prev(tracks)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Icon name="SkipBack" size={20} />
          </button>
          <button
            onClick={isPlaying ? pause : resume}
            className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={18} />
          </button>
          <button
            onClick={() => next(tracks)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Icon name="SkipForward" size={20} />
          </button>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 flex-1 max-w-xs hidden sm:flex">
          <span className="text-gray-400 text-xs w-8 text-right">{formatTime(progress)}</span>
          <div
            className="flex-1 h-1 bg-gray-700 rounded-full cursor-pointer relative"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              seek((e.clientX - rect.left) / rect.width)
            }}
          >
            <div
              className="h-full bg-red-500 rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-gray-400 text-xs w-8">{formatTime(duration)}</span>
        </div>

        {/* Price badge */}
        <div className="hidden md:block">
          <span className="font-orbitron text-red-400 text-sm font-bold">{currentTrack.price.toLocaleString()} ₽</span>
        </div>
      </div>
    </div>
  )
}
