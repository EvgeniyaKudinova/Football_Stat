import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


function DataGridMatches({matches, updateMatches}){ //из TeamsMatches

    if(!matches.length){
        return (
            <Typography>К сожалению, на этот момент данных нет</Typography>
        )
    }
    /*оценка счета*/
    const checkScore = (value) => {
        if (value === null) {
          return "--"
        } else {
          return value
        }
      }

    /*----статус матча-----*/
    const statusMatches = {
        SCHEDULED: "Запланирован",
        LIVE: "В прямом эфире",
        IN_PLAY: "В игре",
        PAUSED: "Пауза",
        FINISHED: "Завершён",
        POSTPONED: "Отложен",
        SUSPENDED: "Приостановлен",
        CANCELED: "Отменён"
      }

    const rows = matches.map((matchesTeam) => ({
        id: matchesTeam.id,
        date: new Date(matchesTeam.utcDate).toLocaleDateString(),
        time: new Date(matchesTeam.utcDate).toLocaleTimeString([],{hour: "2-digit", minute: "2-digit"}),
        status: statusMatches[matchesTeam.status],
        homeTeam: matchesTeam.homeTeam.name,
        guestTeam: matchesTeam.awayTeam.name,
        scoreMain: `${checkScore(matchesTeam.score.fullTime.homeTeam)} : ${checkScore(matchesTeam.score.fullTime.awayTeam)}`,
        scoreExtra: `${checkScore(matchesTeam.score.extraTime.homeTeam)} : ${checkScore(matchesTeam.score.extraTime.awayTeam)}`,
        scorePenalty: `${checkScore(matchesTeam.score.penalties.homeTeam)} : ${checkScore(matchesTeam.score.penalties.awayTeam)}`
    }))

    const columns = [
        { field: 'date', headerName: 'Дата', width: 135, flex: 1 },
        { field: 'time', headerName: 'Время', width: 140, flex: 1},
        { field: "status", headerName: "Статус", width: 150, flex: 1 },
        { field: "homeTeam", headerName: "Хозяин", width: 350, align: "right", flex: 3},
        { field: "guestTeam", headerName: "Гость", minWidth: 350, flex: 3},
        { field: "scoreMain", headerName: "Счёт", align: "center", width: 70, flex: 1},
        { field: "scoreExtra", headerName: "Доп. время", align: "center", width: 100, flex: 1},
        { field: "scorePenalty", headerName: "Пенальти", align: "center", width: 100, flex: 1}
    ]

    return(
        <Box sx={{ height: 600, margin: 2}}>
            <DataGrid
                rows={rows}
                columns={columns}
                onChange={updateMatches}
                autoPageSize sx={{ mt: "20px" }}  
            />
        </Box>

    )
}

export default DataGridMatches;