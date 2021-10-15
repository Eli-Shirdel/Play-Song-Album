var audio = document.getElementById("audio")
var musics = [
    {
        name: "Halsey",
        source: "Halsey.mp3" 
    },
    {
        name: "Lenka",
        source: "Lenka.mp3" 
    },
    {
        name: "Enrique",
        source:"Enrique.mp3"
    }
]
function playFunc(event){

    var songName = event.target.dataset.title;
    console.log(songName)

    let final = musics .filter(item =>
        item.name == songName)
        final.forEach(item => {
            var src = item.source
            console.log(src)
            audio.src = src
        })

audio.play()
}

// var div = document.querySelector("div")
// var album= document.getElementsByClassName("album")
// div.addEventListener("onclick" , myFunc())
// // album.add
// function myFunc(){
//     console.log("hi")
// }
// var style = window.getComputedStyle(album , "hover")

// console.log(style)
// getComputedStyle(div, "hover")

// $(".first-nav li a").hover(
//     function(event) {
//         // The mouse has entered the element, can reference the element via 'this'
//     },
//     function (event) {
//         // The mouse has left the element, can reference the element via 'this'
//     }
//  );