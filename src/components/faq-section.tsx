import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие форматы файлов я получу после покупки?",
      answer:
        "В зависимости от лицензии: базовая — MP3 320kbps, стандартная — WAV + MP3, эксклюзивная — WAV + MP3 + стемы (отдельные дорожки). Все файлы доступны сразу после оплаты.",
    },
    {
      question: "Можно ли выпускать трек на стримингах (Spotify, Apple Music)?",
      answer:
        "Да, любая лицензия позволяет выпуск на стриминговых платформах. Для коммерческих релизов рекомендуем стандартную или эксклюзивную лицензию.",
    },
    {
      question: "Что такое эксклюзивная лицензия?",
      answer:
        "Эксклюзивная лицензия означает, что бит продаётся только тебе и снимается с продажи. Никто другой не сможет использовать этот инструментал. Включает все права на коммерческое использование.",
    },
    {
      question: "Как быстро я получу файлы после оплаты?",
      answer:
        "Мгновенно. После успешной оплаты ссылка на скачивание придёт на твою почту, а также появится в личном кабинете.",
    },
    {
      question: "Можно ли заказать бит под конкретный проект?",
      answer:
        "Конечно! Напиши нам — обсудим жанр, темп, настроение и референсы. Сроки кастомного бита — от 3 до 7 дней.",
    },
    {
      question: "Что если трек не подошёл после покупки?",
      answer:
        "Перед покупкой доступен полный превью трека. В случае технических проблем с файлами — поможем решить. Обращайся в поддержку, разберёмся.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё о покупке битов, лицензиях и совместной работе — отвечаем честно и по делу.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}