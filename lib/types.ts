export type Roll = [number, number, number];

export type Match = {
  villainRoll: Roll;
  heroRolls: Roll[];
};

export type Session = {
  matches: Match[];
  startingHeroElo: number;
  endingHeroHelo: number;
  shuffles: number;
  record: {
    wins: number;
    losses: number;
    draws: number;
  };
};
