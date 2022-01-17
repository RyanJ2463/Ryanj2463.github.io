// alert("I'm connected")
const easterEgg = () => {
    return document.getElementById('title').innerHTML
    = "You will fail."
}

const bomb = Math.floor(Math.random()*20)
let treasureItem = Math.floor(Math.random()*20)
while (bomb === treasureItem) {
    treasureItem = Math.floor(Math.random()*20)
}
const treasure = (id) =>{
    if (id === bomb){
        document.getElementById(id).innerHTML= "&#x2620"
        setTimeout(() => alert("You failed"), 200);
    } else if (id === treasureItem) {
        document.getElementById(id).innerHTML = "&#x1f308"
        setTimeout(() => alert("You won"), 200);
        
    }
        else{
        return document.getElementById(id).innerHTML= "&#x1f332"
    }
    
}




