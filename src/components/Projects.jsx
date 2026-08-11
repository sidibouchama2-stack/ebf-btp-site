import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineLocationMarker, HiOutlinePlus } from "react-icons/hi";
import { formatMRU } from "../utils/format";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

const modules = import.meta.glob("/content/chantiers/*.json", {
  eager: true,
});

const projects = Object.values(modules)
  .map((m) => m.default)
  .filter((p) => p.status === "realise")
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

const totalBudget = 137717382;

const FILTERS = ["Tous", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("Tous");

  const visible = useMemo(
    () =>
      filter === "Tous"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="realisations" className="section-pad bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
            Nos réalisations
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            Des projets concrets, partout en Mauritanie
          </h2>
          <p className="mt-4 text-ink-500">
            Plus de {formatMRU(totalBudget)} de travaux publics gérés sur nos
            projets phares, livrés dans le respect des délais et des normes
            de qualité.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                filter === f
                  ? "bg-primary-700 text-white shadow-md shadow-primary-700/25"
                  : "bg-ink-50 text-ink-600 hover:bg-ink-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.title + project.location}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => setSelected(project)}
                  className="group relative block w-full overflow-hidden rounded-2xl text-left shadow-sm ring-1 ring-ink-900/5 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-800 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                      <HiOutlinePlus size={18} />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="inline-block rounded-full bg-accent-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                        {project.category}
                      </span>
                      <h3 className="mt-2 font-heading text-lg font-bold leading-tight text-white">
                        {project.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-1.5 text-sm text-white/75">
                        <HiOutlineLocationMarker size={15} />
                        {project.location}
                        <span className="text-white/40">·</span>
                        {project.period}
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
