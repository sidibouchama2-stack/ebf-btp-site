import { HiOutlineUserCircle } from "react-icons/hi";
import { TbQuote } from "react-icons/tb";
import photo from "../assets/img/directeur.jpeg";
import Reveal from "./Reveal";

export default function DirectorMessage() {
  return (
    <section className="section-pad bg-primary-900">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="grid gap-12 lg:grid-cols-[300px_1fr] lg:items-center">
          <div className="mx-auto flex flex-col items-center text-center lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border border-white/15" />
              <img
                src={photo}
                alt="Mohamed Lemine Bouchama, Directeur Général d'EBF-BTP SARL"
                className="h-44 w-44 rounded-full object-cover ring-4 ring-white/10 sm:h-52 sm:w-52"
              />
              <span className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent-500 text-white ring-4 ring-primary-900">
                <HiOutlineUserCircle size={20} />
              </span>
            </div>
            <p className="mt-5 font-heading text-lg font-bold text-white">
              Mohamed Lemine Bouchama
            </p>
            <p className="text-sm text-white/55">Directeur Général, EBF-BTP SARL</p>
          </div>

          <div>
            <TbQuote className="text-accent-400" size={48} />
            <h2 className="mt-2 text-balance font-heading text-2xl font-bold text-white sm:text-3xl">
              Le mot du Directeur
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Depuis la création d'EBF-BTP en 2014, notre conviction est
              restée la même&nbsp;: chaque école, chaque bâtiment que nous
              livrons doit servir les communautés mauritaniennes pour des
              générations. La rigueur, la transparence et le respect de nos
              engagements envers l'État et nos partenaires sont les piliers
              sur lesquels nous avons construit la réputation de notre
              entreprise.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Je tiens à remercier chaque membre de notre équipe pour son
              engagement quotidien sur le terrain, et je reste pleinement
              mobilisé, avec toute notre équipe, pour relever les défis des
              marchés publics de demain.
            </p>
            <p className="mt-6 font-heading text-base font-semibold text-white">
              Mohamed Lemine Bouchama
              <span className="ml-2 font-body text-sm font-normal text-white/50">
                — Directeur Général
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
