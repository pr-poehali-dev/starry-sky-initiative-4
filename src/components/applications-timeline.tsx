import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Trap & Drill",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Тяжёлые 808, агрессивный хай-хэт и атмосферные мелодии. Идеально для уличной лирики,
            жёстких куплетов и клубных релизов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Dark Trap — мрачные и глубокие биты
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              UK Drill — чёткий темп и жёсткая атмосфера
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Melodic Trap — мелодика поверх мощного баса
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "R&B & Soul",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Мягкие хроматические аккорды, лирические мелодии и глубокий грув. Для чувственных треков,
            балладных куплетов и эмоциональных текстов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Contemporary R&B — современный и гладкий звук
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Neo-Soul — джазовые влияния и живые инструменты
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Lo-fi R&B — расслабленная атмосфера с зерном
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phonk & Boom Bap",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Классика и андеграунд. Vinyl-семплы, живые барабаны и олд-скул дух — для тех,
            кто ценит настоящий хип-хоп.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Phonk — Memphis-атмосфера и дрифт-эстетика
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Boom Bap — классический нью-йоркский звук
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Jazz Rap — живые инструменты и самплы
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Жанры и стили</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Широкая библиотека битов на любой вкус — от уличного дрилла до лиричного R&B.
            Найди свой звук и создай хит.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}