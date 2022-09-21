import { Grid } from '@mui/material'
import TeamItem from './TeamItem.js'

function TeamsList({paginatedTeamsList}){
  //console.log("данные в TeamsList", teamsList)

    return(
        <Grid container spacing={3} justifyContent="center">
          {/*берем массив dailyWeather, принимает элемент day
          проходимся по массиву и преобразуем этот массив в jsx элемент*/}
          {paginatedTeamsList.map((team) => (
            <TeamItem
                key={team.id} //особенность реакта
                idTeam={team.id}
                nameTeam={team.name}
                flagTeam={team.crestUrl}
            />
          ))}
        </Grid>
    )

}

export default TeamsList;