
const filteredCountries = (query, list) => {
    if (!query){
        return list
    } else{
        return list.filter(
            //старна, которую мы вводим item по полю name, сравниваем с тем, есть ли у нас в списке такая includes
            (item) => item.name.toLowerCase().includes(query.toLowerCase()) || item.area.name.toLowerCase().includes(query.toLowerCase())
        )
    }
}

export default filteredCountries