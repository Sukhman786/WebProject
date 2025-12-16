let a = document.querySelector("#ele1");
a.addEventListener("click",function(){
    a.style.color = 'yellow'
    a.style.backgroundColor = "red"
})

let b = document.querySelector("#ele2");
b.addEventListener("mouseenter",function(){
    b.style.color = 'white'
    b.style.backgroundColor = "orange"
})

b.addEventListener("mouseleave",function(){
    b.style.color = 'black'
    b.style.backgroundColor = "white"
})

let c = document.getElementById('ele3')
b.addEventListener("click",function(){
    c.style.color = 'white'
    c.style.backgroundColor = "purple"
})

c.addEventListener("click",function(){
    a.innerHTML = "Greninja"
    a.style.color = "aqua"
    a.style.backgroundColor = "black"
})