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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
    </>
  );
}
