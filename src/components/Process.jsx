import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Étude du dossier d'appel d'offres",
    text: "Acquisition du DAO auprès de l'autorité contractante et analyse détaillée des lots, exigences techniques et délais.",
  },
  {
    n: "02",
    title: "Constitution du pli",
    text: "Préparation des trois dossiers obligatoires : administratif, offre technique et offre financière, conformes aux modèles du DAO.",
  },
  {
    n: "03",
    title: "Garantie bancaire",
    text: "Obtention de la caution de soumission auprès de la banque, selon le montant et la validité fixés par le DAO.",
  },
  {
    n: "04",
    title: "Dépôt du pli",
    text: "Dépôt physique auprès de la Commission de Passation des Marchés Publics avant la date limite, avec récépissé horodaté.",
  },
  {
    n: "05",
    title: "Ouverture & évaluation",
    text: "Participation à la séance publique d'ouverture des plis, puis évaluation administrative, technique et financière.",
  },
  {
    n: "06",
    title: "Exécution & livraison",
    text: "Une fois le marché attribué, lancement du chantier avec suivi rigoureux de la qualité, de la sécurité et des délais jusqu'à réception.",
  },
];

export default function Process() {
  return (
    <section id="methode" className="section-pad bg-ink-900">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            Notre méthode
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
            Du dossier d'appel d'offres à la livraison de l'ouvrage
          </h2>
          <p className="mt-4 text-ink-300">
            Une procédure rigoureuse et transparente, maîtrisée à chaque
            étape du marché public.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.06}
              className="relative overflow-hidden rounded-2xl bg-white/[0.04] p-7 ring-1 ring-white/10"
            >
              <span className="font-heading text-5xl font-extrabold text-white/10">
                {step.n}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
