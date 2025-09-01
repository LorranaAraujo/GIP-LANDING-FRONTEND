"use client";

import { Container, Title, Text } from "@mantine/core";
import Image from "next/image";

const etapas = [
  {
    titulo: "Ideação e Concepção",
    desc: "Onde as grandes ideias nascem e os projetos são propostos para ajudar a atender às necessidades do Piauí.",
  },
  {
    titulo: "Avaliação Prévia",
    desc: "Avaliação de viabilidade para garantir que apenas os projetos mais promissores avancem para o próximo nível.",
  },
  {
    titulo: "Priorização e Seleção",
    desc: "Os projetos viáveis são hierarquizados com base no impacto estratégico e nos riscos, para então serem selecionados e estruturados.",
  },
  {
    titulo: "Execução do Investimento",
    desc: "Implementação do investimento no projeto aprovado, com registro e acompanhamento dos resultados e aprendizados.",
  },
  {
    titulo: "Avaliação Ex Post",
    desc: "Após a entrega dos resultados e cumprimento dos objetivos, são gerados aprendizados que são incorporados aos investimentos futuros.",
  },
];

export default function Etapas() {
  return (
    <section id="etapas" className="bg-gray-50 py-20">
      <Container size="lg">
        <div className="inline-block mb-2 px-3 py-1 rounded-md bg-[#F5EDE6] text-[#7A5C4A] text-xs font-medium tracking-wide">
          5 Etapas
        </div>


        
        <Title order={2} className="text-3xl font-bold text-left mb-12">
          O Caminho para o <span className="text-primary-600">Investimento de Impacto</span>
        </Title>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
  
        <div className="flex flex-col gap-6 self-stretch">
          <Text className="text-zinc-700 text-lg font-figtree leading-relaxed">
            O modelo GIP organiza o ciclo de vida dos projetos em 5 etapas estratégicas, baseadas nas melhores práticas nacionais e internacionais.
          </Text>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/imagem/imagem.png"
              alt="Imagem GIP"
              fill
              className="object-contain opacity-80"
            />
          </div>
  </div>

  {/* Lado direito: cards menores com bolinhas menores */}
  <div className="relative flex flex-col gap-8 pl-6 self-stretch">
    {/* Linha vertical tracejada */}
    <div className="absolute left-4 top-0 bottom-0 w-[2px] border-l-2 border-yellow-400 border-dashed" />

    {etapas.map((e, i) => (
      <div key={i} className="relative pl-10">
        {/* Bolinha menor */}
        <div className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xs z-10">
          {i + 1}
        </div>

        {/* Card menor */}
        <div className="bg-blue-50 p-4 rounded-md shadow-md hover:shadow-lg transition">
          <Title order={3} className="text-base font-semibold text-primary-600 mb-1">
            {e.titulo}
          </Title>
          <Text className="text-zinc-700 text-sm">{e.desc}</Text>
        </div>
      </div>
    ))}
  </div>
</div>
      </Container>
    </section>
  );
}