import {
  HiOutlineAcademicCap,
  HiOutlineColorSwatch,
  HiOutlineLibrary,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: HiOutlineAcademicCap,
    title: "Bâtiments scolaires",
    text: "Construction d'écoles fondamentales complètes et extension de salles de classe (SDC), équipées et livrées clé en main.",
  },
  {
    icon: HiOutlineColorSwatch,
    title: "Réhabilitation & rénovation",
    text: "Réhabilitation de bâtiments publics et diplomatiques : façades, aménagements intérieurs et finitions haut de gamme.",
  },
  {
    icon: HiOutlineLibrary,
    title: "Infrastructures publiques",
    text: "Réalisation d'équipements publics et sanitaires pour le compte des institutions étatiques mauritaniennes.",
  },
  {
    icon: HiOutlineClipboardCheck,
    title: "Gestion de projets & DAO",
    text: "Étude des dossiers d'appel d'offres, constitution des plis administratifs, techniques et financiers, suivi jusqu'à la réception.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-ink-50/60">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
            Nos domaines d'intervention
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            Une expertise complète, du gros œuvre à la finition
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.08}
              className="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink-900/5 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-primary-700 text-white transition-colors group-hover:bg-accent-500">
                <service.icon size={26} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-ink-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {service.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
