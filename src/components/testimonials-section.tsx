import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "LKNG",
    role: "Рэпер, 500k+ стримов на Spotify",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Взял бит под трек — за неделю набрал 200к прослушиваний. Качество звука просто огонь, лицензия без лишних вопросов.",
  },
  {
    name: "Алина М.",
    role: "R&B-исполнитель, TikTok 1M подписчиков",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Нашла идеальный R&B бит с первого раза. Красивая мелодика, всё чисто по лицензии — залила на YouTube без проблем.",
  },
  {
    name: "DJ Frost",
    role: "Продюсер, резидент клуба Arbat",
    avatar: "/professional-woman-scientist.png",
    content:
      "Заказал кастомный трек под мероприятие — сделали точно в срок. Публика была в восторге, уже взял второй заказ.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Артисты говорят</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы музыкантов, которые уже создали хиты с нашими битами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}