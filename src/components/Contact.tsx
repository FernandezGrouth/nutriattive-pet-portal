
import React from "react";
import { MapPin, Mail, Instagram, Phone } from "lucide-react";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.569315197225!2d-47.0632392!3d-22.934486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cfbeb70e5abb%3A0xa5cdf540a0c7a77c!2sCampinas%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1713572410447!5m2!1spt-BR!2sbr";

const Contact = () => (
  <section id="contato" className="container py-20 fade-in-up">
    <div className="text-center mb-10">
      <span className="text-brandOrange font-semibold uppercase tracking-widest">Contato</span>
      <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brandGreen mb-4">Fale com a NutriAttive</h2>
      <p className="text-lg text-brandBlack/80">
        Entre em contato, será um prazer atender você!
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <MapPin className="text-brandGreen" />
          <span>Campinas, SP (Endereço completo aqui)</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-brandGreen" />
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" className="hover:text-brandOrange">WhatsApp: (11) 99999-9999</a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="text-brandGreen" />
          <a href="mailto:contato@nutriattive.com.br" className="hover:text-brandOrange">contato@nutriattive.com.br</a>
        </div>
        <div className="flex items-center gap-3">
          <Instagram className="text-brandGreen" />
          <a href="https://instagram.com/nutriattive" target="_blank" rel="noopener" className="hover:text-brandOrange">
            @nutriattive
          </a>
        </div>
      </div>
      <iframe
        src={MAP_EMBED}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização NutriAttive"
        className="rounded-lg shadow-card border border-brandGreen min-h-[220px] w-full"
      ></iframe>
    </div>
  </section>
);

export default Contact;
