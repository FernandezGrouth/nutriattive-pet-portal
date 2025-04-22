
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import BecomeReseller from "@/components/BecomeReseller";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="font-poppins">
    <Header />
    <main className="pt-20">
      <Hero />
      <About />
      <Products />
      <BecomeReseller />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
