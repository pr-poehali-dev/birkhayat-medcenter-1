import Icon from "@/components/ui/icon";

const SERVICES = [
  { icon: "Heart", title: "Кардиология", desc: "Диагностика и лечение заболеваний сердечно-сосудистой системы с применением современных методик" },
  { icon: "Brain", title: "Неврология", desc: "Комплексное обследование и лечение заболеваний нервной системы" },
  { icon: "Eye", title: "Офтальмология", desc: "Полная диагностика зрения и лечение заболеваний глаз" },
  { icon: "Activity", title: "Эндокринология", desc: "Диагностика и коррекция гормональных нарушений" },
  { icon: "Microscope", title: "Лабораторная диагностика", desc: "Полный спектр анализов на современном оборудовании" },
  { icon: "Stethoscope", title: "Терапия", desc: "Первичный осмотр, профилактика и лечение общих заболеваний" },
];

export const DOCTORS = [
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

interface MainSectionsProps {
  onScrollToAppointment: (doctorName: string) => void;
}

export default function MainSections({ onScrollToAppointment }: MainSectionsProps) {
  return (
    <>
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
                    onClick={() => onScrollToAppointment(d.name)}
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
