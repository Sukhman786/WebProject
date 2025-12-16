let a = document.getElementById(main)

let arr = [
    "https://i.pinimg.com/1200x/bf/b4/db/bfb4db2666e5c0fcabe399d2bcef4d2c.jpg",
    "https://i.pinimg.com/1200x/45/4d/0d/454d0da2ab825086191c8e55a97a26c7.jpg",
    "https://i.pinimg.com/736x/69/b9/59/69b959321685707981ed613785e7863f.jpg",
    "https://i.pinimg.com/736x/96/52/b6/9652b60cfeb28745ea7893824eb31784.jpg",
    "https://i.pinimg.com/736x/65/5b/c1/655bc102c11510a2e3553857823f5a56.jpg",
    "https://i.pinimg.com/736x/05/3f/50/053f50fe48cbc691148b89906c37ddb1.jpg",
    "https://i.pinimg.com/736x/1a/94/ca/1a94ca037208d6ee036c13428981d0c2.jpg",
    "https://i.pinimg.com/736x/19/a8/19/19a819fefe514a428b44121f1b435435.jpg",
    "https://i.pinimg.com/1200x/82/71/60/827160ce9ba146806ca3ce2b01656e51.jpg",
    "https://i.pinimg.com/736x/d6/79/34/d679342750be9b535a56c7ae14cc5390.jpg",
    "https://i.pinimg.com/736x/32/9a/18/329a182414b9fdddd693115b476f553f.jpg"
]

let s = ""

for(i=0; i<44; i++){
    let r = Math.floor(Math.random()*arr.length)
    s += `<div class="card"><img src=${arr[r]}></div>`
}

main.innerHTML = s
    
