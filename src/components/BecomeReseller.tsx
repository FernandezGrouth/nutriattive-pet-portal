
import React, { useState } from "react";

const BecomeReseller = () => {
  const [form, setForm] = useState({ nome: "", email: "", cidade: "", whatsapp: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    // Aqui pode ser adicionado integração (ex: EmailJS ou backend)
  };

  return (
    <section
      id="revendedor"
      className="relative py-20 fade-in-up"
      style={{
        background: "linear-gradient(120deg, #F6F6F6cc 50%, #375D2A11 100%), url('https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=1200&q=80') center/cover",
      }}
    >
      <div className="container flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
          <span className="text-brandOrange font-semibold uppercase tracking-widest">Seja um Parceiro</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brandGreen mb-3">
            Vamos crescer juntos! <br className="hidden md:inline"/> Seja um parceiro NutriAttive.
          </h2>
          <p className="text-lg text-brandBlack/80">
            Entre para nossa rede de revendedores e fortaleça seu negócio com produtos de alta qualidade e suporte de quem realmente entende do mercado pet.
          </p>
        </div>
        <form
          className="flex flex-col gap-2 bg-brandWhite/90 rounded-2xl shadow-card px-8 py-6 w-full max-w-md fade-in-up"
          onSubmit={handleSubmit}
        >
          <label className="font-medium">Nome</label>
          <input
            required
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="px-4 py-2 rounded border border-brandGreen/40 focus:ring-2 focus:ring-brandOrange outline-none"
            type="text"
            placeholder="Seu nome completo"
          />
          <label className="font-medium">E-mail</label>
          <input
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-2 rounded border border-brandGreen/40 focus:ring-2 focus:ring-brandOrange outline-none"
            type="email"
            placeholder="seuemail@email.com"
          />
          <label className="font-medium">Cidade</label>
          <input
            required
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
            className="px-4 py-2 rounded border border-brandGreen/40 focus:ring-2 focus:ring-brandOrange outline-none"
            type="text"
            placeholder="Sua cidade"
          />
          <label className="font-medium">WhatsApp</label>
          <input
            required
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            className="px-4 py-2 rounded border border-brandGreen/40 focus:ring-2 focus:ring-brandOrange outline-none"
            type="tel"
            placeholder="(99) 99999-9999"
            pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$"
          />
          <button
            type="submit"
            className="mt-3 bg-brandGreen text-brandWhite px-6 py-2 rounded-full font-semibold hover:bg-brandOrange hover-scale transition-colors"
            disabled={sent}
          >
            {sent ? "Enviado! Obrigado :)" : "Enviar"}
          </button>
        </form>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default BecomeReseller;
