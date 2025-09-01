"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // ícone de setinha

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary-600 text-white w-full flex items-center h-20 relative">
      <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16">
        
       
        <div className="flex items-center gap-3">
          <a
            href="https://www.seplan.pi.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 border border-primary-600 bg-white text-primary-600 text-sm font-medium rounded-md transition hover:bg-primary-600 hover:text-white"
          >
            Site da Seplan
            <ChevronDown
              size={18}
              onClick={(e) => {
                e.preventDefault(); {/*nao abrir o link quando abrir a setinha*/}
                setOpen(!open);
              }}
              className={`md:hidden transition-transform duration-200 cursor-pointer ${
                open ? "rotate-180" : ""
              }`}
            />
          </a>


          <nav className="hidden md:flex gap-6 items-center">
            {[
              { name: "Diálogos", href: "https://dialogos.seplan.pi.gov.br" },
              { name: "OPA", href: "https://opa.seplan.pi.gov.br" },
              { name: "dadosPI", href: "https://dados.seplan.pi.gov.br" },
              { name: "Pactos pelo Piauí", href: "https://pactospelopiaui.seplan.pi.gov.br/" },
              { name: "Retribuir", href: "/retribuir" },
              { name: "PSI", href: "/psi" },
              { name: "Pilares", href: "/pilares" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-200 font-medium text-sm font-figtree transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* logo na direita */}
        <div className="flex items-center">
          <Image
            src="/imagem/seplan.svg"
            alt="Logo Direita"
            width={160}
            height={160}
          />
        </div>
      </div>

      {/* Menu Mobile Dropdown (abre ao clicar na setinha) */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-primary-600 md:hidden z-50">
          <nav className="flex flex-col items-start p-4 space-y-3">
            {[
              { name: "Diálogos", href: "https://dialogos.seplan.pi.gov.br" },
              { name: "OPA", href: "https://opa.seplan.pi.gov.br" },
              { name: "dadosPI", href: "https://dados.seplan.pi.gov.br" },
              { name: "Pactos pelo Piauí", href: "https://pactospelopiaui.seplan.pi.gov.br/" },
              { name: "Retribuir", href: "/retribuir" },
              { name: "PSI", href: "/psi" },
              { name: "Pilares", href: "/pilares" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 font-medium text-sm font-figtree transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
