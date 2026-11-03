import { describe, expect, it } from "vitest";
import { getDepartmentMembers, team } from "@/data/team";
import { getCategory } from "@/data/proposals";

describe("Department membership", () => {
  it("includes the president, vice-president and both secretaries in DIREX", () => {
    expect(getDepartmentMembers("direx").map((m) => m.name)).toEqual([
      "Júlio César", "Júlia Francinni", "Luísa Gonçalves", "Ana Carolina Delgado",
    ]);
  });
  it("includes both treasurers in Tesouraria", () => {
    expect(getDepartmentMembers("tesouraria").map((m) => m.name)).toEqual(["Beatriz Madureira", "Vitor Rosa"]);
  });
  it.each([
    ["comunicacao", "Alice Teles", "Membro DCOM"],
    ["extensao-e-pesquisa", "Lucca Castro", "Membro DEPE"],
    ["relacoes-institucionais", "Guilherme Riedel", "Membro DRIS"],
  ])("keeps the additional member for %s out of the homepage", (slug, name, role) => {
    expect(getDepartmentMembers(slug)).toContainEqual(expect.objectContaining({ name, role }));
    expect(team.some((member) => member.name === name)).toBe(false);
    const otherSlugs = ["direx", "tesouraria", "comunicacao", "extensao-e-pesquisa", "relacoes-institucionais", "cultura"].filter((other) => other !== slug);
    expect(otherSlugs.flatMap(getDepartmentMembers).some((member) => member.name === name)).toBe(false);
  });
  it("provides Cultura and its confirmed director without inventing an adjunct", () => {
    expect(getCategory("cultura")?.name).toBe("Cultura");
    expect(getDepartmentMembers("cultura").map((m) => m.name)).toEqual(["Sara Gonçalves"]);
  });
});