
import React from "react";

const LOGO_SRC = "/lovable-uploads/nutriattive-logo.png";

const Footer = () => (
  <footer className="w-full bg-brandWhite border-t border-brandGray/50 py-6 mt-8 fade-in-up">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={LOGO_SRC} alt="Logo NutriAttive reduzida" className="h-8 w-auto" />
        <span className="font-semibold text-brandGreen text-lg">NutriAttive</span>
      </div>
      <nav>
        <ul className="flex gap-6 text-brandBlack">
          <li><a href="#inicio" className="hover:text-brandOrange">Início</a></li>
          <li><a href="#sobre" className="hover:text-brandOrange">Sobre</a></li>
          <li><a href="#produtos" className="hover:text-brandOrange">Produtos</a></li>
          <li><a href="#revendedor" className="hover:text-brandOrange">Revendedor</a></li>
          <li><a href="#contato" className="hover:text-brandOrange">Contato</a></li>
        </ul>
      </nav>
      <div className="flex gap-3">
        <a href="https://wa.me/5511999999999" target="_blank" title="WhatsApp" className="hover:text-brandGreen">
          <svg width="20" height="20" fill="currentColor" className="text-brandGreen" viewBox="0 0 448 512"><path d="M380.9 97.1C339 -7.6 225.9-31.9 141.8 17.2 78.5 53.4 40.5 123.1 48.6 195.5c7.2 61.3 47.2 114.2 101 140.4l-33.4 87.8c-2.8 7.4 2.2 15.3 9.6 15.3 1.5 0 3-.3 4.5-.9l92.8-37c71.7 8.6 142.6-31.7 165.8-97.9 29-81.3-15.1-170.3-63-206.1zm-25.8 220.6c-21.8 61.2-86.2 93.6-147.5 71.8-18.4-6.6-36.2-18-50.1-33.3s-23.4-34.9-25.4-56.5c-1.9-20.8.9-40.9 8.4-59.5 17.5-41.7 60.6-67.5 105.7-67.5 15.5 0 31 .7 46.2 2.1 12.2 1.1 23 8.2 27.7 19.6 5 11.7 4.2 24.7-2.1 34.9-3.1 5.3-7.7 9.3-13.2 11.4-46.2 17.2-46.2 17.2-69.3 13.1-7.7-1.4-14.6-6.4-18-13.6-4.1-8.5-2.6-18.7 3.7-25.6 10.4-11.3 21.7-21.4 33.7-30.2 6-4.2 14.5-5.6 21.1-2.4 6.1 2.9 10.3 9.1 10.8 16.3.6 8.1-2.8 15.9-9.2 20.4-8 5.7-13.2 16.2-7.9 23.5 3.6 4.8 12.3 2.1 15.7-.9 4.1-3.6 8.9-5.4 13.1-4.7s7.4 4.5 7.4 8.7c0 16.2-20.8 24.3-37.7 29.1-16.2 4.7-29.2 18.6-34.3 34.8-2.9 8.7-1.6 17.6 3.5 24.2 7.5 10.1 20 12.4 29.3 8.1 11.3-5.4 21.9-13.3 31.7-23.5 5.9-6.1 14.7-7.7 21.4-3.6 6.2 3.7 8.2 12.7 7.7 20.4-.6 10.2 7.3 18.9 18.2 18.9h.3c7.2 0 14-3.6 18.2-9.9 6.5-9.7 7.6-24.1 2.7-34.3zm24-96.2c-4.3-2.5-16.7-7.7-30.6-10.2-10-1.9-24.7-2.8-37.5 1.6-13.6 4.7-26.9 19.3-34.1 32.8-7.9 14.7-11.1 31.3-12.2 40.8-1.1 9.8-.8 20.5 2.2 29.6 2.8 8.3 8.6 14.7 16.1 17.4 15.2 5.7 37.7-4.4 49.8-16.2 9-8.9 18.8-20 24.6-30.3 5.5-9.7 5.7-23.7.5-33z"/></svg>
        </a>
        <a href="https://instagram.com/nutriattive" target="_blank" title="Instagram" className="hover:text-[#F2791C]">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512"><path d="M224 141c-45.9 0-83 37.1-83 83s37.1 83 83 83 83-37.1 83-83-37.1-83-83-83zm0 136a53 53 0 1 1 0-106 53 53 0 0 1 0 106zm146.4-126.1c0 14.7-12 26.7-26.7 26.7-14.7 0-26.7-12-26.7-26.7s12-26.7 26.7-26.7c14.8.1 26.7 12 26.7 26.7zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-93-26.2-26.2-57.6-34.4-93-36.2C333.2 32 294.2 32 224 32s-109.2 0-149.4 4c-35.3 1.7-66.7 9.9-93 36.2-26.2 26.2-34.4 57.6-36.2 93C1.7 178.8 1.7 217.8 1.7 288s0 109.2 4 149.4c1.7 35.3 9.9 66.7 36.2 93 26.2 26.2 57.6 34.4 93 36.2C114.8 480 153.8 480 224 480s109.2 0 149.4-4c35.3-1.7 66.7-9.9 93-36.2 26.2-26.2 34.4-57.6 36.2-93 4-40.2 4-79.2 4-149.4s0-109.2-4-149.4zm-48.2 186.2c-7.8 19.7-22.8 34.8-42.5 42.5-29.2 11.7-98.3 9-131.4 9s-102.2 2.7-131.4-9c-19.7-7.8-34.8-22.8-42.5-42.5-11.7-29.2-9-98.3-9-131.4s-2.7-102.2 9-131.4c7.8-19.7 22.8-34.8 42.5-42.5C121.8 33.6 190.8 36.3 224 36.3s102.2-2.7 131.4 9c19.7 7.8 34.8 22.8 42.5 42.5 11.7 29.2 9 98.3 9 131.4s2.7 102.2-9 131.4z"/></svg>
        </a>
      </div>
      <div className="mt-2 text-sm text-brandBlack/70 text-center md:text-right w-full md:w-auto">
        © {new Date().getFullYear()} NutriAttive Distribuidora. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
