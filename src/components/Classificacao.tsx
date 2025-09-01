import { Title, Text } from "@mantine/core";

export default function Classificacao() {
  return (
    <section className="bg-primary-50 py-20 px-5 md:px-16" id="classificacao">
      <div className="max-w-5xl mx-auto text-center">
        {/* Label */}
        <div className="inline-block bg-yellow-100 text-yellow-500 text-sm font-medium px-3 py-1 rounded mb-4">
          classificação
        </div>

        {/* Heading */}
        <Title
          order={2}
          className="text-3xl md:text-4xl font-bold text-emphasis mb-4"
        >
          Nem todo projeto é igual
        </Title>

        {/* Subheading */}
        <Text className="text-default text-lg max-w-2xl mx-auto">
          A GIP adapta a profundidade da análise conforme a natureza e o impacto
          de cada projeto.
        </Text>
      </div>

      {/* Grid de cima (3 colunas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {/* Estratégicos */}
        <div className="bg-yellow-50 p-6 rounded-2xl shadow-sm text-left">
          <Text className="font-bold text-emphasis mb-2">Estratégicos</Text>
          <Text className="text-default">
            Projetos de caráter transformador, com alta contribuição para o
            desenvolvimento do Estado. Exigem uma avaliação prévia mais completa
            e extensa.
          </Text>
        </div>

        {/* Complementares */}
        <div className="bg-primary-600 text-white p-6 rounded-2xl shadow-sm text-left">
          <Text className="font-bold mb-2">Complementares</Text>
          <Text>
            Empreendimentos de natureza tático-operacional e impacto localizado.
            A análise de viabilidade é simplificada, dependendo do volume de
            investimento.
          </Text>
        </div>

        {/* Parcerias e Concessões */}
        <div className="bg-white p-6 rounded-2xl shadow-sm text-left">
          <Text className="font-bold text-emphasis mb-2">
            Parcerias e Concessões
          </Text>
          <Text className="text-default">
            Projetos que envolvem a iniciativa privada e seguem um fluxo
            normativo específico, já previsto em legislação própria.
          </Text>
        </div>
      </div>

      {/* Grid de baixo (2 colunas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Emergenciais */}
        <div className="bg-yellow-300 p-6 rounded-2xl shadow-sm text-left">
          <Text className="font-bold text-emphasis mb-2">Emergenciais</Text>
          <Text className="text-emphasis">
            Projetos urgentes devido a situações como calamidades públicas.
            Demandam celeridade e seguem um rito sumário, sem passar por todas
            as etapas da GIP.
          </Text>
        </div>

        {/* Pactos e Convênios */}
        <div className="bg-yellow-300 p-6 rounded-2xl shadow-sm text-left font-figtree">
          <Text className="font-bold text-emphasis mb-2">
            Pactos e Convênios
          </Text>
          <Text className="text-emphasis">
            Projetos firmados por meio de instrumentos jurídicos de cooperação.
            Demandam acompanhamento específico e seguem regras de convênio ou
            acordo de cooperação.
          </Text>
        </div>
      </div>
    </section>
  );
}
