"use client";
import { Button, Container, Title, Text } from "@mantine/core";

export default function Hero() {
  return (
    <Container
      size="lg"
      className="pt-16 pb-20 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28"
    >
      {/* wrapper com alinhamento garantido */}
      <div
        className="w-full flex flex-col items-center justify-center"
        style={{ textAlign: "center" }}
      >
        {/* Título */}
        <Title
          order={1}
          className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight max-w-[1100px]"
        >
          Investimento Público que{" "}
          <span className="text-primary-600">Transforma o Piauí</span>
        </Title>

        {/* Subtítulo */}
        <Text
          size="lg"
          className="mt-6 max-w-2xl text-zinc-600 font-figtree text-base md:text-lg leading-relaxed text-center"
        >
          O GIP é a metodologia que garante que cada investimento realizado pelo
          Estado gere desenvolvimento, qualidade de vida e mais oportunidades
          para a população.
        </Text>

        {/* Botões centralizados */}
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <Button
            size="md"
            radius="md"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 font-medium rounded-md"
          >
            Conheça as 5 Etapas
          </Button>

          <Button
            size="md"
            radius="md"
            variant="outline"
            color="primary"
            className="px-6 py-2 font-medium border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-md"
          >
            Baixar Guia Completo
          </Button>
        </div>
      </div>
    </Container>
  );
}
