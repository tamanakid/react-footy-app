

export const fetchTable = () => {
  return new Promise((resolve, reject) => {
    const response = {
      teams: [
        { pos: 1, teamId: 100006, name: 'Liverpool', points: 35, played: 14, wins: 11, draws: 2, loses: 1, goalsFor: 31, goalsAgainst: 10, goalDifference: 21 },
        { pos: 2, teamId: 100026, name: 'Leicester City', points: 31, played: 14, wins: 9, draws: 4, loses: 1, goalsFor: 25, goalsAgainst: 7, goalDifference: 18 },
        { pos: 3, teamId: 100005, name: 'Manchester City', points: 29, played: 14, wins: 9, draws: 2, loses: 3, goalsFor: 32, goalsAgainst: 13, goalDifference: 19 },
        { pos: 4, teamId: 100014, name: 'Chelsea', points: 25, played: 14, wins: 7, draws: 4, loses: 3, goalsFor: 24, goalsAgainst: 14, goalDifference: 10 },
        { pos: 5, teamId: 100015, name: 'Tottenham', points: 23, played: 14, wins: 7, draws: 2, loses: 5, goalsFor: 21, goalsAgainst: 13, goalDifference: 8 },
        { pos: 6, teamId: 100033, name: 'Wolves', points: 22, played: 14, wins: 6, draws: 4, loses: 4, goalsFor: 20, goalsAgainst: 14, goalDifference: 6 },
        { pos: 7, teamId: 100009, name: 'Sheffield United', points: 21, played: 14, wins: 6, draws: 3, loses: 5, goalsFor: 22, goalsAgainst: 18, goalDifference: 4 },
        { pos: 8, teamId: 100004, name: 'Arsenal', points: 20, played: 14, wins: 5, draws: 5, loses: 4, goalsFor: 22, goalsAgainst: 13, goalDifference: 9 },
        { pos: 9, teamId: 100010, name: 'Crystal Palace', points: 20, played: 14, wins: 6, draws: 2, loses: 6, goalsFor: 17, goalsAgainst: 16, goalDifference: 1 },
        { pos: 10, teamId: 100071, name: 'Burnley', points: 19, played: 14, wins: 5, draws: 4, loses: 5, goalsFor: 15, goalsAgainst: 15, goalDifference: 0 },
        { pos: 11, teamId: 100002, name: 'Manchester United', points: 17, played: 14, wins: 5, draws: 2, loses: 7, goalsFor: 17, goalsAgainst: 19, goalDifference: -2 },
        { pos: 12, teamId: 100054, name: 'Bournemouth', points: 16, played: 14, wins: 4, draws: 4, loses: 6, goalsFor: 14, goalsAgainst: 17, goalDifference: -3 },
        { pos: 13, teamId: 100042, name: 'Newcastle United', points: 16, played: 14, wins: 4, draws: 4, loses: 6, goalsFor: 15, goalsAgainst: 21, goalDifference: -6 },
        { pos: 14, teamId: 100007, name: 'Aston Villa', points: 15, played: 14, wins: 4, draws: 3, loses: 7, goalsFor: 14, goalsAgainst: 20, goalDifference: -6 },
        { pos: 15, teamId: 100022, name: 'West Ham United', points: 14, played: 14, wins: 4, draws: 2, loses: 8, goalsFor: 17, goalsAgainst: 26, goalDifference: -9 },
        { pos: 16, teamId: 100045, name: 'Brighton', points: 13, played: 14, wins: 4, draws: 1, loses: 9, goalsFor: 13, goalsAgainst: 17, goalDifference: -4 },
        { pos: 17, teamId: 100012, name: 'Everton', points: 13, played: 14, wins: 3, draws: 4, loses: 7, goalsFor: 11, goalsAgainst: 22, goalDifference: -11 },
        { pos: 18, teamId: 100016, name: 'Southampton', points: 11, played: 14, wins: 2, draws: 5, loses: 7, goalsFor: 13, goalsAgainst: 28, goalDifference: -15 },
        { pos: 19, teamId: 100018, name: 'Norwich City', points: 9, played: 14, wins: 2, draws: 3, loses: 9, goalsFor: 11, goalsAgainst: 32, goalDifference: -21 },
        { pos: 20, teamId: 100032, name: 'Watford', points: 8, played: 14, wins: 2, draws: 2, loses: 10, goalsFor: 9, goalsAgainst: 26, goalDifference: -17 },
      ],
    };
    resolve(response);
  });
}
