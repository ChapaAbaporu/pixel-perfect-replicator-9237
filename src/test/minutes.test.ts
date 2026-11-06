import { describe, expect, it } from "vitest";
import { minutes } from "@/data/minutes";

describe("Official meeting minutes", () => {
  it("orders the six uploaded minutes with their specified dates", () => {
    expect(minutes.map(({ title, date }) => [title, date])).toEqual([
      ["ATA Nº 1", "28/09"], ["ATA Nº 2", "07/10"], ["ATA Nº 3", "14/10"],
      ["ATA Nº 4", "21/10"], ["ATA Nº 5", "28/10"], ["ATA Nº 6", "04/11"],
    ]);
  });
  it.each([1, 2, 3, 4, 5, 6])("links minute %i to its respective PDF", (number) => {
    expect(minutes[number - 1]?.url).toMatch(new RegExp(`/ata-${number}-2026\\.pdf$`));
  });
});