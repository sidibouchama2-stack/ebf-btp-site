import arfatPanorama from "../assets/img/arfat_panorama.webp";
import dakarBureau from "../assets/img/dakar_interior_bureau.webp";
import classroom1 from "../assets/img/classroom_1.webp";
import boutilimittLarge from "../assets/img/boutilimitt_large.webp";
import excellenceTvz from "../assets/img/excellence_tvz.webp";
import dakarCouloir from "../assets/img/dakar_interior_couloir.webp";
import Reveal from "./Reveal";

const IMAGES = [
  { src: arfatPanorama, alt: "École fondamentale d'Arfat, Nouakchott", span: "sm:col-span-2 sm:row-span-2" },
  { src: dakarBureau, alt: "Bureau de l'Ambassade de Mauritanie à Dakar après réhabilitation", span: "" },
  { src: classroom1, alt: "Salle de classe équipée et livrée", span: "" },
  { src: excellenceTvz, alt: "École Excellence TVZ, Nouakchott", span: "" },
  { src: boutilimittLarge, alt: "École d'AL Oudheybi, Boutilimitt", span: "sm:col-span-2" },
  { src: dakarCouloir, alt: "Aménagement intérieur, Ambassade de Mauritanie à Dakar", span: "" },
];

export default function Gallery() {
  return (
    <section className="section-pad bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
            Sur le terrain
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            Le détail qui fait la différence
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[180px]">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.alt}
              delay={i * 0.05}
              className={`group relative overflow-hidden rounded-2xl bg-ink-100 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
