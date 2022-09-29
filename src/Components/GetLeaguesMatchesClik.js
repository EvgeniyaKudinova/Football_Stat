import {getLeaguesMatches} from '../API/Fetch.js'

/*-----получение матчей по лигам----------------*/
const getLeaguesMatchesClik = (leaqueId, strDateFrom, strDateTo) => {//из fetch
    if(strDateFrom.length === 10 && strDateTo.length === 10){
        return getLeaguesMatches(leaqueId, strDateFrom, strDateTo)
    } else{
        return getLeaguesMatches(leaqueId, "", "")
    }
}

export default getLeaguesMatchesClik;