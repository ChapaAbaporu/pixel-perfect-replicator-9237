import { createFileRoute } from "@tanstack/react-router";
import { PageHero, TeamSection } from "@/components/site/Sections";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Nossa Equipe — Chapa Abaporu" },
      { name: "description", content: "Conheça os integrantes da Chapa Abaporu e seus cargos na gestão do CACE." },
      { property: "og:title", content: "Nossa Equipe — Chapa Abaporu" },
      { property: "og:description", content: "Conheça os integrantes da Chapa Abaporu." },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Nossa equipe" text="Clique em um cartão para conhecer cada integrante." tone="green" />
      <TeamSection withHeading={false} />
    </>
  ),
});
