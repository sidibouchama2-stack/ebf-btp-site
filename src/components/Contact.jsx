import { useState } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "mbch2968@gmail.com";

const INFO = [
  {
    icon: HiOutlineLocationMarker,
    label: "Adresse",
    value: "ILOT Nejah, lot 2164, Appt N°06, Tevragh Zeina, Nouakchott — Mauritanie",
  },
  {
    icon: HiOutlinePhone,
    label: "Téléphone",
    value: "+222 26 30 26 51",
    href: "tel:+22226302651",
  },
  {
    icon: HiOutlineMail,
    label: "E-mail",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

function encodeForm(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ "form-name": "contact", ...form }),
      });
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError(true);
    }
  };

  return (
    <section id="contact" className="section-pad bg-ink-50/60">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
            Contact
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            Discutons de votre prochain projet
          </h2>
          <p className="mt-4 text-ink-500">
            Une question, un appel d'offres, un devis ? Notre équipe vous
            répond rapidement.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-ink-900 p-8 text-white">
              <div>
                <h3 className="font-heading text-xl font-semibold">
                  Coordonnées
                </h3>
                <div className="mt-6 space-y-6">
                  {INFO.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/10">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-white/50">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-white hover:text-accent-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-white/45">RC</p>
                  <p className="text-sm font-semibold">47 783</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-white/45">NIF</p>
                  <p className="text-sm font-semibold">00033787</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-white/45">CNSS</p>
                  <p className="text-sm font-semibold">11601</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-ink-900/5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Ne pas remplir : <input name="bot-field" tabIndex="-1" autoComplete="off" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-ink-700">Nom complet</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700">E-mail</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vous@exemple.com"
                    className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="text-sm font-medium text-ink-700">Sujet</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre message"
                  className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div className="mt-5">
                <label className="text-sm font-medium text-ink-700">Message</label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="mt-1.5 w-full resize-none rounded-xl border border-ink-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-transform hover:-translate-y-0.5 hover:bg-accent-600"
              >
                Envoyer le message
                <HiOutlinePaperAirplane className="rotate-90" size={16} />
              </button>

              {sent && (
                <p className="mt-4 text-sm font-medium text-primary-700">
                  Votre message a bien été envoyé. Nous vous répondrons
                  rapidement à {CONTACT_EMAIL}.
                </p>
              )}
              {error && (
                <p className="mt-4 text-sm font-medium text-red-600">
                  Une erreur est survenue. Contactez-nous directement à{" "}
                  {CONTACT_EMAIL}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
