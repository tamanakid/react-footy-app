const teams = [
  { teamId: 100006, name: 'Liverpool', color1: 'red', color2: null, logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png' },
  { teamId: 100026, name: 'Leicester City', color1: 'blue', color2: 'white', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_48x48.png' },
  { teamId: 100005, name: 'Manchester City', color1: 'sky', color2: 'white', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png' },
  { teamId: 100014, name: 'Chelsea', color1: 'blue', color2: null, logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png' },
  { teamId: 100015, name: 'Tottenham', color1: 'white', color2: 'navy', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png' },
  { teamId: 100033, name: 'Wolves', color1: 'gold', color2: 'black', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/-WjHLbBIQO9xE2e2MW3OPQ_48x48.png' },
  { teamId: 100009, name: 'Sheffield United', color1: 'red', color2: 'white', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/wF8AgQsssfy3_GLyVR3dSg_48x48.png' },
  { teamId: 100004, name: 'Arsenal', color1: 'red', color2: 'white', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png' },
  { teamId: 100010, name: 'Crystal Palace', color1: 'blue', color2: 'red', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/8piQOzndGmApKYTcvyN9vA_48x48.png' },
  { teamId: 100071, name: 'Burnley', color1: 'claret', color2: 'sky', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/teLLSaMXim_8BA1d93sMng_48x48.png' },
  { teamId: 100002, name: 'Manchester United', color1: 'red', color2: 'black', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png' },
  { teamId: 100054, name: 'Bournemouth', color1: 'red', color2: 'black', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/IcOt-hrK04B-RlRwI3R0yA_48x48.png' },
  { teamId: 100042, name: 'Newcastle United', color1: 'black', color2: 'white', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/96CcNNQ0AYDAbssP0V9LuQ_48x48.png' },
  { teamId: 100007, name: 'Aston Villa', color1: 'claret', color2: 'sky', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/uyNNelfnFvCEnsLrUL-j2Q_48x48.png' },
  { teamId: 100022, name: 'West Ham United', color1: 'claret', color2: 'sky', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png' },
  { teamId: 100045, name: 'Brighton', color1: 'blue', color2: 'white', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/EKIe0e-ZIphOcfQAwsuEEQ_48x48.png' },
  { teamId: 100012, name: 'Everton', color1: 'blue', color2: 'white', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_48x48.png' },
  { teamId: 100016, name: 'Southampton', color1: 'red', color2: 'white', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/y1V4sm2SEBiWUPRIYl5rfg_48x48.png' },
  { teamId: 100018, name: 'Norwich City', color1: 'green', color2: 'yellow', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/y-we_-8ySOubta5psWzDoA_48x48.png' },
  { teamId: 100032, name: 'Watford', color1: 'yellow', color2: 'black', logoUrl: 'http://ssl.gstatic.com/onebox/media/sports/logos/lHr1L31i7aJS-O8tUdHOIQ_48x48.png' },
]


export const fetchTeam = ({ body }) => {
  return new Promise((resolve, reject) => {
    const team = teams.find(team => team.teamId === body.teamId);
    const response = { team };
    (response.team) ? resolve(response) : reject();
  });
}