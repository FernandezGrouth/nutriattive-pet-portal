
import React from "react";

const MENU = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "produtos", label: "Produtos" },
  { id: "revendedor", label: "Seja Revendedor" },
  { id: "contato", label: "Contato" }
];

// Altere o src quando subir o logo oficial
const LOGO_SRC = "/lovable-uploads/nutriattive-logo.png";

const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 left-0 bg-brandWhite shadow-card">
      <nav className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center space-x-2">
          <img src={LOGO_SRC} alt="Logo NutriAttive" className="h-12 w-auto" style={{minWidth:48}} />
        </a>
        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-brandBlack">
          {MENU.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="transition-colors hover:text-brandOrange story-link"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        {/* WhatsApp */}
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-6 py-2 bg-brandOrange hover:bg-brandGreen hover-scale text-brandWhite font-semibold rounded-full transition-colors"
        >
          Fale Conosco
        </a>
      </nav>
    </header>
  );
};

export default Header;
