let s1 = document.getElementById("box1");
let s2 = document.getElementById("box2");
let s3 = document.getElementById("box3");
let s4 = document.getElementById("box4");
// First box -> random number
s1.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`;
})

s1.addEventListener("mouseleave",function(){
    s1.innerHTML = '<h1>1</h1>';
})
// Second box -> Two different colors one by one
let clr = 'aqua'
s2.addEventListener("mouseenter",function(){
    if(clr=='aqua'){
        s2.style.backgroundColor = 'aqua'
        clr = 'red'
    }
    else{
        s2.style.backgroundColor = 'red'
        clr = 'aqua'
    }
})

s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor = 'white'
})
// Third box -> Random color
s3.addEventListener("mouseenter",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${a},${b},${c})`
})

s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor = 'white'
})
// Fourth Box -> Random color on box 1,2 & 3
s4.addEventListener("click",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    // s1.style.backgroundColor = `rgb(${a},${b},${c})`
    // s2.style.backgroundColor = `rgb(${b},${c},${a})`
    // s3.style.backgroundColor = `rgb(${c},${a},${b})`
    s1.style.backgroundColor = `rgb(${a},255,255)`
    s2.style.backgroundColor = `rgb(255,${b},255)`
    s3.style.backgroundColor = `rgb(255,255,${c})`
})

s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor = 'white'
    s2.style.backgroundColor = 'white'
    s3.style.backgroundColor = 'white'
})
// Again Fourth Box -> double click
s1.addEventListener("dblclick",function(){
    s4.style.backgroundColor = 'aqua'
})

s1.addEventListener("mouseleave",function(){
    s4.style.backgroundColor = 'white'
})

// Cursor
let main = document.getElementById("main")
let crsr = document.getElementById("cursor")

main.addEventListener("mousemove", function(dets){
    console.log(dets.x,dets.y)
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})