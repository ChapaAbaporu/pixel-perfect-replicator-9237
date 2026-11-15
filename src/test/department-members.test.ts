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
  it("removes Sara and assigns the new directors", () => {
    const all = ["direx", "comunicacao", "extensao-e-pesquisa", "relacoes-institucionais", "cultura"].flatMap(getDepartmentMembers);
    expect([...team, ...all].some((m) => m.name.includes("Sara"))).toBe(false);
    expect(getDepartmentMembers("cultura").map((m) => [m.name, m.role])).toEqual([["Jéssica Gonçalves", "Diretora de Cultura"], ["Miguel Angelo", "Diretor Adjunto de Cultura"]]);
    expect(getDepartmentMembers("comunicacao").slice(0, 2).map((m) => [m.name, m.role])).toEqual([["Rafael Borges", "Diretor de Comunicação"], ["Geovana Silva", "Diretora adjunta de Comunicação"]]);
    expect(team.find((m) => m.name === "Zoe Ribas")?.role).toBe("Diretora de Relações Institucionais e Sociais");
    expect(team.find((m) => m.name === "Ana Clara Carvalho")?.role).toBe("Diretora de Ensino, Pesquisa e Extensão");
  });
  it("leaves bios empty instead of placeholder text", () => {
    expect(team.some((m) => m.bio.startsWith("Inserir texto"))).toBe(false);
  });
  it("updates Vitor's identity and photo without changing his role", () => {
    const member = team.find((m) => m.id === "integrante-4");
    expect(member?.name).toBe("Vitor Mota");
    expect(member?.role).toBe("Segundo Tesoureiro");
    expect(member?.photo).toContain("vitor-mota.jpeg");
    expect(member?.bio).toContain("SEPLAG-MG");
  });
});