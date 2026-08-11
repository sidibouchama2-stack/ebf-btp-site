import logo from "../assets/img/logo.png";

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#travaux-en-cours", label: "Travaux en cours" },
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="EBF-BTP" className="h-10 w-auto rounded-md bg-white p-1" />
              <span className="font-heading text-lg font-bold">EBF-BTP SARL</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Entreprise mauritanienne de Bâtiment et Travaux Publics,
              certifiée BAT2, au service des marchés publics depuis 2014.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              <li>ILOT Nejah, lot 2164, Appt N°06</li>
              <li>Tevragh Zeina, Nouakchott — Mauritanie</li>
              <li>
                <a href="tel:+22226302651" className="hover:text-accent-300">
                  +222 26 30 26 51
                </a>
              </li>
              <li>
                <a href="mailto:mbch2968@gmail.com" className="hover:text-accent-300">
                  mbch2968@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} EBF-BTP SARL — Tous droits réservés.</p>
          <p>RC : 47 783 · NIF : 00033787 · CNSS : 11601</p>
        </div>
      </div>
    </footer>
  );
}
