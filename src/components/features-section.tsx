import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Эксклюзивные биты",
    description: "Уникальные треки, созданные с нуля. Каждый бит — авторский, без повторов и перепродаж другим артистам.",
    icon: "brain",
    badge: "Exclusive",
  },
  {
    title: "Мгновенная загрузка",
    description: "После оплаты файлы доступны сразу. MP3, WAV и стемы — всё в одном пакете.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "Полные права",
    description: "Лицензии на коммерческое использование — релизы на стримингах, YouTube, TikTok без ограничений.",
    icon: "lock",
    badge: "Лицензия",
  },
  {
    title: "Разные жанры",
    description: "Trap, Drill, R&B, Phonk, Boom Bap и многое другое. Найди звук, который подходит именно тебе.",
    icon: "globe",
    badge: "Жанры",
  },
  {
    title: "Кастомный заказ",
    description: "Нужен эксклюзивный бит под твой проект? Напиши — сделаем под твой стиль и настроение.",
    icon: "target",
    badge: "Заказ",
  },
  {
    title: "Поддержка артистов",
    description: "Советы по использованию, помощь с лицензиями и прямой контакт с продюсером всегда доступны.",
    icon: "link",
    badge: "Поддержка",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Качественная музыка для твоих проектов — от инди-артиста до крупных релизов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}