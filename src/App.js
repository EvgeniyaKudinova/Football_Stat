import './App.css';
import { useEffect, useState } from "react"

import Navbar from '../src/Components/Navbar.js'
import { getLeaguesData, getTeamsData } from './API/Fetch';


function App() {

  const [leagues, setleagues] = useState([])
  const [teams, setteams] = useState([])

  //получаем элементы
  useEffect(() =>{
    /*Асинхронный(одновременный) запрос на получение данных*/
    const dataLeagues = async () =>{
    /*fetch - метод, позволяющий полностью прочитать url адрес и получить данные*/
    const apiLeagues = await getLeaguesData();

    if (!getLeaguesData) {
        console.log("Возникла ошибка при получении данных о лигах...");
        setleagues(apiLeagues.competitions)
      }

    }
    dataLeagues()
  }, [])

  useEffect(() =>{
    const dataTeams = async () =>{
    const apiTeams = await getTeamsData();

    if (!getTeamsData) {
        console.log("Возникла ошибка при получении данных о командах...");
        setteams(apiTeams.competitions)
      }

    }
    dataTeams()
  }, [])

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
