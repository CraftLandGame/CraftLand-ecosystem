export class BuildingSystem {
  placeBlock(
    player: string,
    block: string,
    x: number,
    y: number,
    z: number
  ) {
    return {
      owner: player,
      block,
      position: { x, y, z }
    };
  }

  removeBlock(
    x: number,
    y: number,
    z: number
  ) {
    return {
      removed: true,
      position: { x, y, z }
    };
  }
}
