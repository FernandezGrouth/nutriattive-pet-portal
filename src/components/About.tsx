
import React from "react";
import { Dog, Cat, PawPrint, Bird } from "lucide-react";

const icons = [
  { Icon: Dog, label: "Cães" },
  { Icon: Cat, label: "Gatos" },
  { Icon: PawPrint, label: "Cavalos" },
  { Icon: Bird, label: "Aves" },
];

const About = () => (
  <section id="sobre" className="container py-20 fade-in-up">
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-brandOrange font-semibold uppercase tracking-widest">Sobre nós</span>
      <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brandGreen mb-4">Nutrição, amor e experiência para todos os pets</h2>
      <p className="text-lg text-brandBlack/80 mb-8">
        Há mais de uma década, a <b>NutriAttive Distribuidora</b> oferece soluções inovadoras, produtos de qualidade e atendimento humanizado
        para o mercado pet. Nosso compromisso é unir confiança, agilidade e carinho no cuidado com <b>cães, gatos, cavalos e aves</b>.
      </p>
      <div className="flex justify-center gap-4 sm:gap-8 mb-6">
        {icons.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center">
            <Icon size={40} className="text-brandGreen mb-1" aria-label={label} />
            <span className="text-sm text-brandBlack/80">{label}</span>
          </div>
        ))}
      </div>
      <div className="inline-block bg-brandGreen text-brandWhite rounded-full px-5 py-2 font-bold shadow hover-scale text-base mt-2">
        +10 anos no mercado pet
      </div>
    </div>
  </section>
);

export default About;
