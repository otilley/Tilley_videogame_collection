let games = []

const getGenres = (genreValue) => {
    if (!genreValue) return []

    return String(genreValue)
        .split(",")
        .map(genre => genre.trim().replace(/\s+/g, " "))
        .filter(Boolean)
}

const getNormalizedGenres = (genreValue) =>
    getGenres(genreValue).map(genre => genre.toLowerCase())

function renderGames(gameList = games) {
    const gamesSection = document.querySelector("#games")
    gamesSection.innerHTML = ""

    gameList.forEach(game => {
        const card = document.createElement("article")
        const genres = getGenres(game.genre)
        const genreMarkup = genres.map(genre => `<span>${genre}</span>`).join("")

        card.classList.add("card")
        card.innerHTML = `
            <h2 class="gameTitle">${game.title}</h2>
            <p class="gameMeta">${game.maturity_rating} rated</p>
            <div>
                <img class="gameCover" src="${game.path}" alt="${game.title}" />
            </div>
            <div class="gameDetails">
                <p><strong>Developer:</strong> ${game.developer}</p>
                <p><strong>Release:</strong> ${game.release_date}</p>
                <p><strong>Players:</strong> ${game.player_number}</p>
                <p><strong>Perspective:</strong> ${game.perspective}</p>
            </div>
            <div class="genres">${genreMarkup}</div>
        `

        gamesSection.appendChild(card)
    })
}

function styleFilters(filters, selected) {
    filters.forEach(filter => {
        const filterValue = filter.getAttribute("data-genre")
        filter.classList.toggle("selected", filterValue === selected)
    })
}

function createGenreFilter(genre) {
    const filterElement = document.querySelector(`[data-genre="${genre}"]`)

    if (!filterElement) return

    filterElement.addEventListener("click", function() {
        const selectedGenre = filterElement.getAttribute("data-genre")
        const filters = document.querySelectorAll(".filter")

        let filteredGames = games

        if (selectedGenre !== "all") {
            filteredGames = games.filter(game =>
                getNormalizedGenres(game.genre).includes(selectedGenre.toLowerCase())
            )
        }

        renderGames(filteredGames)
        styleFilters(filters, selectedGenre)
    })
}

fetch("data.json")
    .then(response => response.json())
    .then(json => {
        games = json
        renderGames(games)

        document.querySelectorAll(".filter").forEach(filter => {
            createGenreFilter(filter.getAttribute("data-genre"))
        })
    })
    .catch(error => console.log("error", error))