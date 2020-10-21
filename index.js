// fetch by search
const fetchData = async function (searchTerm) {
    const response = await axios.get('http://www.omdbapi.com/',{
        params: {
            apikey: '2f485154',
            s: searchTerm,
        }
    })
    if (response.data.Error){
        return []
    }
    return response.data.Search
}

// -------fetch by id 
const fetchById = async (searchId)=>{
    response = await axios.get('http://www.omdbapi.com/',
    {
        params:{
            apikey: '2f485154',
            i: searchId,
        }
    })
    return response.data
}


creatAutocomplete({
    myRoot: document.querySelector("#root1"),
    listMvs: (movie)=>{
        return `
        <image src="${movie.Poster}"/>            
        ${movie.Title}
        (${movie.Year})
        `
    }
})

creatAutocomplete({
    myRoot: document.querySelector("#root2")
})

//next time start from 31