import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Etapas from "../components/Etapas";
import Header from "../components/Header";
import SobreGIP from "../components/SobreGIP";
import Governanca from "../components/Governanca";
import Classificacao from "../components/Classificacao";
import Ferramentas from "../components/Ferramentas";
import Rodape from "../components/Rodape";
export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <SobreGIP />
      <Etapas />
      <Governanca />
      <Classificacao />
      <Ferramentas />
      <Rodape />
    </>
  );
}
