"use client";

import React, { useState } from "react";
import { Button } from "@mantine/core";
import Image from "next/image";
import { IconLock, IconMenu2, IconX } from "@tabler/icons-react";

export default function Header() {
  const [opened, setOpened] = useState(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Etapas", href: "#etapas" },
    { label: "Governança", href: "#governanca" },
    { label: "Classificação", href: "#classificacao" },
  ];

  return (
    <header className="bg-white shadow-sm py-6 px-5 md:px-8 lg:px-16 flex items-center justify-between relative">
     
      <div className="flex flex-col items-start">
        <Image
          src="/imagem/gippi.png"
          alt="Logo GP Piauí"
          width={160}
          height={50}
          className="object-contain"
        />
      </div>

      
      <div className="hidden md:flex items-center gap-6">
        <nav className="flex gap-4 text-zinc-700 font-medium font-figtree text-sm">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-gray transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          variant="outline"
          color="primary"
          radius="sm"
          leftSection={<IconLock size={18} />}
          classNames={{
            root: 'border-[1px] border-primary-600 text-white bg-primary-600 px-3 py-2 h-auto min-h-0 rounded-md flex items-center gap-2',
            label: 'text-left',
          }}
        >
      
          <span className="flex flex-col leading-tight">
          <span className="text-xs font-medium font-figtree">acesso exclusivo</span>
          <span className="text-sm font-semibold font-figtree">Servidor</span>
          </span>
        </Button>
      </div>

      
      <button
        className="md:hidden flex items-center"
        onClick={() => setOpened(!opened)}
      >
        {opened ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </button>

     
      {opened && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-5 gap-4 md:hidden">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-full text-zinc-700 font-medium hover:text-gray transition"
            >
              {item.label}
            </a>
          ))}

          
          <Button
            variant="outline"
            color="primary"
            radius="sm"
            leftSection={<IconLock size={12} />}
            classNames={{
              root: 'w-full border-[1px] border-primary-600 text-white bg-primary-600 px-2.5 py-[5px] h-auto min-h-0 rounded-md',
              label: 'font-figtree text-[15px] font-medium-bold normal-case leading-none tracking-tight',
            }}
          >
            acesso exclusivo Servidor
          </Button>
        </div>
      )}
    </header>
  );
}
