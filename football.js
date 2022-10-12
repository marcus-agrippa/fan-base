class Football {
  constructor(teamID, leagueID) {
    this.apiKey = "";
    this.teamID = teamID;
    this.leagueID = leagueID;
  }

  async getFootballData() {
    var myHeaders = new Headers();
      myHeaders.append("x-rapidapi-key", "");
      myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch(`https://v3.football.api-sports.io/standings?league=${this.leagueID}&season=2022`, requestOptions);

    const responseData = await response.json();

    return responseData.response[0].league.standings[0];
  }

  async getResults() {
    var myHeaders = new Headers();
      myHeaders.append("x-rapidapi-key", "");
      myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=${this.leagueID}&season=2022&team=${this.teamID}&last=1`, requestOptions);

    const responseData = await response.json();
    console.log(response);

    return responseData.response[0];
  }

  async getFixtures() {
    var myHeaders = new Headers();
      myHeaders.append("x-rapidapi-key", "");
      myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch(`https://v3.football.api-sports.io/fixtures?season=2022&team=${this.teamID}`, requestOptions);

    const responseData = await response.json();
    console.log(responseData);

    return responseData.response;
  }

  async getCelticNews(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
      }
    };

    const response = await fetch('https://google-news1.p.rapidapi.com/search?q=CelticFC&country=GB&lang=en&limit=5&when=5d', options);

    const responseData = await response.json();
    return responseData.articles;
  }
}



