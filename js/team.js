class Team {
  constructor(id, className, name) {
    this.id = id;
    this.className = className;
    this.name = name;
  }
}

class TeamGroup {
  constructor(id, className, name, slug, teams) {
    this.id = id;
    this.className = className;
    this.name = name;
    this.slug = slug;
    this.teams = teams;
  }
}

const teamArray = [
  new TeamGroup(0, '', 'Equipos Serie A', 'serie-a', [
    new Team(0, '', 'Sociedad Deportiva Aucas'),
    new Team(1, '', 'Universidad Católica'),
    new Team(2, '', 'Independiente del Valle'),
    new Team(3, '', 'Liga Deportiva Universitaria'),
    new Team(4, '', 'Barcelona Sporting Club'),
    new Team(5, '', 'Club Sport Emelec'),
    new Team(6, '', 'Deportivo Cuenca'),
    new Team(7, '', 'Delfin Sporting Club'),
    new Team(8, '', 'Orense Sporting Club'),
    new Team(9, '', 'Guayaquil City'),
    new Team(10, '', 'Gualaceo Sporting Club'),
    new Team(11, '', 'Técnico Universitario'),
    new Team(12, '', 'Mushuc Runa'),
    new Team(13, '', 'Cumbayá Fútbol Club'),
    new Team(14, '', 'El Nacional'),
    new Team(15, '', 'Libertad Fútbol Club'),
  ]),
  new TeamGroup(1, '', 'Equipos Serie B', 'serie-b', [
    new Team(0, '', 'Macará de Ambato'),
    new Team(1, '', 'Nueve de Octubre'),
    new Team(2, '', 'Independiente Junior'),
    new Team(3, '', 'Deportivo América'),
    new Team(4, '', 'Imbabura Sporting Club'),
    new Team(5, '', 'Chacaritas'),
    new Team(6, '', 'Búhos ULVR Fútbol Club'),
    new Team(7, '', 'Manta Fútbol Club'),
    new Team(8, '', 'Club Vargas Torres'),
    new Team(9, '', 'Cuniburp F.C.'),
  ]),
];

const teamElement = document.querySelector('#team');

teamArray.forEach((teamGroup) => {
  teamElement.innerHTML += teamGroup.teams.map((team, index) => {
    return `
      <option value="${team.name}">${team.name}</option>
    `;
  });
});
