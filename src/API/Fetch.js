const UrlCompetitions = "https://api.football-data.org/v2/competitions/"
const UrlTeams = "https://api.football-data.org/v2/teams/"

export const getLeaguesData = async () => {
    /*прочитываем url адрес и получаем данные*/
  const api = await fetch(UrlCompetitions, {
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })
  /*если запрос прошел*/
  if (api.ok) {
    /*переводим данные в json формат*/
    const json = await api.json()
    //console.log(json)
    return json
  }
  else {
    console.error("Возникла проблема с получением данных о лигах")
    return null
  }
}

export const getTeamsData = async () => {
  const api = await fetch(UrlTeams, {
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })
  if (api.ok) {
    const json = await api.json()
    return json
  } else {
    console.error("Возникла проблема с получением данных о командах")
    return null
  }
}