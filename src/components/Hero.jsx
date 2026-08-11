import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineBadgeCheck } from "react-icons/hi";
import heroImg from "../assets/img/arfat_front.webp";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="École fondamentale construite par EBF-BTP à Arfat, Nouakchott"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
      </div>

      <div className="container-px relative z-10 mx-auto w-full max-w-7xl pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent-300 ring-1 ring-white/15 backdrop-blur-sm">
            <HiOutlineBadgeCheck size={16} />
            Certifiée BAT2 — N°0077/CQCE-BTP/MHUAT/2024
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Bâtir les infrastructures publiques de la Mauritanie de demain
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/80">
            Depuis 2014, EBF-BTP SARL conçoit et réalise des écoles, bâtiments
            publics et infrastructures pour l'État mauritanien — de l'étude
            du dossier d'appel d'offres jusqu'à la livraison de l'ouvrage.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#realisations"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent-500/30 transition-transform hover:-translate-y-0.5 hover:bg-accent-600"
            >
              Voir nos réalisations
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Nous contacter
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4"
        >
          {[
            { value: 2014, suffix: "", label: "Année de création" },
            { value: 12, suffix: "+", label: "Ans d'expérience BTP" },
            { value: 34, suffix: "", label: "Ouvrages livrés" },
            { value: 138, suffix: " M+", label: "MRU de travaux gérés" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-3xl font-bold text-white sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-sm text-white/65">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
