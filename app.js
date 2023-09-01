// skriv din JavaScript her...
var myMovies = [
	{
		title: "Break free",
		published: 2014,
		genres: ["Electronic dance music, Electro house,"],
		artist: ["Ariana Grande"],
        album: ["My everthing"]
	},
	{
		title: "One last time",
		published: 2014,
		genres: ["R&B/Soul, Pop"],
		artist: ["Ariana Grande"],
        album: ["My everthing"]
	},
	{
		title: "Focus",
		published: 2016,
		genres: ["Pop"],
		artist: ["Ariana Grande"],
        album: ["Dangerous Woman"]
	}
	,
	{
		title: "7 rings",
		published: 2019,
		genres: ["Hip hop music, Rhythm and blues, Trap music, Pop"],
		artist: ["Ariana Grande"],
        album: ["Thank U, Next"]
	},
	{
		title: "34+35",
		published: 2020,
		genres: ["Contemporary R&B, R&B/Soul, Pop"],
		artist: ["Ariana Grande"],
        album: ["Postions"]
	},
	{
		title: "God is a woman",
		published: 2018,
		genres: ["R&B/Soul, Pop"],
		artist: ["Ariana Grande"],
        album: ["Sweetner"]
	},
	{
		title: "Problem",
		published: 2014,
		genres: ["Contemporary R&B, R&B/Soul, Pop"],
		artist: ["Ariana Grande"],
        album: ["My everything"]
	},
	{
		title: "Break up with your girlfriend i'm bored",
		published: 2019,
		genres: ["Trap music, Contemporary R&B, R&B/Soul, Pop"],
		artist: ["Ariana Grande"],
        album: ["Thank U, Next"]
	},
	{
		title: "Thank U, Next",
		published: 2019,
		genres: ["R&B/Soul, Pop"],
		artist: ["Ariana Grande"],
        album: ["Thank U, Next"]
	},
	{
		title: "Into you",
		published: 2016,
		genres: ["Electronic dance music, Dance-pop, House music, Electro, Seasonal"],
		artist: ["Ariana Grande"],
        album: ["Dangerous Woman"]
	},

    {
		title: "Side to Side",
		published: 2016,
		genres: ["Reggae fusion, Pop"],
        artist: ["Ariana Grande"],
        album: ["Dangerous Woman"]
	},
    
    {
		title: "Stuck with you",
		published: 2020,
		genres: ["Pop"],
        artist: ["Ariana Grande"],
        album: ["None"]
	},

    {
		title: "Breathin",
		published: 2018,
		genres: ["Pop"],
        artist: ["Ariana Grande"],
        album: ["Sweetner"]
	},

    {
		title: "Everyday",
		published: 2016,
		genres: ["Pop"],
        artist: ["Ariana Grande"],
        album: ["Dangerous Woman"]
	},
    
    
]

const FORM = document.querySelector(".searchForm")

FORM.addEventListener("submit", submitHandler)

function submitHandler(event) {
	event.preventDefault()

	const RESULTS = myMovies.filter(function(element) {
		return searchTitle(event.target.search.value, element.title)
			|| compare(element.published, event.target.search.value)
			|| findInArray(element.genres, event.target.search.value)
			|| findInArray(element.artist, event.target.search.value)
            || findInArray(element.album, event.target.search.value)
	})

	//console.log(RESULTS)
	const LIST = RESULTS.map(createList)
	const RESULT_LIST = document.querySelector(".search__submit , search__button")

	RESULT_LIST.innerHTML = ""
	LIST.forEach(item => RESULT_LIST.appendChild(item))
	
} // end of submitHandler

function searchTitle(keyword, title) {
	return title
		.toLowerCase()
		.includes(
			keyword.toLowerCase()
		)
}

const compare = (a, b) => a == b

function findInArray(haystack, needle) {
    console.log (haystack)
	return haystack.find(function(item) {
		return item.toLowerCase().includes(needle.toLowerCase())
	})
}

function createList(movie) {
	const LI = document.createElement("li")
	LI.className = "movieResult"

	LI.innerHTML = `
	<h3>${movie.title}</h3>
	<span>${movie.published}</span>
	<h4>Genrer</h4>
	<ul class="movieGenres"></ul>
	<h4>Skuespillere</h4>
	<ul class="movieActors"></ul>`

	const movieGenres = LI.querySelector(".movieGenres")
	const movieActors = LI.querySelector(".movieActors")

	movie.genres.forEach(genre => movieGenres.innerHTML += `<li>${genre}</li>`)
	movie.artist.forEach(artist => movieActors.innerHTML += `<li>${artist}</li>`)
	
	return LI
}
