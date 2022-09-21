import './App.css';
import { useEffect, useState } from "react"


import Navbar from '../src/Components/Navbar.js'
import { getLeaguesData, getTeamsData } from "./API/Fetch.js"
import TeamsList from './Components/TeamsList';
import SearchLine from './Components/Search.js'
import Routing from './Components/Routing.js'
import { Box } from '@mui/material';


function App() {

  /*const [leaguesList, setLeaguesList] = useState([])
  const [teamsList, setTeamsList] = useState([])

  //получаем элементы
  useEffect(() =>{
    /*Асинхронный(одновременный) запрос на получение данных
    const dataLeagues = async () =>{
    /*fetch - метод, позволяющий полностью прочитать url адрес и получить данные
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
  }, [])*/

  return (
    <div className="App">
      <Navbar />
      {/*<SearchLine />*/}
      <Box>
        <Routing />
      </Box>

    </div>
  );
}

export default App;
