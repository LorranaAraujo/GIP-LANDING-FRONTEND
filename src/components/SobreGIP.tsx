"use client";

import { Container, Title, Text } from "@mantine/core";
import Image from "next/image";

export default function SobreGIP() {
  return (
    <section id="sobre" className="bg-white py-20">

      <div className="flex h-2 w-full">
        <div className="flex-1 bg-red-500" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-green-500" />
      </div>

      <Container size="lg" className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div className="relative w-full h-[250px] md:h-[300px]">
            <Image
              src="/imagem/imagem.png" 
              alt="Imagem"
              fill
              className="object-contain opacity-70"
            />
          </div>

          
          <div>
            <Text className="uppercase bg-[#F5EDE6] text-[#7A5C4A] text-xs font-medium tracking-wide mb-4 inline-block px-3 py-1 rounded-md">
              sobre
            </Text>
            <Title order={2} className="section-heading mb-4">
              O que é o GIP?
            </Title>
            <Text className="text-zinc-700 text-base font-figtree leading-relaxed">
              A Gestão do Investimento Público (GIP) é um modelo inovador adotado pelo Governo do Piauí para aumentar a eficiência, a transparência e a efetividade dos investimentos estaduais.
              <br /><br />
              Com base nas melhores práticas nacionais e internacionais, o GIP organiza os projetos em um ciclo de 6 etapas, assegurando que os recursos públicos sejam aplicados de forma estratégica e sustentável.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
}