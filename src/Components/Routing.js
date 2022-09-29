import { Routes, Route } from "react-router-dom"

import PaginationLeaques from '../Pages/PaginationLeagues.js'
import PaginationTeams from '../Pages/PaginationTeams.js'
import Notfoundpage from '../Pages/Notfoundpage.js'
import LeaguesMatches from '../Pages/LeaguesMatches.js'
import TeamsMatches from '../Pages/TeamsMatches.js'

import { getLeaguesData, getTeamsData } from "../API/Fetch.js"
import { useEffect, useState } from "react"

function Routing() {
 
  const [leaguesList, setLeaguesList] = useState([])
  const [teamsList, setTeamsList] = useState([])

  //получаем элементы
  useEffect(() =>{
    /*Асинхронный(одновременный) запрос на получение данных*/
    const dataLeagues = async () =>{
    /*fetch - метод, позволяющий полностью прочитать url адрес и получить данные*/
    const apiLeagues = await getLeaguesData();

    if (!apiLeagues) return 
        console.log("Данные о лигах в формате json", apiLeagues);
        setLeaguesList(apiLeagues.competitions)
      
    }
    dataLeagues()
  }, [])

  useEffect(() =>{
    const dataTeams = async () =>{
    const apiTeams = await getTeamsData();

    if (!apiTeams) return
        console.log("Данные о командах в формате json", apiTeams);
        setTeamsList(apiTeams.teams)
    }
    dataTeams()
  }, [])

  /*------переход к матчам и лигам------*/
  const leaguesMatches = leaguesList.map((league) => (
    <Route
      path={`/leagues/${league.id}/matches`}
      element={<LeaguesMatches league={league} />}
      key={league.id}
    />
  ))

  const teamsMatches = teamsList.map((team) => (
    <Route
      path={`/teams/${team.id}/matches`}
      element={<TeamsMatches team={team} />}
      key={team.id}
    />
  ))

  
    return (
      <Routes>
        {/*Есть роут на опред.адрес*/}
        <Route path="/Football_Stat" element={<PaginationLeaques leaguesList={leaguesList}/>} />
        <Route path="/teams" element={<PaginationTeams teamsList={teamsList}/>} />
        {leaguesMatches}
        {teamsMatches}
        {/*если ничего не найдено*/}
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    )
  }
  
  export default Routing;