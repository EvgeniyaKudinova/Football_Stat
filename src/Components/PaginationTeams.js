import TeamsList from "./TeamsList.js"
import SearchLine from "./Search.js"
import { useState } from "react";


function PaginationTeams({ leaguesList }) { //приходит параметр из роутинга
  
    // We start with an empty list of items.
    const [query, setQuery] = useState("");
    const [pageCount, setPageCount] = useState(0);

    const handlePageClick = (event, value) =>{
      setPageCount(value)
    }

    const update = (newQuery) => {
      setQuery(newQuery)
    }

    const dataFiltered = 1
    const contentPerPage = 18
    const lastIndex = pageCount * contentPerPage
    const firstIndex = lastIndex - contentPerPage

    const pageTeamsCount = Math.ceil(dataFiltered.length / contentPerPage)
    const paginatedArray = dataFiltered.slice(firstIndex, lastIndex)

    return (
      <>
            <SearchField query={query} update={update} />
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "83vh" }}
      >
        {!paginatedArray.length ? (
          <Typography variant="h5">
            Команды с таким названием нет в базе
          </Typography>
        ) : (
          <>
            <TeamsList paginatedTeamsList={paginatedTeamsList} />
            <Pagination
              size="large"
              count={pageTeamsCount}
              page={pageCount}
              onChange={handlePageClick}
            />
          </>
        )}
      </Stack>
      </>
    )
  }
  
  export default PaginationTeams