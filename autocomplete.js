const creatAutocomplete = ({myRoot, listMvs})=>{




// having search input int the screen

myRoot.innerHTML=`
    <lable><b>Search for a movie</b></lable>
    
    <div class="dropdown">
    <input class="input">
        <div class="dropdown-menu">
            <div class="dropdown-content" id="target">one</div>            
        <div>
    </div>
    
    <!-- //Where this should be
    <div id="info"></div> -->
`

// when user write input
const input = myRoot.querySelector('input');
const oninput = async event=>{
    const foundMovies = await fetchData(event.target.value)
    if (foundMovies.length==0) {
        myRoot.querySelector(".dropdown").classList.remove("is-active")            
    }else {
        myRoot.querySelector(".dropdown").classList.add("is-active")            
    }
    
    myRoot.querySelector(".dropdown-content").innerHTML=''
    console.log(foundMovies)
    for (const movie of foundMovies) {
        const anchor = document.createElement('a')
        anchor.classList.add("dropdown-item")
        anchor.innerHTML= listMvs(movie)       
        myRoot.querySelector("#target").appendChild(anchor)
        anchor.addEventListener("click",async ()=>{
            input.value = movie.Title;
            myRoot.querySelector(".dropdown").classList.remove("is-active")            
            const idResponse = await fetchById(movie.imdbID);
            console.log(idResponse)
            // const info = document.querySelector("#info")
            // info.innerHTML=`
            //     <p>${idResponse.Plot}<p/>
            //     <img src="${idResponse.Poster}">
            // `
        })
    }
    //-----adding explanation of the first movie in list
    // const foundById =  await fetchById(foundMovies[0].imdbID)
    // const myPar = document.createElement('p')
    // myPar.innerHTML = `${foundById.Plot}`
    // document.querySelector("#myPar").replaceWith(myPar)
}

// click outside
document.addEventListener('click',(event)=>{
    const con2 = document.querySelector(".container")
    if (event.target!==con2) {
        document.querySelector(".dropdown").classList.remove("is-active")            
    }    
})


// calling oninput from debouncing
const fetchInputonDelay = debouncing(oninput)
input.addEventListener('input', event =>{
    fetchInputonDelay(event,300)
})




}
