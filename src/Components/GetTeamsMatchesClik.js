import {getTeamsMatches} from '../API/Fetch.js'

/*-----получение матчей по команде----------------*/
const getTeamsMatchesClik = (teamId, strDateFrom, strDateTo) => {
    if(getTeamsMatches.length === 10 && strDateTo.length === 10){
        return getTeamsMatches(teamId, strDateFrom, strDateTo)
    } else{
        return getTeamsMatches(teamId, "", "")
    }
}

export default getTeamsMatchesClik;