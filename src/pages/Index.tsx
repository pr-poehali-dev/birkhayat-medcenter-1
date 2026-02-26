import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О клинике", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Врачи", href: "#doctors" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Heart", title: "Кардиология", desc: "Диагностика и лечение заболеваний сердечно-сосудистой системы с применением современных методик" },
  { icon: "Brain", title: "Неврология", desc: "Комплексное обследование и лечение заболеваний нервной системы" },
  { icon: "Eye", title: "Офтальмология", desc: "Полная диагностика зрения и лечение заболеваний глаз" },
  { icon: "Activity", title: "Эндокринология", desc: "Диагностика и коррекция гормональных нарушений" },
  { icon: "Microscope", title: "Лабораторная диагностика", desc: "Полный спектр анализов на современном оборудовании" },
  { icon: "Stethoscope", title: "Терапия", desc: "Первичный осмотр, профилактика и лечение общих заболеваний" },
];

const DOCTORS = [
  {
    name: "Профессор Алишер Каримов",
    spec: "Кардиолог",
    exp: "24 года опыта",
    degree: "Доктор медицинских наук",
    tags: ["ЭКГ", "Эхокардиография", "Аритмия"],
  },
  {
    name: "Доктор Лейла Ахмедова",
    spec: "Невролог",
    exp: "18 лет опыта",
    degree: "Кандидат медицинских наук",
    tags: ["МРТ-диагностика", "Мигрень", "Инсульт"],
  },
  {
    name: "Доктор Руслан Юсупов",
    spec: "Офтальмолог",
    exp: "15 лет опыта",
    degree: "Кандидат медицинских наук",
    tags: ["Лазерная коррекция", "Катаракта", "Глаукома"],
  },
  {
    name: "Профессор Дина Назарова",
    spec: "Эндокринолог",
    exp: "21 год опыта",
    degree: "Доктор медицинских наук",
    tags: ["Диабет", "Щитовидная железа", "Гормоны"],
  },
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

const TIMES = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentSent, setAppointmentSent] = useState(false);

  const handleAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentSent(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark)", color: "#E8E0D0" }}>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          background: "linear-gradient(180deg, rgba(12,12,16,0.95) 0%, rgba(12,12,16,0.8) 100%)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <a href="#" className="flex flex-col leading-none">
          <span
            className="font-display font-light"
            style={{ fontSize: "1.5rem", color: "#E8E0D0", letterSpacing: "0.2em" }}
          >
            BIRK<span className="text-gold">HAYAT</span>
          </span>
          <span
            className="font-golos font-light"
            style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "rgba(201,168,76,0.7)", textTransform: "uppercase" }}
          >
            Медицинский центр
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        <a href="#appointment" className="hidden lg:block btn-gold" style={{ fontSize: "0.7rem" }}>
          Записаться
        </a>

        <button className="lg:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(12,12,16,0.98)", backdropFilter: "blur(20px)" }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-2xl tracking-widest"
              style={{ color: "#E8E0D0" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#appointment" className="btn-gold mt-4" onClick={() => setMenuOpen(false)}>
            Записаться
          </a>
        </div>
      )}

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden hero-pattern noise"
        style={{ paddingTop: "80px" }}
      >
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-96 opacity-20"
          style={{ background: "linear-gradient(180deg, transparent, var(--gold), transparent)", left: "8%" }}
        />
        <div
          className="absolute right-0 top-1/3 w-px h-64 opacity-10"
          style={{ background: "linear-gradient(180deg, transparent, var(--gold), transparent)", right: "12%" }}
        />

        <div
          className="absolute right-16 top-1/2 -translate-y-1/2 rounded-full hidden xl:block"
          style={{
            width: "500px",
            height: "500px",
            border: "1px solid rgba(201,168,76,0.08)",
            boxShadow: "inset 0 0 80px rgba(201,168,76,0.04)",
          }}
        />
        <div
          className="absolute right-24 top-1/2 -translate-y-1/2 rounded-full hidden xl:block"
          style={{
            width: "360px",
            height: "360px",
            border: "1px solid rgba(201,168,76,0.12)",
          }}
        />

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-2xl">
            <div className="section-label animate-fade-in-up mb-8" style={{ animationDelay: "0s", opacity: 0, animation: "fadeInUp 0.8s ease 0s forwards" }}>
              Премиальная медицина
            </div>

            <h1
              className="font-display"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", lineHeight: "1.05", fontWeight: 300, marginBottom: "2rem", opacity: 0, animation: "fadeInUp 0.8s ease 0.2s forwards" }}
            >
              Здоровье —<br />
              <span className="text-shimmer">высшая ценность</span>
            </h1>

            <p
              className="font-golos font-light leading-relaxed"
              style={{ fontSize: "1.05rem", color: "rgba(232,224,208,0.7)", maxWidth: "480px", marginBottom: "3rem", opacity: 0, animation: "fadeInUp 0.8s ease 0.4s forwards" }}
            >
              Медицинский центр BirkHayat объединяет передовые технологии диагностики и лечения с безупречным уровнем заботы о каждом пациенте.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{ opacity: 0, animation: "fadeInUp 0.8s ease 0.6s forwards" }}
            >
              <a href="#appointment" className="btn-gold">
                Записаться на приём
              </a>
              <a href="#about" className="btn-outline-gold">
                Узнать о клинике
              </a>
            </div>

            <div
              className="grid grid-cols-3 gap-8 mt-16 pt-16"
              style={{ borderTop: "1px solid rgba(201,168,76,0.15)", opacity: 0, animation: "fadeInUp 0.8s ease 0.7s forwards" }}
            >
              {[
                { num: "15+", label: "лет на рынке" },
                { num: "42", label: "специалиста" },
                { num: "98%", label: "довольных пациентов" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-gold" style={{ fontSize: "2.5rem", fontWeight: 300 }}>{s.num}</div>
                  <div className="font-golos font-light" style={{ fontSize: "0.8rem", color: "rgba(232,224,208,0.5)", letterSpacing: "0.05em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0, animation: "fadeIn 1s ease 0.8s forwards" }}>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "rgba(201,168,76,0.5)", textTransform: "uppercase" }}>Прокрутите</div>
          <div style={{ width: "1px", height: "50px", background: "linear-gradient(180deg, rgba(201,168,76,0.5), transparent)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32" style={{ backgroundColor: "var(--dark-2)" }}>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="section-label mb-8">О клинике</div>
              <h2 className="font-display mb-8" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, lineHeight: 1.15 }}>
                Медицина, которой<br />
                <span className="text-gold">можно доверять</span>
              </h2>
              <p className="font-golos font-light leading-relaxed mb-6" style={{ color: "rgba(232,224,208,0.7)" }}>
                BirkHayat — медицинский центр нового поколения, где передовые технологии сочетаются с тёплым, внимательным отношением к каждому пациенту. Мы убеждены: качественная медицина должна быть доступна тем, кто ценит своё здоровье.
              </p>
              <p className="font-golos font-light leading-relaxed mb-10" style={{ color: "rgba(232,224,208,0.7)" }}>
                За 15 лет работы мы создали команду из лучших специалистов страны, оснастили клинику оборудованием мирового уровня и выстроили систему, в которой каждый пациент получает персональный подход.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Shield", title: "Точная диагностика" },
                  { icon: "Clock", title: "Без очередей" },
                  { icon: "Star", title: "Топ-специалисты" },
                  { icon: "Lock", title: "Конфиденциальность" },
                ].map((v) => (
                  <div key={v.title} className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center rounded-sm flex-shrink-0"
                      style={{ width: "36px", height: "36px", border: "1px solid rgba(201,168,76,0.3)", backgroundColor: "rgba(201,168,76,0.06)" }}
                    >
                      <Icon name={v.icon} size={16} className="text-gold" />
                    </div>
                    <span className="font-golos font-light text-sm" style={{ color: "rgba(232,224,208,0.8)" }}>{v.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 rounded-lg opacity-20"
                style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.3), transparent 70%)" }}
              />
              <div
                className="relative rounded-lg p-10"
                style={{ background: "var(--dark-3)", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 font-golos text-xs tracking-widest uppercase text-gold"
                  style={{ background: "var(--dark-3)", letterSpacing: "0.2em" }}
                >
                  Наши принципы
                </div>

                <div className="space-y-8 mt-4">
                  {[
                    { num: "01", title: "Пациент в центре", desc: "Каждое решение принимается исходя из интересов пациента, а не протокола" },
                    { num: "02", title: "Доказательная медицина", desc: "Только методики с подтверждённой эффективностью, никакого шарлатанства" },
                    { num: "03", title: "Прозрачность", desc: "Честный разговор о диагнозе, прогнозе и стоимости лечения" },
                    { num: "04", title: "Непрерывное развитие", desc: "Наши врачи регулярно проходят обучение в лучших клиниках мира" },
                  ].map((p) => (
                    <div key={p.num} className="flex gap-5">
                      <span className="font-display text-gold opacity-40" style={{ fontSize: "1.3rem", fontWeight: 300, flexShrink: 0, lineHeight: 1.2 }}>{p.num}</span>
                      <div>
                        <div className="font-golos font-medium mb-1" style={{ fontSize: "0.9rem", color: "#E8E0D0" }}>{p.title}</div>
                        <div className="font-golos font-light text-sm" style={{ color: "rgba(232,224,208,0.5)" }}>{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32" style={{ backgroundColor: "var(--dark)" }}>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <div className="section-label justify-center mb-6">Направления</div>
            <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300 }}>
              Наши <span className="text-gold">услуги</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="card-dark rounded-lg p-8 cursor-pointer group">
                <div
                  className="flex items-center justify-center mb-6 rounded-sm"
                  style={{
                    width: "52px",
                    height: "52px",
                    border: "1px solid rgba(201,168,76,0.25)",
                    background: "rgba(201,168,76,0.06)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon name={s.icon} size={22} className="text-gold" />
                </div>
                <h3 className="font-golos font-medium mb-3" style={{ fontSize: "1.05rem", color: "#E8E0D0" }}>
                  {s.title}
                </h3>
                <p className="font-golos font-light text-sm leading-relaxed" style={{ color: "rgba(232,224,208,0.5)" }}>
                  {s.desc}
                </p>
                <div
                  className="flex items-center gap-2 mt-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  Подробнее <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-outline-gold">Все направления</button>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="py-32" style={{ backgroundColor: "var(--dark-2)" }}>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
            <div>
              <div className="section-label mb-6">Команда</div>
              <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300 }}>
                Наши <span className="text-gold">врачи</span>
              </h2>
            </div>
            <p className="font-golos font-light text-sm" style={{ color: "rgba(232,224,208,0.5)", maxWidth: "320px", lineHeight: 1.7 }}>
              Каждый специалист — профессионал с многолетним опытом и непрерывным профессиональным развитием
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.map((d) => (
              <div key={d.name} className="card-dark rounded-lg overflow-hidden group">
                <div
                  className="relative"
                  style={{
                    height: "240px",
                    background: "linear-gradient(135deg, var(--dark-4), var(--dark-3))",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: "rgba(201,168,76,0.15)" }}
                  >
                    <Icon name="User" size={64} />
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16"
                    style={{ background: "linear-gradient(0deg, var(--dark-3), transparent)" }}
                  />
                  <div
                    className="absolute top-4 right-4 text-xs font-golos px-3 py-1 rounded-sm"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      border: "1px solid rgba(201,168,76,0.25)",
                      color: "var(--gold-light)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {d.spec}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display mb-1" style={{ fontSize: "1.05rem", fontWeight: 400, color: "#E8E0D0", lineHeight: 1.25 }}>
                    {d.name}
                  </h3>
                  <div className="font-golos text-xs mb-1" style={{ color: "rgba(232,224,208,0.4)", letterSpacing: "0.05em" }}>
                    {d.degree}
                  </div>
                  <div className="font-golos text-xs mb-4" style={{ color: "var(--gold)", opacity: 0.8 }}>
                    {d.exp}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <span
                        key={t}
                        className="font-golos font-light"
                        style={{
                          fontSize: "0.65rem",
                          padding: "2px 8px",
                          border: "1px solid rgba(201,168,76,0.15)",
                          color: "rgba(232,224,208,0.5)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    className="w-full mt-5 btn-outline-gold"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.7rem" }}
                    onClick={() => {
                      setSelectedDoctor(d.name);
                      document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section id="appointment" className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.07) 0%, transparent 60%), var(--dark-3)",
          }}
        />

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="section-label justify-center mb-6">Онлайн-запись</div>
              <h2 className="font-display mb-4" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300 }}>
                Запишитесь <span className="text-gold">прямо сейчас</span>
              </h2>
              <p className="font-golos font-light" style={{ color: "rgba(232,224,208,0.5)", fontSize: "0.95rem" }}>
                Выберите врача и удобное время — мы подтвердим запись в течение 15 минут
              </p>
            </div>

            {appointmentSent ? (
              <div
                className="text-center py-16 rounded-lg"
                style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)" }}
              >
                <div
                  className="mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ width: "72px", height: "72px", border: "1px solid var(--gold)", background: "rgba(201,168,76,0.1)" }}
                >
                  <Icon name="Check" size={32} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl mb-3 text-gold">Заявка принята</h3>
                <p className="font-golos font-light" style={{ color: "rgba(232,224,208,0.6)" }}>
                  Мы свяжемся с вами в течение 15 минут для подтверждения
                </p>
                <button className="btn-outline-gold mt-8" onClick={() => setAppointmentSent(false)}>
                  Записаться ещё раз
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleAppointment}
                className="rounded-lg p-10"
                style={{ background: "var(--dark-4)", border: "1px solid rgba(201,168,76,0.12)" }}
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-golos text-xs mb-2 uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.7)" }}>
                      Ваше имя
                    </label>
                    <input type="text" placeholder="Иван Иванов" className="input-dark" required />
                  </div>
                  <div>
                    <label className="block font-golos text-xs mb-2 uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.7)" }}>
                      Телефон
                    </label>
                    <input type="tel" placeholder="+7 (___) ___-__-__" className="input-dark" required />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block font-golos text-xs mb-2 uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.7)" }}>
                    Специалист
                  </label>
                  <select
                    className="input-dark"
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    style={{ cursor: "pointer" }}
                  >
                    <option value="" style={{ background: "var(--dark-4)" }}>Выберите врача</option>
                    {DOCTORS.map((d) => (
                      <option key={d.name} value={d.name} style={{ background: "var(--dark-4)" }}>
                        {d.name} — {d.spec}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block font-golos text-xs mb-3 uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.7)" }}>
                    Удобное время
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {TIMES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className="font-golos text-sm py-2 text-center transition-all"
                        style={{
                          border: `1px solid ${selectedTime === t ? "var(--gold)" : "rgba(201,168,76,0.15)"}`,
                          background: selectedTime === t ? "rgba(201,168,76,0.15)" : "transparent",
                          color: selectedTime === t ? "var(--gold-light)" : "rgba(232,224,208,0.5)",
                          cursor: "pointer",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn-gold w-full" style={{ padding: "1rem", fontSize: "0.8rem" }}>
                  Отправить заявку
                </button>

                <p className="font-golos font-light text-center mt-4" style={{ fontSize: "0.75rem", color: "rgba(232,224,208,0.3)" }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

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
    </div>
  );
}