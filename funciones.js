let contador = document.getElementById("numero").innerHTML = 0;

document.getElementById("btn-start").addEventListener("click", function(){
    if(contador === 0){
        document.getElementsByClassName("numero")[0].style.color="rgba(118, 255, 91, 0.795)"
        setInterval(() => {
            contador+=1 
        }, 1000);
        setInterval(() => {
            document.getElementById("numero").innerHTML = contador
        }, 1000);
    }
})
document.getElementById("btn-x10").addEventListener("click", function(){
    document.getElementsByClassName("numero")[0].style.color="rgba(255, 211, 14, 0.979)"
    if(contador === 0){
        setInterval(() => {
            contador+=10 
        }, 1000);
        setInterval(() => {
            document.getElementById("numero").innerHTML = contador
        }, 1000);
    }
})
document.getElementById("btn-x100").addEventListener("click", function(){
    document.getElementsByClassName("numero")[0].style.color="rgba(255, 211, 14, 0.979)"
    if(contador === 0){
        setInterval(() => {
            contador+=100 
        }, 1000);
        setInterval(() => {
            document.getElementById("numero").innerHTML = contador
        }, 1000);
    }
})
document.getElementById("btn-x1000").addEventListener("click", function(){
    document.getElementsByClassName("numero")[0].style.color="rgba(255, 211, 14, 0.979)"
    if(contador === 0){
        setInterval(() => {
            contador+=1000
        }, 1000);
        setInterval(() => {
            document.getElementById("numero").innerHTML = contador
        }, 1000);
    }
})
document.getElementById("btn-restart").addEventListener("click", function(){
    document.getElementById("numero").innerHTML = 0
    contador = 0
})
document.getElementById("btn-stop").addEventListener("click", function(){
    location.reload()
    
})


