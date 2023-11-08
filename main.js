let numeroCelle = 100
document.getElementById("btnPlayer").addEventListener("click" , function(){
    
     for (let i = 1; i <= numeroCelle ; i++) {
        const indexCell = [i]; 
        console.log(indexCell);
        document.getElementById("grid").classList.add("griglia");    //va posto sopra?
        let quadratino = document.createElement("div");
        quadratino.classList.add("square");
        grid.appendChild(quadratino);  
        quadratino.addEventListener("click" , function () {
            this.classList.toggle("black");
            console.log(indexCell)
            //let numeroquadtratino = document.createElement("p");
            //numeroquadtratino.classList.add("stylenumber");
            //numb.appendChild(numeroquadtratino);
            quadratino.innerHTML += `${indexCell}`
            quadratino.classList.add("stylenumber");

        })
    }
})
//(if numerocelle = 81 ==> cambiare classe aggiunta)
if (numeroCelle == 81) {
document.getElementById("diffMedia").addEventListener("click" , function(){

    for (let i = 1; i <= medieCelle ; i++) {
        const indexCell = [i]; 
        console.log(indexCell);
        document.getElementById("grid").classList.add("griglia");    //va posto sopra?
        let quadratino = document.createElement("div");
        quadratino.classList.add("mediosquare");
        grid.appendChild(quadratino);  
        quadratino.addEventListener("click" , function () {
            this.classList.add("black");
            console.log(indexCell)
            let numeroquadtratino = document.createElement("p");
            numeroquadtratino.classList.add("stylenumber");
            numb.appendChild(numeroquadtratino);
            document.querySelector().innerHTML += `${indexCell}`
        })
    }
})
}