import fetch from 'node-fetch';

(async function fetchFromApi(){
    // 'https://pokeapi.co/api/v2/pokemon/ditto/'
    const endpoint1 = 'https://pokeapi.co/api/v2/pokemon/ditto/';
    const endpoint2 = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(endpoint1);
    if(response.ok) {
        const result = await response.json();
        console.log('Fetched response: ', result);
    } else {
        console.error('Error calling external API');
    }
})();