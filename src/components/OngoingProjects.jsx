import {
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";
import Reveal from "./Reveal";

// Chaque chantier = un fichier JSON dans /content/chantiers/ (champ "status": "en_cours" | "realise").
// Pour ajouter, modifier, retirer un chantier ou le marquer terminé, il suffit d'éditer ce fichier —
// aucune autre modification de code n'est nécessaire. Les chantiers "realise" apparaissent
// automatiquement dans la section Réalisations.
const modules = import.meta.glob("/content/chantiers/*.json", {
  eager: true,
});

const ongoingProjects = Object.values(modules)
  .map((m) => m.default)
  .filter((p) => p.status === "en_cours")
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

const CATEGORY_ORDER = ["Construction", "Extension", "Réhabilitation", "Achèvement"];

function groupByCategory(items) {
  const groups = new Map();
  for (const item of items) {
    const key = item.category || "Autres";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return [...groups.entries()].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a[0]) - CATEGORY_ORDER.indexOf(b[0])
  );
}

const CATEGORY_LABELS = {
  Construction: "Constructions en cours",
  Extension: "Extensions en cours",
  Réhabilitation: "Réhabilitations en cours",
  Achèvement: "Achèvement de travaux",
};

export default function OngoingProjects() {
  if (ongoingProjects.length === 0) return null;

  const groups = groupByCategory(ongoingProjects);

  return (
    <section id="travaux-en-cours" className="section-pad bg-sand-50">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
            Chantiers actifs
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            Travaux en cours
          </h2>
          <p className="mt-4 text-ink-500">
            {ongoingProjects.length} chantiers actuellement en exécution sur
            le territoire mauritanien.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {groups.map(([category, items], gi) => (
            <Reveal key={category} delay={gi * 0.08}>
              <h3 className="mb-4 flex items-center gap-3 font-heading text-lg font-bold text-ink-900">
                {CATEGORY_LABELS[category] || category}
                <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                  {items.length}
                </span>
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((project, i) => (
                  <div
                    key={`${project.title}-${project.location}-${i}`}
                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-ink-900/5"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary-50">
                      {project.cover ? (
                        <img
                          src={project.cover}
                          alt={project.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <HiOutlineOfficeBuilding
                          size={24}
                          className="text-primary-200"
                        />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-ink-900">
                        {project.title}
                      </p>
                      <p className="flex items-center gap-1 text-sm text-ink-500">
                        <HiOutlineLocationMarker size={14} />
                        {project.location}
                      </p>
                    </div>

                    {typeof project.progress === "number" && (
                      <div className="w-24 shrink-0">
                        <div className="flex items-center justify-between text-xs font-semibold text-ink-600">
                          <span>{project.progress}%</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                          <div
                            className="h-full rounded-full bg-accent-500 transition-all duration-700"
                            style={{
                              width: `${Math.min(100, Math.max(0, project.progress))}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
