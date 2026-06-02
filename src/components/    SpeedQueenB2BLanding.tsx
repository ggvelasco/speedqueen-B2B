"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "351900000000";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sectionViewport = { once: true, amount: 0.24 };

const painPoints = [
  {
    label: "Faturas com NIF",
    title: "Faturação sem fricção",
    description:
      "Receba faturas organizadas para a contabilidade da sua empresa, sem recibos soltos nem acertos manuais no fim do mês.",
  },
  {
    label: "Máquinas industriais",
    title: "A equipa fica em campo",
    description:
      "Panos, fardas e enxovais deixam de ocupar tempo operacional. A sua equipa limpa mais casas enquanto a lavandaria trabalha.",
  },
  {
    label: "Higiene controlada",
    title: "Resultado consistente",
    description:
      "Ciclos profissionais, dosagem automática de detergentes e lavagem separada para manter o padrão de higiene dos seus clientes.",
  },
];

const volumes = [
  "Até 50 kg / mês",
  "50 kg a 150 kg / mês",
  "Mais de 150 kg / mês",
  "Ainda não sei",
];

function buildWhatsAppHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function HeroVideo() {
  return (
    <video
      aria-label="Interior da Speed Queen Gambelas com máquinas de lavandaria em funcionamento"
      autoPlay
      className="absolute inset-0 h-full w-full object-cover object-center"
      loop
      muted
      playsInline
      preload="metadata"
    >
      <source src="/teaser.mp4" type="video/mp4" />
      <source src="/teaser.mov" type="video/quicktime" />
    </video>
  );
}

export default function SpeedQueenB2BLanding() {
  const baseMessage =
    "Olá! Quero solicitar um orçamento B2B para lavagem de fardas, panos e enxovais na Speed Queen Gambelas.";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name") || "";
    const company = form.get("company") || "";
    const volume = form.get("volume") || "";
    const phone = form.get("phone") || "";

    const message = [
      baseMessage,
      "",
      `Nome: ${name}`,
      `Empresa: ${company}`,
      `Volume estimado: ${volume}`,
      `Telefone: ${phone}`,
    ].join("\n");

    window.open(buildWhatsAppHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#f6f8fb] pb-20 font-sans text-[#14213d]">
      <section className="relative isolate overflow-hidden bg-[#082f5f] text-white">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-[#082f5f]/70 via-[#082f5f]/38 to-[#082f5f]/82 md:bg-gradient-to-r md:from-[#082f5f]/88 md:via-[#082f5f]/48 md:to-[#082f5f]/16" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#082f5f] to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-5 md:px-8 md:pb-16">
          <motion.header
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-4"
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <a className="flex items-center gap-3" href="#top">
              <img alt="Speed Queen" className="h-9 w-auto" src="/logo.png" />
              <span className="leading-tight">
                <span className="block text-sm font-black uppercase tracking-wide text-white">
                  Gambelas
                </span>
                <span className="block text-xs font-semibold text-white/70">
                  Lavandaria B2B
                </span>
              </span>
            </a>

            <motion.a
              className="rounded-md border border-white/20 px-3 py-2 text-sm font-bold text-white"
              href={buildWhatsAppHref(baseMessage)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              WhatsApp
            </motion.a>
          </motion.header>

          <div
            className="grid gap-10 pt-12 md:grid-cols-[1.02fr_0.98fr] md:items-center md:pt-16"
            id="top"
          >
            <motion.div
              animate="visible"
              className="rounded-lg bg-[#082f5f]/34 p-4 backdrop-blur-[2px] md:bg-transparent md:p-0 md:backdrop-blur-0"
              initial="hidden"
              variants={staggerGroup}
            >
              <motion.p
                className="mb-4 inline-flex rounded-md bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f3c400]"
                variants={fadeUp}
              >
                Lavandaria industrial para empresas de limpeza
              </motion.p>
              <motion.h1
                className="max-w-3xl text-4xl font-black leading-[1.02] tracking-normal md:text-6xl"
                variants={fadeUp}
              >
                Otimize o tempo da sua equipa de limpeza e reduza custos
                operacionais.
              </motion.h1>
              <motion.p
                className="mt-5 max-w-2xl text-lg leading-8 text-blue-50/85"
                variants={fadeUp}
              >
                Terceirize a lavagem de fardas, panos e enxovais com a Speed
                Queen Gambelas. Pacotes corporativos com faturação simplificada
                e capacidade para rotinas de grande volume.
              </motion.p>

              <motion.div className="mt-7 grid gap-3 sm:flex" variants={fadeUp}>
                <motion.a
                  className="inline-flex items-center justify-center rounded-md bg-[#25d366] px-5 py-4 text-base font-black text-white shadow-lg shadow-slate-950/20"
                  href={buildWhatsAppHref(baseMessage)}
                  whileHover={{ scale: 1.025, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Falar com um consultor
                </motion.a>
                <motion.a
                  className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-4 text-base font-bold text-white"
                  href="#orcamento"
                  whileHover={{ scale: 1.025, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Pedir orçamento
                </motion.a>
              </motion.div>

              <motion.dl
                className="mt-8 grid grid-cols-3 gap-2 text-center"
                variants={fadeUp}
              >
                {["Faturas com NIF", "Pacotes mensais", "Pet Corner"].map(
                  (item) => (
                    <motion.div
                      className="rounded-md border border-white/15 bg-white/10 px-2 py-3"
                      key={item}
                      whileHover={{ y: -3 }}
                    >
                      <dt className="text-xs font-bold leading-4 text-white/80">
                        {item}
                      </dt>
                    </motion.div>
                  ),
                )}
              </motion.dl>
            </motion.div>

            <motion.aside
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg border border-white/20 bg-white/12 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-md"
              initial={{ opacity: 0, x: 22 }}
              transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f3c400]">
                Operação real em Gambelas
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Máquinas industriais para grandes volumes",
                  "Lavagem de fardas, panos e enxovais",
                  "Pet Corner para itens de casas com animais",
                ].map((item) => (
                  <motion.div
                    className="rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold leading-5 text-white"
                    key={item}
                    whileHover={{ x: 4 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <motion.section
        className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16"
        initial="hidden"
        variants={staggerGroup}
        viewport={sectionViewport}
        whileInView="visible"
      >
        <motion.div className="max-w-2xl" variants={fadeUp}>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
            Gargalo operacional
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
            Lavar panos, fardas e enxovais não deve travar a agenda da sua
            empresa.
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {painPoints.map((item) => (
            <motion.article
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -5 }}
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-700">
                {item.label}
              </p>
              <h3 className="mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-white"
        initial="hidden"
        variants={staggerGroup}
        viewport={sectionViewport}
        whileInView="visible"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[0.85fr_1.15fr] md:items-center md:px-8 md:py-16">
          <motion.div
            className="rounded-lg border border-emerald-200 bg-emerald-50 p-5"
            variants={fadeUp}
            whileHover={{ y: -4 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
              Pet Corner
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight">
              Atende clientes com animais?
            </h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-lg leading-8 text-slate-700">
              Utilize o nosso Pet Corner para lavar mantas, resguardos, capas e
              outros itens da casa dos seus clientes de forma separada. Uma
              camada extra de higiene para empresas que querem entregar um
              serviço mais rigoroso.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16"
        initial="hidden"
        variants={fadeUp}
        viewport={sectionViewport}
        whileInView="visible"
      >
        <div className="rounded-lg bg-[#14213d] p-5 text-white md:grid md:grid-cols-[1fr_1fr] md:gap-8 md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f3c400]">
              A nossa proposta B2B
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Pacotes pré-pagos personalizados com desconto de volume.
            </h2>
          </div>

          <div className="mt-6 grid gap-3 md:mt-0">
            {[
              "Estimativa mensal por kg ou por tipo de item",
              "Condições para rotinas semanais ou quinzenais",
              "Faturação simplificada para empresas",
              "Apoio por WhatsApp para ajustar o pacote",
            ].map((item) => (
              <motion.div
                className="rounded-md border border-white/15 bg-white/10 px-4 py-3 font-semibold text-white/90"
                key={item}
                whileHover={{ x: 4 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-6xl px-5 pb-14 md:px-8 md:pb-20"
        id="orcamento"
        initial="hidden"
        variants={fadeUp}
        viewport={sectionViewport}
        whileInView="visible"
      >
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-700">
              Orçamento rápido
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight">
              Solicite um orçamento sob medida para a sua frota de limpeza.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Preencha os dados principais e abrimos a conversa no WhatsApp com
              tudo organizado para acelerar a proposta.
            </p>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Nome
              <input
                className="rounded-md border border-slate-300 px-4 py-3 text-base outline-none focus:border-[#082f5f] focus:ring-2 focus:ring-blue-100"
                name="name"
                placeholder="O seu nome"
                required
                type="text"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Empresa
              <input
                className="rounded-md border border-slate-300 px-4 py-3 text-base outline-none focus:border-[#082f5f] focus:ring-2 focus:ring-blue-100"
                name="company"
                placeholder="Nome da empresa"
                required
                type="text"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Volume estimado
              <select
                className="rounded-md border border-slate-300 px-4 py-3 text-base outline-none focus:border-[#082f5f] focus:ring-2 focus:ring-blue-100"
                defaultValue=""
                name="volume"
                required
              >
                <option disabled value="">
                  Selecione uma opção
                </option>
                {volumes.map((volume) => (
                  <option key={volume}>{volume}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Telefone
              <input
                className="rounded-md border border-slate-300 px-4 py-3 text-base outline-none focus:border-[#082f5f] focus:ring-2 focus:ring-blue-100"
                name="phone"
                placeholder="+351 ..."
                required
                type="tel"
              />
            </label>

            <motion.button
              className="rounded-md bg-red-700 px-5 py-4 text-base font-black text-white shadow-sm transition hover:bg-red-800"
              type="submit"
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Solicitar orçamento no WhatsApp
            </motion.button>
          </form>
        </div>
      </motion.section>

      <footer className="border-t border-slate-200 bg-[#082f5f] px-5 py-10 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <a className="inline-flex items-center gap-3" href="#top">
              <span className="rounded-md bg-white px-3 py-2">
                <img alt="Speed Queen" className="h-8 w-auto" src="/logo.png" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-black uppercase tracking-wide">
                  Gambelas
                </span>
                <span className="block text-xs font-semibold text-white/65">
                  Faro, Portugal
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
              Lavandaria B2B para empresas de limpeza que precisam de lavar
              fardas, panos e enxovais com capacidade industrial, faturação
              simplificada e apoio direto por WhatsApp.
            </p>

            <motion.a
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#25d366] px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20"
              href={buildWhatsAppHref(baseMessage)}
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Falar com um consultor
            </motion.a>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="grid gap-3 text-sm font-bold text-white/78 md:justify-items-end"
          >
            {[
              ["Solução B2B", "#top"],
              ["Pet Corner", "#top"],
              ["Orçamento", "#orcamento"],
              ["WhatsApp", buildWhatsAppHref(baseMessage)],
            ].map(([label, href]) => (
              <a
                className="transition hover:text-[#f3c400]"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-white/12 pt-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <span>Speed Queen Gambelas</span>
          <span>Pacotes corporativos para rotinas mensais e por volume.</span>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <motion.a
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto flex max-w-md items-center justify-center rounded-md bg-[#25d366] px-5 py-3 text-sm font-black text-white shadow-lg"
          href={buildWhatsAppHref(baseMessage)}
          initial={{ opacity: 0, y: 18 }}
          transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
          whileTap={{ scale: 0.97 }}
        >
          Falar com um consultor
        </motion.a>
      </div>
    </main>
  );
}
