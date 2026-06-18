export class LootSystem {
  private lootTable = [
    "Wood",
    "Iron",
    "Gold",
    "Diamond",
    "Ancient Relic"
  ];

  drop() {
    const index = Math.floor(
      Math.random() * this.lootTable.length
    );

    return this.lootTable[index];
  }
}v
