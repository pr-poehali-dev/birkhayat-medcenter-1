import { useState } from "react";
import Icon from "@/components/ui/icon";
import { DOCTORS } from "@/components/MainSections";

const TIMES = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

interface AppointmentSectionProps {
  selectedDoctor: string;
  setSelectedDoctor: (name: string) => void;
}

export default function AppointmentSection({ selectedDoctor, setSelectedDoctor }: AppointmentSectionProps) {
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentSent, setAppointmentSent] = useState(false);

  const handleAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentSent(true);
  };

  return (
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
  );
}
