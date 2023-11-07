let numeroCelle = 100
document.getElementById("btnPlayer").addEventListener("click" , function(){
    
     for (let i = 1; i <= numeroCelle ; i++) {
        //const element = array[i]; 
        document.getElementById("grid").classList.add("griglia");    //va posto sopra?
        let quadratino = document.createElement("div");
        quadratino.classList.add("square");
        grid.appendChild(quadratino);   
     }
})