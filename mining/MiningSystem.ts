export class MiningSystem {
  mine(player: string, resource: string) {
    const rewards = {
      stone: 1,
      iron: 3,
      gold: 5,
      diamond: 10
    };

    return {
      player,
      resource,
      reward:
        rewards[
          resource as keyof typeof rewards
        ] || 0
    };
  }
}
