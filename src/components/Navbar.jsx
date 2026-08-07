import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/img/logo.png";

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Méthode" },
  { href: "#travaux-en-cours", label: "Travaux en cours" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-3">
        <a href="#accueil" className="flex items-center gap-2.5">
          <img src={logo} alt="EBF-BTP" className="h-11 w-auto sm:h-12" />
          <span
            className={`hidden flex-col leading-tight sm:flex ${
              scrolled ? "text-ink-900" : "text-white"
            }`}
          >
            <span className="font-heading text-base font-bold tracking-tight">
              EBF-BTP
            </span>
            <span
              className={`text-[11px] font-medium tracking-wide ${
                scrolled ? "text-ink-500" : "text-white/75"
              }`}
            >
              SARL — BÂTIMENT &amp; T.P.
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  scrolled ? "text-ink-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-transform hover:-translate-y-0.5 hover:bg-accent-600 lg:inline-block"
        >
          Demander un devis
        </a>

        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          className={`-mr-1 p-2 lg:hidden ${scrolled ? "text-ink-900" : "text-white"}`}
        >
          <HiMenu size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink-950/60 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white px-6 py-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <img src={logo} alt="EBF-BTP" className="h-10 w-auto" />
                <button
                  aria-label="Fermer le menu"
                  onClick={() => setOpen(false)}
                  className="p-1 text-ink-700"
                >
                  <HiX size={26} />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-md"
              >
                Demander un devis
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
