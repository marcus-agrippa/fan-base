class UI {
  constructor() {
    this.teamHomeName = document.getElementById('fixture-team-name-home')
    this.teamAwayName = document.getElementById('fixture-team-name-away');
    this.teamHomeBadge = document.getElementById('fixture-team-badge-home');
    this.teamAwayBadge = document.getElementById('fixture-team-badge-away');
    this.fixtureDate = document.getElementById('fixture-date');
    this.fixtureTime = document.getElementById('fixture-time');
  }

  paint(football) {
    this.teamHomeName.textContent = football[0].teams.home.name;
    this.teamHomeBadge.setAttribute('src', football[0].teams.home.logo);
    this.teamAwayName.textContent = football[0].teams.away.name;
    this.teamAwayBadge.setAttribute('src', football[0].teams.away.logo);
    this.fixtureDate.textContent = football[0].fixture.date;
    this.fixtureTime.textContent = football[0].rank;
  }
}