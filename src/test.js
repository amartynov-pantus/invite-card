const episodeOrderOfPlay= ['front', 'first-pages', 'last-pages', 'back'];
let currentEpisode= 'first-pages';


const fk = episodeOrderOfPlay.map((elem, index, array) => {return  elem === currentEpisode ? array[index+1] : undefined}).filter(elem => elem !== undefined)

console.log(fk.toString())



// function filterByID(elem, index, arr) {
//     // console.log(elem, index, arr)
//     if (elem === currentEpisode)
//     {
//         console.log(arr[index+1])
//         return arr[index+1]
//     }
// }


// var arr = ["aaa", "xxx", "aaa", "xxx", "aaa"];
// var foundIn = [1, 3];
//
// var res = episodeOrderOfPlay.filter(function (elem, index) {
//     return elem === currentEpisode ? 'sd' : '-'
// })
//
// console.log(res) // ["aaa", "aaa", "aaa"]

