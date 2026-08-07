import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineX, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineCurrencyDollar } from "react-icons/hi";
import { formatMRU } from "../utils/format";

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);

  if (!project) return null;

  const images = project.gallery;
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/85 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          <button
            aria-label="Fermer"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-800 shadow-md transition-colors hover:bg-white"
          >
            <HiOutlineX size={20} />
          </button>

          <div className="relative aspect-[16/10] w-full bg-ink-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`${project.title} — photo ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  aria-label="Photo précédente"
                  onClick={prev}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink-800 shadow-md transition-colors hover:bg-white"
                >
                  <HiOutlineChevronLeft size={22} />
                </button>
                <button
                  aria-label="Photo suivante"
                  onClick={next}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink-800 shadow-md transition-colors hover:bg-white"
                >
                  <HiOutlineChevronRight size={22} />
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Aller à la photo ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
              {project.category}
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold text-ink-900">
              {project.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-500">{project.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-ink-100 pt-5 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-sm text-ink-600">
                <HiOutlineLocationMarker className="text-primary-600" size={18} />
                {project.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-600">
                <HiOutlineCalendar className="text-primary-600" size={18} />
                {project.period}
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-ink-800">
                <HiOutlineCurrencyDollar className="text-primary-600" size={18} />
                {formatMRU(project.budget)}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
