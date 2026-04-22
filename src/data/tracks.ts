export interface Track {
  id: number
  title: string
  genre: string
  bpm: number
  price: number
  audioUrl: string
  tags: string[]
}

// Добавляй свои треки сюда!
// audioUrl — ссылка на mp3 (можно загрузить на любой хостинг или использовать прямую ссылку)
export const tracks: Track[] = [
  {
    id: 1,
    title: "Dark Energy",
    genre: "Trap",
    bpm: 140,
    price: 1500,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    tags: ["Dark", "Hard", "808"],
  },
  {
    id: 2,
    title: "Midnight Soul",
    genre: "R&B",
    bpm: 95,
    price: 1200,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    tags: ["Chill", "Melodic", "Vibes"],
  },
  {
    id: 3,
    title: "Street Code",
    genre: "Drill",
    bpm: 145,
    price: 1800,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    tags: ["UK Drill", "Dark", "Aggressive"],
  },
  {
    id: 4,
    title: "Ghost Phonk",
    genre: "Phonk",
    bpm: 130,
    price: 1000,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    tags: ["Phonk", "Memphis", "Drift"],
  },
  {
    id: 5,
    title: "Gold Boom",
    genre: "Boom Bap",
    bpm: 90,
    price: 1300,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    tags: ["Old School", "Jazz", "NY"],
  },
  {
    id: 6,
    title: "Neon Feelings",
    genre: "R&B",
    bpm: 88,
    price: 1400,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    tags: ["Neo-Soul", "Smooth", "Love"],
  },
]
