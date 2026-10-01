import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  pop = false,
  className = "",
  as: Component = motion.div,
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      initial={pop ? { opacity: 0, y, scale: 0.94 } : { opacity: 0, y }}
      whileInView={pop ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        pop
          ? { duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }
          : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </Component>
  );
}
