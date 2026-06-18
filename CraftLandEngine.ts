import { WorldGenerator } from "../game/world/WorldGenerator";
import { MiningSystem } from "../game/mining/MiningSystem";
import { Marketplace } from "../blockchain/marketplace/Marketplace";

export class CraftLandEngine {
  start() {
    const world =
      new WorldGenerator(12345);

    world.generateWorld();

    const mining =
      new MiningSystem();

    console.log(
      mining.mine(
        "Explorer01",
        "diamond"
      )
    );

    const market =
      new Marketplace();

    console.log(
      market.createListing(
        "Explorer01",
        "Diamond Sword",
        500
      )
    );
  }
}
