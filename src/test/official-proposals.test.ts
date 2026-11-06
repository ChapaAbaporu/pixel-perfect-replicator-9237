import { describe, expect, it } from "vitest";
import { getCategory } from "@/data/proposals";

describe("Proposals supplied from meeting 06/2026", () => {
  it.each([
    ["tesouraria", "Tesouraria", 5, "Clube CACE"],
    ["cultura", "Cultura (DC)", 13, "Calendário Cultural Semestral"],
    ["relacoes-institucionais", "Relações Institucionais (DRIS)", 7, "Ciências do Estado para Além da UFMG"],
    ["comunicacao", "Comunicação (DCOM)", 10, "Divulgação de Ciências do Estado"],
    ["extensao-e-pesquisa", "Pesquisa e Extensão (DEPE)", 8, "Formação Acadêmica Complementar"],
  ])("includes the full supplied list for %s", (slug, name, count, firstTitle) => {
    const category = getCategory(String(slug));
    expect(category?.name).toBe(name);
    expect(category?.proposals).toHaveLength(Number(count));
    expect(category?.proposals[0]?.title).toBe(firstTitle);
    expect(category?.proposals.every((proposal) => proposal.summary.length > 0 && !proposal.summary.startsWith("Inserir texto"))).toBe(true);
  });
  it("preserves the existing DIREX content", () => {
    expect(getCategory("direx")?.proposals[0]?.summary).toBe("Inserir texto 174");
  });
});