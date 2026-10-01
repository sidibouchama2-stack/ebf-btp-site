import { HiOutlineOfficeBuilding, HiOutlineShieldCheck, HiOutlineClock } from "react-icons/hi";
import certificat from "../assets/img/certificat_bat2.webp";
import Reveal from "./Reveal";

const POINTS = [
  {
    icon: HiOutlineOfficeBuilding,
    title: "Marchés publics",
    text: "Spécialiste de l'exécution des appels d'offres lancés par le MHUAT et les institutions étatiques mauritaniennes.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Classification BAT2",
    text: "Certificat de Qualification et de Classification N°0077/CQCE-BTP/MHUAT/2024, valable 3 ans à compter de sa délivrance.",
  },
  {
    icon: HiOutlineClock,
    title: "Gestion de bout en bout",
    text: "De l'analyse du dossier d'appel d'offres jusqu'à la réception finale, en passant par le suivi qualité et sécurité du chantier.",
  },
];

export default function About() {
  return (
    <section id="a-propos" className="section-pad bg-white">
      <div className="container-px mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
            À propos d'EBF-BTP
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            Une entreprise mauritanienne, un savoir-faire éprouvé depuis 2014
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            EBF-BTP SARL est une société spécialisée dans la réalisation de
            projets de construction de bâtiments publics en Mauritanie. Acteur
            reconnu du secteur du BTP, elle intervient principalement dans
            l'exécution des marchés publics lancés par les institutions
            étatiques, notamment le Ministère de l'Habitat, de l'Urbanisme et
            de l'Aménagement du Territoire (MHUAT).
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Grâce à son expertise technique et à une organisation structurée,
            l'entreprise assure la gestion complète des chantiers qui lui sont
            attribués, en veillant à la qualité, à la sécurité et au respect
            des délais.
          </p>

          <div className="mt-10 space-y-6">
            {POINTS.map((point, i) => (
              <Reveal
                key={point.title}
                delay={0.1 + i * 0.08}
                pop
                y={12}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <point.icon size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ink-900">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent-100 via-sand-100 to-primary-100" />
            <img
              src={certificat}
              alt="Certificat de Qualification et de Classification BAT2 délivré par le MHUAT"
              className="w-full rounded-2xl shadow-2xl ring-1 ring-ink-900/5"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-ink-900 px-6 py-4 text-white shadow-xl">
              <p className="font-heading text-2xl font-bold">BAT2</p>
              <p className="text-xs text-white/70">Bâtiment &amp; équipements publics</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
