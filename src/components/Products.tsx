
import React from "react";
import { Dog, Package, Cat, DogBowl } from "lucide-react";

const products = [
  {
    icon: <Dog size={36} className="text-brandGreen" />,
    title: "Rações",
    desc: "Nutrição balanceada para cada pet.",
  },
  {
    icon: <Cat size={36} className="text-brandGreen" />,
    title: "Petiscos",
    desc: "Sabor, diversão e saúde em cada mordida.",
  },
  {
    icon: <DogBowl size={36} className="text-brandGreen" />,
    title: "Vitaminas",
    desc: "Força, energia e vitalidade para todos os animais.",
  },
  {
    icon: <Package size={36} className="text-brandGreen" />,
    title: "Acessórios",
    desc: "Produtos para o bem-estar e conforto dos pets.",
  },
];

const Products = () => (
  <section id="produtos" className="container py-20 fade-in-up">
    <div className="text-center mb-10">
      <span className="text-brandOrange font-semibold uppercase tracking-widest">Nossos Produtos</span>
      <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brandGreen mb-4">Cuidando do bem-estar em cada categoria</h2>
      <p className="text-lg text-brandBlack/80">Trabalhamos com uma linha diversificada para oferecer o que há de melhor a cada necessidade.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((prod) => (
        <div
          key={prod.title}
          className="bg-brandWhite rounded-2xl shadow-card flex flex-col items-center px-6 py-8 hover:shadow-lg hover-scale transition-all"
        >
          <div className="mb-4">{prod.icon}</div>
          <h3 className="font-bold text-xl mb-1">{prod.title}</h3>
          <p className="text-sm text-brandBlack/80">{prod.desc}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
      <a
        href="#contato"
        className="bg-brandGreen text-brandWhite px-6 py-3 rounded-full font-semibold hover:bg-brandOrange hover-scale shadow-lg transition-all"
      >
        Solicitar orçamento
      </a>
    </div>
  </section>
);

export default Products;
