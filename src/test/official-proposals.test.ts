import { describe, expect, it } from "vitest";
import { categories, getCategory } from "@/data/proposals";
import { contacts } from "@/data/site";

describe("Integral proposals update", () => {
  it.each([
    ["direx", "DIREX", 14, "União Institucional"],
    ["cultura", "Cultura (DC)", 13, "Proposta 1"],
    ["relacoes-institucionais", "Relações Institucionais e Sociais (DRIS)", 6, "Proposta 1"],
    ["comunicacao", "Comunicação (DCOM)", 10, "Proposta 1"],
    ["extensao-e-pesquisa", "Ensino, Pesquisa e Extensão (DEPE)", 8, "Proposta 1"],
  ])("replaces the list for %s", (slug, name, count, firstTitle) => {
    const c = getCategory(String(slug));
    expect(c?.name).toBe(name);
    expect(c?.proposals).toHaveLength(Number(count));
    expect(c?.proposals[0]?.title).toBe(firstTitle);
    expect(c?.proposals.every((p) => p.summary.length > 0 && !p.summary.startsWith("Inserir texto"))).toBe(true);
  });
  it("incorporates the five treasury proposals into DIREX", () => {
    const direx = getCategory("direx")!;
    expect(direx.proposals.filter((p) => p.title.startsWith("Tesouraria"))).toHaveLength(5);
    expect(getCategory("tesouraria")).toBeUndefined();
  });
  it("keeps the category order", () => {
    expect(categories.map((c) => c.slug)).toEqual(["direx", "extensao-e-pesquisa", "relacoes-institucionais", "comunicacao", "cultura"]);
  });
  it("uses the new WhatsApp number", () => {
    const w = contacts.find((c) => c.label === "WhatsApp");
    expect(w?.handle).toBe("+55 37 9181-5652");
    expect(w?.url).toBe("https://wa.me/553791815652");
  });
});
