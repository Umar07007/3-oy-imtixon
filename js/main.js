let elList = document.querySelector(".list");
let elBtn1 = document.querySelector(".btn__1");
let elBtn2 = document.querySelector(".btn__2");
let elBtn3 = document.querySelector(".btn__3");
let elBtnClean = document.querySelector(".btn__clean");
let elImgPokemon = document.querySelector(".pokemons-logo");
let elImgMovies = document.querySelector(".movies-logo");


let pokemonArray = pokemons;
let moviesArray = movies.slice(0, 151);
let randomArray = pokemonArray.concat(moviesArray);

elBtn1.addEventListener("click", function () {
    elList.innerHTML = null
    render(pokemonArray)
})

elBtn2.addEventListener("click", function () {
    elList.innerHTML = null
    render(moviesArray)
})

elBtn3.addEventListener("click", function () {
    elList.innerHTML = null
    let inputLength = Number(prompt("Qancha kerak?"));
    function both(array1,array2){
        return[
            ...array1.slice(0,Math.trunc(inputLength / 2)),
            ...array2.slice(0,Math.trunc(inputLength / 2)),
        ]
    }
    renderBoth(both(pokemonArray,moviesArray))
})

elBtnClean.addEventListener("click", function () {
    elList.innerHTML = null
})

elBtn1.addEventListener("click", function () {
    elImgPokemon.setAttribute("style", "display:block")
    elImgMovies.setAttribute("style", "display:none")

})

elBtn2.addEventListener("click", function () {
    elImgPokemon.setAttribute("style", "display:none")
    elImgMovies.setAttribute("style", "display:block")
})

elBtn3.addEventListener("click", function () {
    elImgPokemon.setAttribute("style", "display:block")
    elImgMovies.setAttribute("style", "display:block")
})

elBtnClean.addEventListener("click", function () {
    elImgPokemon.setAttribute("style", "display:none")
    elImgMovies.setAttribute("style", "display:none")
})



function render(array) {
    array = array.slice(0, prompt("Qancha kerak?"));
    for (const item of array) {
        let newLi = document.createElement("li");
        newLi.classList = "list__item";


        let newImg = document.createElement("img");
        let newH3 = document.createElement("h3");
        let newTitle = document.createElement("h4")
        let newHeight = document.createElement("p")
        let newLiLink = document.createElement("a")
        let newWeight = document.createElement("p")

        newHeight.textContent = item.height
        newWeight.textContent = item.weight
        newTitle.textContent = item.candy
        newImg.width = "200"

        newH3.classList = "item_title"
        newTitle.classList = "item_title"
        newHeight.classList = "item_title"
        newWeight.classList = "item_title"



        if (item.name) {
            newImg.src = item.img;
            newH3.textContent = item.name;
        } else {
            newLiLink.classList = "btn btn__4 btn-outline-success"
            newLiLink.textContent = "Watch Trailer"

            newH3.textContent = item.Title;
            newTitle.textContent = item.Categories;
            newHeight.textContent = item.imdb_rating;
            newWeight.textContent = item.movie_year;
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            newLiLink.href = `https://www.youtube.com/watch?v=${item.ytid}`;
        }


        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        newLi.appendChild(newTitle);
        newLi.appendChild(newHeight);
        newLi.appendChild(newWeight);
        elList.appendChild(newLi);
        newLi.appendChild(newLiLink);
    }

}



//----------------
function renderBoth(array) {
    // array = array.slice(0, prompt("Qancha kerak?"));
    for (const item of array) {
        let newLi = document.createElement("li");
        newLi.classList = "list__item";


        let newImg = document.createElement("img");
        let newH3 = document.createElement("h3");
        let newTitle = document.createElement("h4")
        let newHeight = document.createElement("p")
        let newLiLink = document.createElement("a")
        let newWeight = document.createElement("p")

        newHeight.textContent = item.height
        newWeight.textContent = item.weight
        newTitle.textContent = item.candy
        newImg.width = "200"

        newH3.classList = "item_title"
        newTitle.classList = "item_title"
        newHeight.classList = "item_title"
        newWeight.classList = "item_title"



        if (item.name) {
            newImg.src = item.img;
            newH3.textContent = item.name;
        } else {
            newLiLink.classList = "btn btn__4 btn-outline-success"
            newLiLink.textContent = "Watch Trailer"

            newH3.textContent = item.Title;
            newTitle.textContent = item.Categories;
            newHeight.textContent = item.imdb_rating;
            newWeight.textContent = item.movie_year;
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            newLiLink.href = `https://www.youtube.com/watch?v=${item.ytid}`;
        }


        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        newLi.appendChild(newTitle);
        newLi.appendChild(newHeight);
        newLi.appendChild(newWeight);
        elList.appendChild(newLi);
        newLi.appendChild(newLiLink);
    }

}



