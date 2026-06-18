export class BattleRecord {
  saveBattle(
    winner: string,
    loser: string
  ) {
    return {
      winner,
      loser,
      timestamp: Date.now()
    };
  }
}
