

const episodeOrderOfPlay= ['front', 'first-pages', 'last-pages', 'back'];
let currentEpisode= 'front';

function nextEpisode(array, currentElement){
    for (let i=0; i < array.length; i++){
        if (array[i] === currentElement){
            return array[i+1]
        }
    }
}

console.log(nextEpisode(episodeOrderOfPlay, currentEpisode))