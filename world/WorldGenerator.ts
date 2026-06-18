export class WorldGenerator {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  generateChunk(x: number, z: number) {
    return {
      x,
      z,
      biome: "Forest",
      resources: ["Wood", "Stone", "Iron"]
    };
  }

  generateWorld() {
    console.log(`Generating CraftLand world with seed ${this.seed}`);
  }
}
