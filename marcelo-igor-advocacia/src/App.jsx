import {
  Topo,
  Hero,
  FaixaConfianca,
  WhatsFlutuante,
} from "./components/Layout";
import { ServicosPrevidenciarios, OutrasAreas } from "./components/Servicos";
import {
  ComoFunciona,
  Sobre,
  PerguntasFrequentes,
  CtaFinal,
  Rodape,
} from "./components/Secoes";

export default function App() {
  return (
    <>
      <Topo />
      <Hero />
      <FaixaConfianca />
      <ServicosPrevidenciarios />
      <OutrasAreas />
      <ComoFunciona />
      <Sobre />
      <PerguntasFrequentes />
      <CtaFinal />
      <Rodape />
      <WhatsFlutuante />
    </>
  );
}
