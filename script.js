let games = []
let selectedGenre = "all"
let selectedPrice = "all"

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
        const genreMarkup = genres.map(genre => `<span data-genre="${genre}">${genre}</span>`).join("")
        const formattedPrice = game.price == null
            ? "Price unavailable"
            : game.price === 0
                ? "Free"
                : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(game.price)
        const coverMarkup = `<img class="gameCover" src="${game.path}" alt="${game.title}" />`
        const linkedCoverMarkup = game.url
            ? `<a href="${game.url}" target="_blank" rel="noopener noreferrer">${coverMarkup}</a>`
            : coverMarkup
        

        card.classList.add("card")
        card.innerHTML = `
        <div class="titleRow">
            <h2 class="gameTitle" title="${game.title}"><span>${game.title}</span></h2>
            <p class="gameMeta">${game.maturity_rating} </p>
        </div>
            <div>${linkedCoverMarkup}</div>
             
            <p class="releaseDate">${game.release_date}</p>
            <p class="gamePrice">${formattedPrice}</p>
            <div class="gameDetails">
                <div class="Developer">
                    <p>Developer: ${game.developer}</p>
                </div>
               
                <div class="Players">
                    <p>Players: ${game.player_number}</p>
                </div>
                <div class="Perspective">
                    <p>Perspective: ${game.perspective}</p>
                </div>
            </div>
            <div class="genres">${genreMarkup}</div>
        `

        gamesSection.appendChild(card)

        const title = card.querySelector(".gameTitle")
        const updateTitleScroll = () => {
            const overflow = title.scrollWidth - title.clientWidth
            title.classList.toggle("scrolling", overflow > 1)

            if (overflow > 1) {
                title.style.setProperty("--scroll-distance", `${overflow}px`)
            }
        }

        new ResizeObserver(updateTitleScroll).observe(title)
        document.fonts.ready.then(updateTitleScroll)
    })
}

function styleFilters(filters, selected) {
    filters.forEach(filter => {
        const filterValue = filter.getAttribute("data-genre")
        filter.classList.toggle("selected", filterValue === selected)
    })
}

function applyFilters() {
    const priceMatches = {
        all: () => true,
        free: price => price === 0,
        under10: price => price > 0 && price < 10,
        "10to30": price => price >= 10 && price <= 30,
        over30: price => price > 30
    }[selectedPrice]

    const filteredGames = games.filter(game => {
        const matchesGenre = selectedGenre === "all" ||
            getNormalizedGenres(game.genre).includes(selectedGenre.toLowerCase())
        const matchesPrice = selectedPrice === "all" ||
            (game.price != null && priceMatches(game.price))
        return matchesGenre && matchesPrice
    })

    renderGames(filteredGames)
    styleFilters(document.querySelectorAll(".genreFilter"), selectedGenre)
}

function createGenreFilter(genre) {
    const filterElement = document.querySelector(`[data-genre="${genre}"]`)

    if (!filterElement) return

    filterElement.addEventListener("click", function() {
        selectedGenre = filterElement.getAttribute("data-genre")
        applyFilters()
    })
}

fetch("data.json")
    .then(response => response.json())
    .then(json => {
        games = json
        document.querySelector("#priceFilter").addEventListener("change", event => {
            selectedPrice = event.target.value
            applyFilters()
        })

        applyFilters()

        document.querySelectorAll(".filter").forEach(filter => {
            createGenreFilter(filter.getAttribute("data-genre"))
        })
    })
    .catch(error => console.log("error", error))