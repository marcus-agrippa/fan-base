// DOM Selectors
const p = document.getElementById('p-text')
const tableSPL = document.getElementById('spl-table')
const fixtures = document.getElementById('upcoming-fixtures')
const fixDemo = document.getElementById('fix-demo')
const rumourMill = document.getElementById('rumour-mill')
const refresh = document.getElementById('refresh')
const latestResults = document.getElementById('latest-result')
const nextFixMatch = document.getElementById('next-match')


// INIT football object
const football = new Football('247', '179');

// INIT UI
const ui = new UI();

// Get football data on DOM load
refresh.addEventListener('click', getFootballData)
refresh.addEventListener('click', getFixtures)
refresh.addEventListener('click', getCelticNews)
refresh.addEventListener('click', getResults)

function getFootballData() {
  football.getFootballData()
  .then(results => {
    console.log(results);

    for(let i = 0; i <results.length; i++) {
      let obj = results[i];
      const z = document.createElement('table')
      z.classList.add('table')
      z.innerHTML = `
        <tr>
        <td class="t-mob-hide">${obj.rank}</td>
        <td><img src=${obj.team.logo} alt="" id="f-logo"></td>
        <td>${obj.all.played}</td>
        <td>${obj.all.win}</td>
        <td>${obj.all.draw}</td>
        <td>${obj.all.lose}</td>
        <td class="t-mob-hide">${obj.goalsDiff}</td>
        <td>${obj.points}</td>
        <td class="t-mob-hide">${obj.form}</td>
        </tr>
      `;

      tableSPL.appendChild(z);
    }
  })
  .catch(err => console.log(err))
}

function getResults() {
  football.getResults()

  .then(results => {
    console.log(results);

    // for(let i = 0; i < results.length; i++) {
      console.log('results called')
      
      let latestResult = results
      
    
      const z = document.createElement('div')
      z.innerHTML = `
      <div class="fixture-container flex-rows">
        <div class="fixture-names flex-col">
          <div class="flex-rows fix-home">
            <p class="m-1">(H) </p><img src=${latestResult.teams.home.logo} alt="" id="result-team-badge-home">
            <p id="fixture-team-name-home">${latestResult.teams.home.name}</p>
            <p id="fixture-team-name-home" class="mx-1">${latestResult.goals.home}</p>
          </div>
          <div class="flex-rows fix-away">
          <p class="m-1">(A) </p><img src=${latestResult.teams.away.logo} alt="" id="result-team-badge-away">
            <p id="fixture-team-name-away">${latestResult.teams.away.name}</p>
            <p id="fixture-team-name-away" class="mx-1">${latestResult.goals.away}</p>
          </div>
        </div>

      </div>
      `
      latestResults.appendChild(z);

      let upcomingFixtures = results
      console.log(upcomingFixtures)
      const nextMatch = document.createElement('div')
      nextMatch.innerHTML = `
      <div class="flex-row">
       <img src=${upcomingFixtures.teams.home.logo} alt="" id="next-match-home">
       <h6>V</h6>
       <img src=${upcomingFixtures.teams.away.logo} alt="" id="next-match-away">
      </div>
      <br>
      <div class="flex-col" id="next-match-info">
       <p><span>Date:</span> ${upcomingFixtures.fixture.date}</p>
       <p><span>Time:</span> ${upcomingFixtures.fixture.date}</p>
       <p><span>Venue:</span> ${upcomingFixtures.fixture.venue.name}</p>
       <p><span>Referee:</span> ${upcomingFixtures.fixture.referee}</p>
      </div>


      `

      nextFixMatch.appendChild(nextMatch)
  })

  .catch(err => console.log(err))
}


// GET CELTIC UPCOMING FIXTURES (Up to 5 games)

function getFixtures() {
  football.getFixtures()

  .then(results => {
    console.log(results);
    ui.paint(results);
    let jsonDate = JSON.stringify(new Date (newfixtures.fixture.date))
    let today = new Date()

    let i = 0
    
    // if (jsonDate > today) {
    //   console.log('fixtures')

    // } else {
    //   console.log('no fixtures')

    // }

    do {
      let newfixtures = results[i];
      const fix = document.createElement('div')
      let fixDate = newfixtures.fixture.date
      let date = fixDate.substring(0, 10).split("-").reverse()
      let time = fixDate.substring(11, 16)
      fix.innerHTML =`
      <div class="fixture-container flex-rows">
        <div class="fixture-names flex-col">
          <div class="flex-rows fix-home">
            <p class="m-1">(H) </p><img src=${newfixtures.teams.home.logo} alt="" id="fixture-team-badge-home">
            <p id="fixture-team-name-home" class="t-mob-hide">${newfixtures.teams.home.name}</p>
          </div>
          <div class="flex-rows fix-away">
          <p class="m-1">(A) </p><img src=${newfixtures.teams.away.logo} alt="" id="fixture-team-badge-away">
            <p id="fixture-team-name-away" class="t-mob-hide">${newfixtures.teams.away.name}</p>
          </div>
        </div>
        <div class="fixture-dates flex-col">
          <p id="fixture-date">${date[0]}-${date[1]}-${date[2]}</p>
          <p id="fixture-time">${time}</p>
        </div>
      </div>
      `

      fixtures.appendChild(fix);

      i++;

    } while (i < 5)

    // for(let i = 0; results < 5; i++) {
      
    // }
  
  })

  .catch(err => console.log(err))
}


// GET CELTIC NEWS (5 recent news articles)

function getCelticNews() {
  football.getCelticNews()

  .then(results => {

    for(let i = 0; i < results.length; i++) {
      console.log('news called')
      let newArticles = results[i]
      const article = document.createElement('div')
      article.innerHTML = `<p><a href=${newArticles.link} target="_blank">${newArticles.title}</a></p>`
      rumourMill.appendChild(article);

    }
  })
  .catch(err => console.log(err))
}



