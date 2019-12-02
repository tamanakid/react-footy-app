

export const fetchTable = () => {
  return new Promise((resolve, reject) => {
    const response = {
      teams: [
        { pos: 1, name: 'Liverpool', points: 9, played: 4, wins: 3, draws: 0, loses: 1, goalsFor: 8, goalsAgainst: 4, goalDifference: 4 },
        { pos: 2, name: 'Leicester City', points: 8, played: 4, wins: 2, draws: 2, loses: 0, goalsFor: 9, goalsAgainst: 6, goalDifference: 3 },
        { pos: 3, name: 'Manchester City', points: 6, played: 4, wins: 2, draws: 0, loses: 2, goalsFor: 7, goalsAgainst: 6, goalDifference: 1 },
        { pos: 4, name: 'Chelsea', points: 4, played: 4, wins: 1, draws: 1, loses: 2, goalsFor: 5, goalsAgainst: 7, goalDifference: -2 },
        { pos: 5, name: 'Tottenham', points: 2, played: 4, wins: 0, draws: 2, loses: 2, goalsFor: 7, goalsAgainst: 9, goalDifference: -2 },
        { pos: 6, name: 'Wolves', points: 1, played: 4, wins: 0, draws: 1, loses: 3, goalsFor: 4, goalsAgainst: 8, goalDifference: -4 },
      ],
    };
    resolve(response);
  });
}