import Pagination from "@mui/material/Pagination"
import { useEffect } from "react";
import { useState } from "react"

import TeamsList from "./TeamsList";


function PaginationTeams({teams}) {


    const [query, setQuery] = useState(""); //запрос изначальный
    const [page, setPage] = useState(0); //текущая страница
    const [pageQty, setPageQty] = useState(0); //кол-во страниц изначально 0

    


    return (
        <></>
    )
  }

  export default PaginationTeams;