import { Mail, Phone, Youtube } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Rodape() {
  return (
    <footer className="bg-emphasis py-6 px-5 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-white">
          <img
            src="/imagem/seplan.svg"
            alt="Secretaria do Planejamento - SEPLAN"
            className="h-15 mb-2"

          />
    
        </div>

        <div className="flex gap-6 text-white">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-primary-400 transition"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="mailto:contato@piaui.gov.br"
            aria-label="E-mail"
            className="hover:text-primary-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-primary-400 transition"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="tel:+55XXXXXXXXX"
            aria-label="Telefone"
            className="hover:text-primary-400 transition"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
