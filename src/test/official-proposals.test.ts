import { describe, expect, it } from "vitest";
import { categories, getCategory } from "@/data/proposals";

describe("Proposals supplied from meeting 06/2026", () => {
  it.each([
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
  it("integrates all five treasury proposals and responsibilities into DIREX", () => {
    const direx = getCategory("direx");
    expect(direx?.proposals).toHaveLength(6);
    expect(direx?.proposals.slice(1).map((p) => p.title)).toEqual(["Clube CACE", "Fortalecimento do Butecace", "Diversificação dos Produtos do CACE", "Sebos e Bazares Permanentes", "Transparência e Organização Financeira"]);
    expect(direx?.intro).toContain("Responsável pela administração financeira do CACE");
    expect(direx?.spaceText).toContain("Inserir texto 43");
    expect(getCategory("tesouraria")).toBeUndefined();
  });
  it("presents DIREX followed by DEPE, DRIS, DCOM and DC", () => {
    expect(categories.map((c) => c.slug)).toEqual(["direx", "extensao-e-pesquisa", "relacoes-institucionais", "comunicacao", "cultura"]);
  });
});