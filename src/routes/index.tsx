import { createFileRoute } from "@tanstack/react-router";
import { AboutSection, Hero, ProposalsSection, TeamSection } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chapa Abaporu — Juntos por uma universidade mais justa" },
      { name: "description", content: "Conheça a Chapa Abaporu para o CACE: cultura, povo e democracia para transformar a realidade." },
      { property: "og:title", content: "Chapa Abaporu — CACE" },
      { property: "og:description", content: "Cultura, povo e democracia para transformar a realidade." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TeamSection />
      <ProposalsSection />
    </>
  );
}
