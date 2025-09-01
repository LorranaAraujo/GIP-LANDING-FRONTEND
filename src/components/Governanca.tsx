"use client";
import { Container, Title, Card, Text } from "@mantine/core";
import { FC } from "react";

type Grupo = {
  titulo: string;
  desc: string;
};

const grupos: Grupo[] = [
  {
    titulo: "Grupo Técnico de Investimento (GTI)",
    desc: "Estuda a viabilidade orçamentária e os impactos dos investimentos propostos.",
  },
  {
    titulo: "Grupo Técnico de Gestão Fiscal (GTF)",
    desc: "Avalia a sustentabilidade financeira e o cumprimento das metas fiscais.",
  },
  {
    titulo: "Órgão de Governança (CGRF)",
    desc: "Delibera e decide, avaliando pareceres técnicos e garantindo alinhamento estratégico.",
  },
];

const Governanca: FC = () => {
  return (
    <section id="governanca">
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white pt-20 pb-20 px-5 sm:px-5 md:px-8 lg:px-16 xl:px-20">
        <Container size="lg">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            {/* Coluna da esquerda */}
            <div className="md:w-1/2 mt-10">
              {/* Cardzinho de Governança */}
              <div className="inline-block mb-3 px-3 py-1 rounded bg-yellow-300/30 text-yellow-500 text-xs font-semibold tracking-wide">
                governança
              </div>

              
              <Title
                order={2}
                className="text-4xl font-bold leading-snug mt-4 mb-4"
                aria-label="Título da seção de governança"
              >
                Decisões Inteligentes, Estrutura Robusta
              </Title>

              
              <Text className="mt-6 text-gray-200 leading-relaxed font-figtree font-light">
                O sucesso da GIP depende de uma governança bem definida, com grupos técnicos e órgãos que garantem decisões estratégicas e sustentáveis.
              </Text>
            </div>

           
            <div className="md:w-1/2 flex flex-col gap-6">
              {grupos.map((g) => (
                <Card
                  key={g.titulo}
                  shadow="md"
                  padding={0}
                  radius="md"
                  className="bg-white/10 text-white border border-white/20 backdrop-blur-md transition-transform hover:scale-[1.02] min-h-[200px] flex flex-col justify-center px-5 py-5 rounded-md mt-2"
                  role="region"
                  aria-label={`Card sobre ${g.titulo}`}
                >
                  <Title order={3} className="text-base font-bold text-white mt-2">
                    {g.titulo}
                  </Title>
                  <Text className="text-white/80 text-sm leading-snug">
                    {g.desc}
                  </Text>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Governanca;