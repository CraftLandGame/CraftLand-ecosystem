export class CombatSystem {
  attack(
    attacker: string,
    target: string,
    damage: number
  ) {
    return {
      attacker,
      target,
      damage
    };
  }

  defend(player: string) {
    return {
      player,
      blocked: true
    };
  }
}
