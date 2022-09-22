import TeamsList from "../Components/TeamsList.js"
import SearchLine from "../Components/Search.js"
import { useState } from "react";
import { Stack } from "@mui/system";
import { Pagination, Typography } from "@mui/material";
import filteredCountries from "../Components/Filtered.js";


function PaginationTeams({ teamsList }) { //приходит параметр из роутинга
  
    // We start with an empty list of items.
    const [query, setQuery] = useState("");
    const [pageCount, setPageCount] = useState(1);

    const handleChange = (event, value) =>{
      setPageCount(value)
    }

    const update = (newQuery) => {
      setQuery(newQuery)
    }

    const filtered = filteredCountries(query, teamsList)
    const contentPerPage = 10
    const lastIndex = pageCount * contentPerPage
    const firstIndex = lastIndex - contentPerPage

    const pageTeamsCount = Math.ceil(filtered.length / contentPerPage)
    //slice() копирует заданную часть массива и возвращает эту скопированную часть в виде нового массива
    const paginatedArray = filtered.slice(firstIndex, lastIndex) 
    //console.log(".....................", pageTeamsCount)

    return (
      <>
        <SearchLine query={query} update={update} />
          <Stack alignItems="center">
            {!paginatedArray.length ? (
              <Typography>
                Команды с таким названием нет
              </Typography>
            ) : (
              <>
                <TeamsList paginatedTeamsList={paginatedArray} />
                <Pagination
                  size="large"
                  shape="rounded" //форма элементов страницы
                  count={pageTeamsCount}
                  page={pageCount}
                  onChange={handleChange}
                />
              </>
            )}
          </Stack>
      </>
    )
  }
  
  export default PaginationTeams