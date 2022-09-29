import {getTeamsMatches} from '../API/Fetch.js'

/*-----получение матчей по команде----------------*/
const getTeamsMatchesClik = (teamId, strDateFrom, strDateTo) => {//из fetch
    if(strDateFrom.length === 10 && strDateTo.length === 10){
        return getTeamsMatches(teamId, strDateFrom, strDateTo)
    } else{
        return getTeamsMatches(teamId, "", "")
    }
}

export default getTeamsMatchesClik;