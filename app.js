const API_URL = "https://api.themoviebd.org/3/discover/movie?sort_by=popularity.desc&api_key=a5320aafe4b8da043225cea23c0eb7d80&page=1";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=a5320aafe4b8da043225cea23c0eb7d80&query=";

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// get movies
getMovies(API_URL)
async function getMovies(url){
const res = await fetch(url)
const data = await res.json()
console.log(data.results);
}
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const searchValue = search.value
    if(searchValue && searchValue !==''){
        getMovies(SEARCH_URL+searchValue)
        searchValue = ''
    }else{
        window.location.reload()
    }
})