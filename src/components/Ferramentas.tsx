import { Title, Text, Button } from "@mantine/core";
import { Download } from "lucide-react";

export default function Ferramentas() {
  return (
    <section className="bg-white py-20 px-5 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Card principal */}
        <div className="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 text-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Conteúdo esquerdo */}
          <div className="max-w-xl">
            <div className="inline-block bg-yellow-100/30 text-yellow-300 text-sm font-medium px-3 py-1 rounded mb-4">
              ferramentas e recursos
            </div>

            <Title
              order={2}
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            >
              Pronto para Começar?
            </Title>

            <Text className="text-white/90 text-lg">
              Acesse os recursos, aprofunde seu conhecimento e comece a aplicar
              a metodologia GIP hoje mesmo.
            </Text>
          </div>

          {/* Card à direita */}
          <div className="bg-primary-600/90 border border-white/10 rounded-xl p-6 shadow-lg max-w-sm w-full">
            <Text className="font-bold mb-2 text-white">Manual Técnico</Text>
            <Text className="text-white/80 mb-6 text-sm leading-relaxed">
              Aprofunde-se em cada detalhe, critério e cálculo da metodologia.
              <br />
              O guia completo para especialistas.
            </Text>

            <Button
              fullWidth
              size="md"
              radius="md"
              className="bg-yellow-400 hover:bg-yellow-500 text-emphasis font-semibold py-4 px-6 text-base rounded-md"
              leftSection={<Download className="w-5 h-5" />}
            >
              Baixar Manual Técnico
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
