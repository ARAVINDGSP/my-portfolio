
const h1 = document.getElementById("h1")
const button = document.getElementById("btn")

button.addEventListener('click', ()=>{
    console.log("clicked");
    h1.innerText = "clicked"
    document.body.style.background = "red"
})
setInterval(()=>{
    let color = Math.ceil(Math.random() * 1000000)
    console.log(color)
    document.body.style.background = `#${color}`
},
1e3
)