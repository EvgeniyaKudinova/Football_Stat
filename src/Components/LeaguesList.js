import { Grid } from '@mui/material'
import LeagueItem from './LeagueItem.js'

function LeagueList({paginatedLeaguesList}){
  //console.log("данные в TeamsList", teamsList)

    return(
        <Grid container spacing={2} justifyContent="center">
          {/*берем массив paginatedTeamsList, принимает элемент team
          проходимся по массиву и преобразуем этот массив в jsx элемент*/}
          {paginatedLeaguesList.map((league) => (
            <LeagueItem
                key={league.id} //особенность реакта
                idLeague={league.id}
                name={league.area.name}
                nameLeague={league.name}
                flagLeague={league.area.ensignUrl}
            />
          ))}
        </Grid>
    )

}

export default LeagueList;