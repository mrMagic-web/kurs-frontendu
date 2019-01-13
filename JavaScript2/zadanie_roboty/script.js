let heroes;

fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(response => heroes = response.results)

function checkName() {
    let name = document.getElementById('name').value;
    console.log(heroes)
    result = heroes.filter(hero => hero.name[0] === name)
        .map(h => `<h3>${h.name}</h3>`)
    document.querySelector('.hero').innerHTML = result;
}


// function displayHeros(response) {
//     const heroes = response.results;
//     result = heroes.filter(hero => hero.height > 170)
//         .map(h => `<h3>${h.name}</h3>`)
//     document.querySelector('.hero').innerHTML = result;
// }