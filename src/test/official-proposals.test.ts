import { describe, expect, it } from "vitest";
import { categories, getCategory } from "@/data/proposals";
import { contacts } from "@/data/site";

describe("Integral proposals update", () => {
  it.each([
    ["presidencia", "Presidência", 9, "União Institucional"],
    ["secretaria", "Secretaria", 7, "Arquivo e Documentação"],
    ["tesouraria", "Tesouraria", 5, "Clube CACE"],
    ["cultura", "Cultura (DC)", 13, "Planejamento Cultural"],
    ["relacoes-institucionais", "Relações Institucionais e Sociais (DRIS)", 8, "Relações com a Sociedade Civil"],
    ["comunicacao", "Comunicação (DCOM)", 9, "Divulgação do Curso"],
    ["extensao-e-pesquisa", "Ensino, Pesquisa e Extensão (DEPE)", 7, "Formação Acadêmica Complementar"],
  ])("replaces the list for %s", (slug, name, count, firstTitle) => {
    const c = getCategory(String(slug));
    expect(c?.name).toBe(name);
    expect(c?.proposals).toHaveLength(Number(count));
    expect(c?.proposals[0]?.title).toBe(firstTitle);
    expect(c?.proposals.every((p) => p.summary.length > 0 && !p.summary.startsWith("Inserir texto"))).toBe(true);
  });
  it("no longer has a DIREX category", () => {
    expect(getCategory("direx")).toBeUndefined();
  });
  it("keeps the category order", () => {
    expect(categories.map((c) => c.slug)).toEqual(["presidencia", "secretaria", "tesouraria", "extensao-e-pesquisa", "relacoes-institucionais", "comunicacao", "cultura"]);
  });
  it("uses the new WhatsApp number", () => {
    const w = contacts.find((c) => c.label === "WhatsApp");
    expect(w?.handle).toBe("+55 37 9181-5652");
    expect(w?.url).toBe("https://wa.me/553791815652");
  });
});
