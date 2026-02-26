import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О клинике", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Врачи", href: "#doctors" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const REVIEWS = [
  {
    name: "Мария С.",
    text: "BirkHayat — это совершенно другой уровень медицины. Впервые чувствую, что тебя слышат, а не просто выписывают рецепты. Профессор Каримов поставил точный диагноз там, где другие разводили руками.",
    rating: 5,
    date: "Январь 2026",
  },
  {
    name: "Тимур А.",
    text: "Записался к неврологу без очередей, осмотр длился почти час. Атмосфера в клинике невероятная — тихо, чисто, спокойно. Чувствуешь заботу с первой минуты.",
    rating: 5,
    date: "Февраль 2026",
  },
  {
    name: "Наталья В.",
    text: "Прошла полный чекап за один день. Результаты анализов были готовы уже через 2 часа. Очень понравился подход — объяснили каждый показатель простым языком.",
    rating: 5,
    date: "Февраль 2026",
  },
];

const BLOG_POSTS = [
  {
    category: "Кардиология",
    title: "Как стресс влияет на сердце: что важно знать",
    excerpt: "Хронический стресс — один из главных факторов риска для сердечно-сосудистой системы. Разбираем механизмы и способы защиты.",
    date: "18 февраля 2026",
    readTime: "5 мин",
  },
  {
    category: "Профилактика",
    title: "Ежегодный чекап: какие анализы сдавать и зачем",
    excerpt: "Составили список обязательных обследований по возрастам, которые помогут выявить проблемы до их появления.",
    date: "10 февраля 2026",
    readTime: "7 мин",
  },
  {
    category: "Неврология",
    title: "Мигрень или головная боль напряжения: как отличить",
    excerpt: "Симптомы похожи, но лечение принципиально разное. Доктор Ахмедова рассказывает о ключевых отличиях.",
    date: "3 февраля 2026",
    readTime: "4 мин",
  },
];

export default function ReviewsBlogContactsFooter() {
  return (
    <>
      {/* REVIEWS */}
      <section id="reviews" className="py-32" style={{ backgroundColor: "var(--dark-2)" }}>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <div className="section-label justify-center mb-6">Отзывы</div>
            <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300 }}>
              Говорят наши <span className="text-gold">пациенты</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {REVIEWS.map((r) => (
              <div key={r.name} className="card-dark rounded-lg p-8 relative">
                <div
                  className="font-display absolute top-6 right-8 opacity-10"
                  style={{ fontSize: "5rem", color: "var(--gold)", lineHeight: 1 }}
                >
                  "
                </div>

                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-gold" />
                  ))}
                </div>

                <p className="font-golos font-light leading-relaxed mb-8" style={{ color: "rgba(232,224,208,0.7)", fontSize: "0.95rem" }}>
                  "{r.text}"
                </p>

                <div
                  className="flex items-center justify-between pt-5"
                  style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
                >
                  <div>
                    <div className="font-golos font-medium" style={{ fontSize: "0.9rem", color: "#E8E0D0" }}>{r.name}</div>
                    <div className="font-golos font-light text-xs mt-1" style={{ color: "rgba(232,224,208,0.35)" }}>{r.date}</div>
                  </div>
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: "36px", height: "36px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    <Icon name="User" size={16} className="text-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-32" style={{ backgroundColor: "var(--dark)" }}>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
            <div>
              <div className="section-label mb-6">Блог</div>
              <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300 }}>
                Полезные <span className="text-gold">статьи</span>
              </h2>
            </div>
            <button className="btn-outline-gold self-start lg:self-auto">Все статьи</button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <article key={post.title} className="card-dark rounded-lg overflow-hidden cursor-pointer group">
                <div
                  className="relative"
                  style={{
                    height: "200px",
                    background: `linear-gradient(135deg, hsl(${230 + i * 20}, 20%, 12%), hsl(${230 + i * 20}, 20%, 8%))`,
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: `radial-gradient(ellipse at ${30 + i * 20}% 50%, rgba(201,168,76,0.3), transparent 60%)` }}
                  />
                  <div
                    className="absolute top-4 left-4 font-golos text-xs px-3 py-1 rounded-sm"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      border: "1px solid rgba(201,168,76,0.25)",
                      color: "var(--gold)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {post.category}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-golos font-light text-xs" style={{ color: "rgba(232,224,208,0.35)" }}>{post.date}</span>
                    <span style={{ color: "rgba(201,168,76,0.3)", fontSize: "0.6rem" }}>●</span>
                    <span className="font-golos font-light text-xs" style={{ color: "rgba(232,224,208,0.35)" }}>{post.readTime} чтения</span>
                  </div>

                  <h3 className="font-display mb-3 group-hover:text-gold transition-colors" style={{ fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.3, color: "#E8E0D0" }}>
                    {post.title}
                  </h3>

                  <p className="font-golos font-light text-sm leading-relaxed" style={{ color: "rgba(232,224,208,0.5)" }}>
                    {post.excerpt}
                  </p>

                  <div
                    className="flex items-center gap-2 mt-6 text-gold"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}
                  >
                    Читать далее <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-32" style={{ backgroundColor: "var(--dark-3)" }}>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <div className="section-label justify-center mb-6">Контакты</div>
            <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300 }}>
              Мы рядом <span className="text-gold">с вами</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["ул. Медицинская, 24", "Ташкент, Узбекистан"] },
              { icon: "Phone", title: "Телефон", lines: ["+998 71 000-00-00", "Пн–Сб: 08:00–20:00"] },
              { icon: "Mail", title: "Email", lines: ["info@birkhayat.uz", "Ответ в течение 2 часов"] },
            ].map((c) => (
              <div
                key={c.title}
                className="flex gap-6 rounded-lg p-8"
                style={{ background: "var(--dark-4)", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <div
                  className="flex items-center justify-center rounded-sm flex-shrink-0"
                  style={{ width: "48px", height: "48px", border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.07)" }}
                >
                  <Icon name={c.icon} size={20} className="text-gold" />
                </div>
                <div>
                  <div className="font-golos font-medium mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.8 }}>
                    {c.title}
                  </div>
                  {c.lines.map((line) => (
                    <div key={line} className="font-golos font-light" style={{ color: "rgba(232,224,208,0.7)", fontSize: "0.95rem" }}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-lg flex items-center justify-center"
            style={{ height: "300px", background: "var(--dark-4)", border: "1px solid rgba(201,168,76,0.1)" }}
          >
            <div className="text-center">
              <Icon name="Map" size={40} className="text-gold mx-auto mb-3" />
              <div className="font-golos font-light text-sm" style={{ color: "rgba(232,224,208,0.3)" }}>
                Карта будет добавлена
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "var(--dark)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container mx-auto px-8 lg:px-16 py-16">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="font-display text-2xl" style={{ color: "#E8E0D0", letterSpacing: "0.2em" }}>
                  BIRK<span className="text-gold">HAYAT</span>
                </span>
              </div>
              <p className="font-golos font-light text-sm leading-relaxed mb-6" style={{ color: "rgba(232,224,208,0.45)", maxWidth: "320px" }}>
                Медицинский центр нового поколения. Где забота о здоровье становится искусством.
              </p>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "Youtube"].map((s) => (
                  <button
                    key={s}
                    className="flex items-center justify-center rounded-sm transition-all"
                    style={{ width: "36px", height: "36px", border: "1px solid rgba(201,168,76,0.2)", background: "transparent", cursor: "pointer" }}
                  >
                    <Icon name={s} size={16} className="text-gold" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="font-golos font-medium mb-5" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7 }}>
                Навигация
              </div>
              <div className="space-y-3">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="block font-golos font-light text-sm transition-colors hover:text-gold" style={{ color: "rgba(232,224,208,0.45)" }}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-golos font-medium mb-5" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7 }}>
                Режим работы
              </div>
              <div className="space-y-2">
                {[
                  { day: "Понедельник–Пятница", hours: "08:00–20:00" },
                  { day: "Суббота", hours: "09:00–18:00" },
                  { day: "Воскресенье", hours: "Выходной" },
                ].map((h) => (
                  <div key={h.day} className="flex flex-col">
                    <span className="font-golos font-light text-xs" style={{ color: "rgba(232,224,208,0.35)" }}>{h.day}</span>
                    <span className="font-golos font-light text-sm" style={{ color: "rgba(232,224,208,0.65)" }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="gold-divider" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <p className="font-golos font-light text-xs" style={{ color: "rgba(232,224,208,0.25)" }}>
              © 2026 BirkHayat. Все права защищены.
            </p>
            <div className="flex gap-6">
              {["Политика конфиденциальности", "Пользовательское соглашение"].map((l) => (
                <a key={l} href="#" className="font-golos font-light text-xs transition-colors hover:text-gold" style={{ color: "rgba(232,224,208,0.25)" }}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
