import { describe, expect, it } from "vitest";
import { getDepartmentMembers, team } from "@/data/team";
import { getCategory } from "@/data/proposals";

describe("Department membership", () => {
  it("includes all six executive members in the requested order", () => {
    expect(getDepartmentMembers("direx").map((m) => m.name)).toEqual([
      "Júlio César", "Júlia Francinni", "Luísa Gonçalves", "Ana Carolina Delgado", "Beatriz Madureira", "Vitor Mota",
    ]);
  });
  it("removes the separate treasury membership", () => {
    expect(getDepartmentMembers("tesouraria")).toEqual([]);
  });
  it.each([
    ["comunicacao", "Alice Teles", "Membro DCOM"],
    ["extensao-e-pesquisa", "Lucca Cornelissen Castro", "Membro DEPE"],
    ["relacoes-institucionais", "Guilherme Riedel", "Membro DRIS"],
  ])("keeps the additional member for %s out of the homepage", (slug, name, role) => {
    expect(getDepartmentMembers(slug)).toContainEqual(expect.objectContaining({ name, role }));
    expect(team.some((member) => member.name === name)).toBe(false);
    const otherSlugs = ["direx", "tesouraria", "comunicacao", "extensao-e-pesquisa", "relacoes-institucionais", "cultura"].filter((other) => other !== slug);
    expect(otherSlugs.flatMap(getDepartmentMembers).some((member) => member.name === name)).toBe(false);
  });
  it("includes Sara and Miguel Angelo in Cultura and the homepage team", () => {
    expect(getCategory("cultura")?.name).toBe("Cultura (DC)");
    expect(getDepartmentMembers("cultura").map((m) => m.name)).toEqual(["Sara Gonçalves", "Miguel Angelo"]);
    expect(team).toContainEqual(expect.objectContaining({ name: "Miguel Angelo", role: "Diretor Adjunto de Cultura" }));
    expect(team.find((m) => m.name === "Miguel Angelo")?.photo).toContain("miguel-angelo.jpeg");
  });
  it("orders the homepage members by DIREX, DEPE, DRIS, DCOM and DC", () => {
    expect(team.map((m) => m.id)).toEqual(["integrante-1", "integrante-2", "integrante-5", "integrante-6", "integrante-3", "integrante-4", "integrante-9", "integrante-10", "integrante-11", "integrante-12", "integrante-7", "integrante-8", "integrante-13", "miguel-angelo"]);
  });
  it("updates Vitor's identity and photo without changing his role", () => {
    const member = team.find((m) => m.id === "integrante-4");
    expect(member?.name).toBe("Vitor Mota");
    expect(member?.role).toBe("Segundo Tesoureiro");
    expect(member?.photo).toContain("vitor-mota.jpeg");
    expect(member?.bio).toContain("SEPLAG-MG");
  });
});