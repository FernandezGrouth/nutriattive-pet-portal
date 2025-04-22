
import React from "react";

const HERO_BG =
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1200&q=80";

const Hero = () => (
  <section
    id="inicio"
    className="relative h-[90vh] min-h-[560px] flex items-center justify-center"
    style={{
      background: `linear-gradient(120deg, rgba(246,246,246,0.96) 50%, rgba(242,124,28,0.10)), url(${HERO_BG}) center/cover`,
    }}
  >
    <div className="container flex flex-col items-center pt-28 pb-12 gap-8 fade-in-up">
      <h1 className="text-brandGreen text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl text-center leading-tight drop-shadow">
        Nutrição e cuidado para todos os pets – com qualidade e agilidade.
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#produtos"
          className="bg-brandGreen text-brandWhite px-6 py-3 rounded-full font-semibold hover:bg-brandOrange hover-scale shadow-lg transition-colors"
        >
          Conheça nossos produtos
        </a>
        <a
          href="#revendedor"
          className="bg-brandOrange text-brandWhite px-6 py-3 rounded-full font-semibold hover:bg-brandGreen hover-scale shadow-lg transition-colors"
        >
          Seja nosso revendedor
        </a>
      </div>
    </div>
    {/* Overlay decorativo */}
    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
  </section>
);

export default Hero;
