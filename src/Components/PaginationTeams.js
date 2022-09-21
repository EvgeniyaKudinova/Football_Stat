import TeamsList from "./TeamsList.js"
import SearchLine from "./Search.js"
import { useState } from "react";
import { Stack } from "@mui/system";
import { Pagination, Typography } from "@mui/material";


function PaginationTeams({ teamsList }) { //приходит параметр из роутинга
  
    // We start with an empty list of items.
    const [query, setQuery] = useState("");
    const [pageCount, setPageCount] = useState(1);

    const handlePageClick = (event, value) =>{
      setPageCount(value)
    }

    const update = (newQuery) => {
      setQuery(newQuery)
    }

    //const teamsList = 1
    const contentPerPage = 10
    const lastIndex = pageCount * contentPerPage
    const firstIndex = lastIndex - contentPerPage

    const pageTeamsCount = Math.ceil(teamsList.length / contentPerPage)
    const paginatedArray = teamsList.slice(firstIndex, lastIndex)

    return (
      <>
            <SearchLine query={query} update={update} />
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
            <TeamsList paginatedTeamsList={paginatedArray} />
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